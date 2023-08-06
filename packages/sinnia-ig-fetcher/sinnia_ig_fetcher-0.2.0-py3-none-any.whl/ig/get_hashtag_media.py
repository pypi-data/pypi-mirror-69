import sys, os, requests, logging
import pymysql
import pkg_resources 
from datetime           import time, timedelta, datetime, tzinfo, date
from ig.instagram_utils import InstagramUtils
#from alerts_pb2 import InternalAlert

LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
is_imported = None

class HashtagsMediaFetcher:

  ### Build HashtagsMediaFetcher according to how it's being used
  def __init__(self):
    try:
      if is_imported:
        print('HashtagsMediaFetcher as module')
        logger, conf_file = config_fetcher_as_module()
      else:
        print('HashtagsMediaFetcher as main')
        logger, conf_file = config_fetcher_as_main()
      self.logger = logger
      self.utils = InstagramUtils()
      self.utils.init(conf_file, True)
    except:
      self.logger.exception('Error initializing HashtagsMediaFetcher')

      
  ### Process all hashtags from database
  def process_all(self, arg):  
    try:
      exec_start_time = datetime.now()
      date_limit = None
      if arg:
        date_limit = self.utils.get_date(arg)
        self.logger.debug("Getting date_limit for '%s'" % (date_limit))
      conn = self.utils.get_conn('ig')
      hashtags = self.get_hashtags(conn)
      for item in hashtags:
        user_id = item[0]
        hashtag = item[1]
        hashtag_id = item[2]
        access_token = item[3]
        if hashtag_id is None:
          self.logger.debug("Getting hashtag_id for '%s'" % (hashtag))
          hashtag_id = self.get_hashtag_id(conn, user_id, hashtag, access_token)
          if hashtag_id is None:
            self.logger.debug("Didnt find hashtag_id for '%s'; skipping" % (hashtag))
            continue
        self.logger.debug("Getting limit media for '%s' (date %s)" % (hashtag, date_limit))
        limit_media = self.get_limit_media(conn, hashtag, date_limit)
        try:
          # Consider that HT results have no date
          all_data = []
          values = {"hashtag_id": hashtag_id, "user_id": user_id}
          host = self.utils.from_config('graph_api.host')
          # Fetch top media. We only fetch one page
          path = self.utils.from_config('graph_api.top_path').format(**values)
          url = '%s%s'%(host,path)
          max_pages = 5
          self.request_hashtag_media(all_data, url, access_token, None,
                                     1, max_pages)
          self.logger.debug("\n\nCount after top_media for %s: %s\n\n" % (hashtag, len(all_data)))
          # Fetch recent media. We will paginate until we reach the last media
          # stored in the DB (default behaviour), or until date_limit
          # (if provided). Hard limit is MAX_PAGES so as not to paginate
          # indefinitely if limit_media_id is not in the result
          path =self.utils.from_config('graph_api.recent_path').format(**values)
          url = '%s%s'%(host,path)
          max_pages = 10
          self.request_hashtag_media(all_data, url, access_token, limit_media,
                                     1, max_pages)
          self.logger.debug("\n\nCount after recent_media for %s: %s\n\n" % (hashtag, len(all_data)))
          # Insert data
          self.parse_and_insert(conn, user_id, all_data, hashtag)
        except:
          self.logger.exception("Error while parsing or inserting %s" % hashtag)
      conn.close()
    except:
      self.logger.exception('Error executing script')
    finally:
      self.logger.info('Total time: %s' % (datetime.now() - exec_start_time))

    
  def request_hashtag_id(self, user_id, hashtag, access_token):
    host = self.utils.from_config('graph_api.host')
    path = self.utils.from_config('graph_api.id_path').format(**locals())
    url = '%s%s'%(host,path)
    payload = {'access_token': access_token}
    if self.utils.has_trace_enabled():
      self.logger.debug('Url: %s' % url)
    response = requests.get('%s%s'%(host,path), params=payload)
    response_as_json = self.utils.response_as_json(response)
    if self.utils.has_trace_enabled():
      self.logger.debug('Response id: %s' % response_as_json)
    return response_as_json 


  def request_hashtag_media(self, all_data, url, access_token, limit_media, i, max_pages):
    self.logger.debug('Current page for %s: %s' % (url, i))
    payload = {'access_token': access_token}
    if self.utils.has_trace_enabled():
      self.logger.debug('Url: %s' % url)
    response = requests.get(url, params=payload)
    response_as_json = self.utils.response_as_json(response)
    #if self.utils.has_trace_enabled():
      #self.logger.debug('Response media: %s' % response_as_json)
    limit_reached = False
    data = response_as_json.get('data')
    if len(data) == 0:
      self.logger.debug('No more data for %s: %s' % (url, i))
      return
    for item in data:
      all_data.append(item)
      self.logger.debug('Adding media_id: %s' % (item["id"]))
      if limit_media is not None and str(item["id"]) == str(limit_media):
        limit_reached = True
        self.logger.debug('Reached limit media_id for %s: %s' % (url, limit_media))
        return
    if i == max_pages:
      self.logger.debug('Reached max pages for %s: %s' % (url, i))
      return
    paging = response_as_json.get('paging')
    if not paging:
      return
    else:
      url = paging.get("next")
      i += 1
      self.request_hashtag_media(all_data, url, access_token, limit_media, i,
                                 max_pages)

    
  def get_hashtags(self, conn):
    hashtags = list()
    try:
      query = self.utils.from_config("queries.get_hashtags")
      cursor = conn.cursor(pymysql.cursors.SSCursor)
      cursor.execute(query)
      while (1):
        row = cursor.fetchone()
        if not row:
          break
        user_id = row[0].decode('UTF-8')
        hashtag = row[1].decode('UTF-8')
        hashtag_id = row[2]
        access_token = row[3].decode('UTF-8')
        hashtags.append((user_id, hashtag, hashtag_id, access_token))
        self.logger.debug("Adding user_id %s"%(user_id))
      cursor.close()
      self.logger.debug("Added %s hashtags "%(len(hashtags)))
    except:
      self.logger.exception("Error while getting hashtags")
    return hashtags

  
  def get_hashtag_id(self, conn, user_id, hashtag, access_token):
    hashtag_id = None
    response = self.request_hashtag_id(user_id, hashtag, access_token)
    if response and response["data"]!=None and len(response["data"])>0:
      hashtag_id = response["data"][0]["id"]
      cursor = conn.cursor()
      cursor.execute('SET character_set_connection=utf8mb4;')
      values = {"hashtag": hashtag, "hashtag_id": hashtag_id}
      cmd = self.utils.from_config('queries.update_ht').format(**values)
      cursor.execute(cmd)
      conn.commit()
      cursor.close()        
      self.logger.debug("Updated hashtag '%s': %s" % (hashtag, str(hashtag_id)))
    return hashtag_id

  
  def get_limit_media(self, conn, hashtag, date_limit):
    media_id = None
    try:
      if date_limit != None:
        values = {"hashtag": hashtag, "date_limit": str(date_limit)}
        query = self.utils.from_config("queries.get_last_media_after").format(**values)
      else:
        values = {"hashtag": hashtag}
        query = self.utils.from_config("queries.get_last_media").format(**values)
      cursor = conn.cursor(pymysql.cursors.SSCursor)
      cursor.execute(query)
      row = cursor.fetchone()
      if not row:
        return None
      media_id = row[0].decode('UTF-8')
      cursor.close()
      self.logger.debug("Got limit media for %s (date %s): %s "%(hashtag, date_limit, media_id))
    except:
      self.logger.exception("Error while getting limit media for %s"%hashtag)
    return media_id

  def parse_and_insert(self, conn, user_id, data, hashtag):      
    cursor = conn.cursor()
    cursor.execute('SET character_set_connection=utf8mb4;')
    for item in data:
      media_url = str(item.get("media_url", ""))
      values = {"id" : str(item["id"]),
                "user_id": 0,
                "created_at": str(datetime.utcnow()), # info not present
                "fetched_at": str(datetime.utcnow()),
                "type": str(item.get("media_type",'')),
                "caption": str(item.get("caption",'')).replace("'",'"'),
                "url": str(item.get("permalink",'')),
                "likes_count": item.get("like_count",0),
                "comments_count": item.get("comments_count",0),
                "image": media_url}
      command = self.utils.from_config('queries.insert_media').format(**values)
      if self.utils.has_trace_enabled():
          self.logger.debug("insert command: %s" % command)
      cursor.execute(command)
      conn.commit()

      ht_values = {"media_id": str(item["id"]),
                   "hashtag": hashtag,
                   "lower_hashtag": str.lower(hashtag),
                   "created_at": str(datetime.utcnow())}
      ht_command = self.utils.from_config('queries.insert_ht').format(**ht_values)
      if self.utils.has_trace_enabled():
          self.logger.debug("insert_ht command: %s" % ht_command)
      cursor.execute(ht_command)
      conn.commit()
    self.logger.debug("Inserted %s media for hashtag '%s'" % (len(data), hashtag))
    cursor.close()

  
