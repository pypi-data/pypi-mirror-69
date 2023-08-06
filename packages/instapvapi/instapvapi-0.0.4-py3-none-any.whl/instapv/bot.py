import os
import json
import uuid
import time
import pickle
import random
import hashlib
import requests
from . import DeviceGenerator, Config, Tools
from .exceptions import *
from .logger import Logger
from .ig.user import User
from .ig.media import Media
from .ig.business import Business 
from .ig.live import Live 
from .ig.account import Account 

# Ignore InsecureRequestWarning
from requests.packages.urllib3.exceptions import InsecureRequestWarning
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

# Logger for debugging
log = Logger()

if not os.path.exists('cache'):
    os.mkdir('cache')

class Bot:


    def __init__(self, username: str, password: str, debug: bool = False):
        self.cache = hashlib.md5(username.encode('utf-8')).hexdigest()
        self.config = Config()
        self.tools = Tools()
        self.device = DeviceGenerator()
        self.is_logged_in = False
        self.last_response = None
        self.debug = debug
        try:
            if os.path.exists(f'cache/{self.cache}.pkl'):
                if self.debug:
                    log.info('Loading session...')
                self.session(False)
            else:
                if self.debug:
                    log.warn('Creating new session ...')
                self.req = requests.Session()
        except IOError:
            if self.debug:
                log.warn('Creating new session ...')
            self.req = requests.Session()
        self.set_user(username, password)
        self.device_id = self.device.generate_device_id(self._s.hexdigest())

        # Call Classes
        self.user  = User(self)
        self.media = Media(self)
        self.business = Business(self)
        self.live = Live(self)
        self.account = Account(self)


    def set_proxy(self, proxy=None):
        if proxy is not None:
            proxies = {'http': proxy}
            self.req.proxies.update(proxies)


    def set_user(self, username: str, password: str):
        self._s = hashlib.md5()
        self._s.update(username.encode('utf-8') + password.encode('utf-8'))
        self.username = username
        self.password = password
        self.uuid = self.tools.generate_uuid(True)

    def session(self, create=False):
        if create:
            with open(f'cache/{self.cache}.pkl', 'wb') as f:
                pickle.dump(self.req, f)
        else:
            with open(f'cache/{self.cache}.pkl', 'rb') as f:
                self.req = pickle.load(f)

    def login(self):
        proxy = self.req.proxies.get('http')
        if not self.is_logged_in:
            endpoint = f'si/fetch_headers/?challenge_type=signup&guid={self.tools.generate_uuid(False)}'
            request  = self.request(endpoint, login=True)
            if request: 
                data = {
                    'phone_id': self.tools.generate_uuid(True),
                    '_csrftoken': self.last_response.cookies['csrftoken'],
                    'username': self.username,
                    'guid': self.uuid,
                    'device_id': self.device_id,
                    'password': self.password,
                    'login_attempt_count': '0'
                }
                if self.request('accounts/login/', data, True):
                    self.is_logged_in = True
                    self.account_id = self.last_json_response["logged_in_user"]["pk"]
                    self.rank_token = self.uuid
                    self.token = self.last_response.cookies["csrftoken"]
                    if (not os.path.exists(f'cache/{self.cache}.pkl')):
                        pass
                    if (self.debug):
                        log.info(f'INFO: LOGGED IN AS {self.username}\n')
                    self.sync()
                    self.load_user_list()
                    self.get_inbox()
                    self.get_activity()
                    return True

    def sync(self):
        params = {
            '_uuid': self.uuid,
            '_uid': self.account_id,
            'id': self.account_id,
            '_csrftoken': self.token,
            'experiments': self.config.EXPERIMENTS
        }
        return self.request('qe/sync/', params)

    def load_user_list(self):
        return self.request('friendships/autocomplete_user_list/')

    def time_line_feed(self):
        return self.request('feed/timeline/')
    
    def get_inbox(self):
        inbox = self.request('direct_v2/inbox/?')
        return inbox

    def get_activity(self):
        activity = self.request('news/inbox/?')
        return activity

    def request(self, endpoint: str, params: dict = None, login: bool = False, signed_post: bool = True):
        if self.debug:
            log.info(f"REQUEST: {self.config.API_URL + endpoint}")

        if not self.is_logged_in and not login:
            if 'bad_password' in self.last_json_response:
                raise InvalidCredentialsException(self.last_json_response['error_title'])

        self.req.headers.update({'Connection': 'close',
            'Accept': '*/*',
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie2': '$Version=1',
            'Accept-Language': 'en-US',
            'User-Agent': self.device.build_user_agent()
        })

        while True:
            try:
                if params:
                    if signed_post:
                        params = self.tools.generate_signature(
                            json.dumps(params)
                        )
                    response = self.req.post(self.config.API_URL + endpoint, data=params)
                else:
                    response = self.req.get(self.config.API_URL + endpoint)
                if self.debug:
                    log.info(f'CODE: {str(response.status_code)}', True)
                    log.info(f"RESPONSE: {response.text}\n")
                break
            except Exception as e:
                log.error(f'ERROR: An error orrcured trying after 120 seconds')
                log.error(f'ERROR: {e}')
                time.sleep(10)

        if response.status_code == 200:
            self.last_response = response
            self.last_json_response = json.loads(response.text)
            self.session(True)
            return self.last_json_response
        elif response.status_code == 405:
            raise AccessDeniedException(f'Access deniend to request: {self.config.API_URL + endpoint}')
        else:
            if (self.debug):
                log.error(f'CODE: {str(response.status_code)}')
            try:
                self.last_response = response
                self.last_json_response = json.loads(response.text)
                if self.last_json_response['message'] == 'challenge_required':
                    raise ChallengeRequiredException('Challenge required')
                if (self.debug):
                    log.info(f'RESPONSE: {str(self.last_json_response)}')
            except SentryBlockException:
                raise
            return False