# def send_alert(alert_text, alert_type, alert_priority):
#   alert = InternalAlert()
#   alert.priority = alert_priority    # {INFO, WARN, SEVERE}
#   alert.type = "IG_FETCH_MEDIA"
#   alert.project = alert_type
#   alert.text = alert_text
#   alert.created_at = int((datetime.utcnow()-datetime(1970,1,1)).total_seconds())*1000
#   body = alert.SerializeToString()
#   url='http://trb-message-exchange-hrd.appspot.com/alert/internal'
#   self.logger.debug('alert url: %s' % url)
#   self.logger.debug('alert body: %s...' % body[:250])
#   r = requests.post(url, body)

      
### If used as main: set Stream+File log handlers and local config file
def config_fetcher_as_main():
  print('Setting Stream+File log handlers and local config file.')

  # configure root logger
  frmttr = logging.Formatter(LOG_FORMAT)
  logger = logging.getLogger() # root logger 
  logger.setLevel('DEBUG')

  # add console handler
  ch = logging.StreamHandler()
  ch.setFormatter(frmttr)
  logger.addHandler(ch)

  # add file handler
  log_file = 'logs/get_hashtag_media.log'
  d = os.path.dirname(log_file)
  if not os.path.exists(d) and d != '':
    os.makedirs(d)
  fh = logging.FileHandler(log_file)
  fh.setFormatter(frmttr)
  logger.addHandler(fh)

  # configure other loggers
  logging.getLogger('urllib3').setLevel('WARNING')
  logging.getLogger('shared').setLevel('INFO')

  # initialize Fetcher with local file
  conf_file = "ig/conf/get_hashtag_media.yaml"
  return (logger, conf_file)


### If used as module: set Stream log handler and packaged config file
def config_fetcher_as_module():
  print('Setting Stream log handler and packaged config file')

  # configure module logger
  frmttr = logging.Formatter(LOG_FORMAT)
  logger = logging.getLogger(__name__) # module logger
  logger.setLevel('DEBUG')

  # add console handler
  ch = logging.StreamHandler()
  ch.setFormatter(frmttr)
  logger.addHandler(ch)

  # configure other loggers
  logging.getLogger('urllib3').setLevel('WARNING')
  logging.getLogger('shared').setLevel('INFO')

  # initialize Fetcher with packaged file
  resource_package = __name__
  resource_path = '/'.join(('conf', 'get_hashtag_media.yaml'))
  conf_file = pkg_resources.resource_filename(resource_package, resource_path)
  return (logger, conf_file)


### Entrypoint

if __name__ == '__main__':
  # Program used as script: run immediately
  fetcher = HashtagsMediaFetcher()
  fetcher.process_all(sys.argv[1:])
else:
  # Program used as import: set flag
  is_imported = True


