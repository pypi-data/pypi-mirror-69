#!/usr/bin/env python
from typing import Optional, BinaryIO

import requests

from .params import _OutputType, DB, Hide, Bgcolor
from .errors import (UnknownServerError, UnknownClientError, BadKeyError, BadFileSizeError,
                     ShortLimitReachedError, LongLimitReachedError)
from .containers import SauceResponse


class SauceNao:
    SAUCENAO_URL = 'https://saucenao.com/search.php'

    def __init__(self,
                 api_key:  Optional[str] = None,
                 *,
                 testmode: int = 0,
                 dbmask:   Optional[int] = None,
                 dbmaski:  Optional[int] = None,
                 db:       int = DB.ALL,
                 numres:   int = 6,
                 hide:     int = Hide.NONE,
                 bgcolor:  int = Bgcolor.NONE,
                 ) -> None:
        self.params = {
            'testmode': testmode,
            'db': db,
            'numres': numres,
            'hide': hide,
            'bgcolor': bgcolor,    # from https://saucenao.com/testing/
        }
        if api_key is not None:
            self.params['api_key'] = api_key
        if dbmask is not None:
            self.params['dbmask'] = dbmask
        if dbmaski is not None:
            self.params['dbmaski'] = dbmaski

    def from_file(self, file: BinaryIO) -> SauceResponse:
        params = self.params.copy()
        return self._search(params, {'file': file})

    def from_url(self, url: str) -> SauceResponse:
        params = self.params.copy()
        params['url'] = url
        return self._search(params)

    def _search(self, params, files=None):
        params['output_type'] = _OutputType.JSON
        resp = requests.post(self.SAUCENAO_URL, params=params, files=files)
        status_code = resp.status_code

        if status_code == 200:
            raw = self._process_response(resp, params)
            return SauceResponse(raw)

        # Taken from https://saucenao.com/tools/examples/api/identify_images_v1.1.py
        # Actually server returns 200 and user_id=0 if key is bad
        elif status_code == 403:
            raise BadKeyError('Invalid API key')

        elif status_code == 413:
            raise BadFileSizeError('File is too large')

        elif status_code == 429:
            if 'Daily' in resp.json()['header']['message']:
                raise LongLimitReachedError('24 hours limit reached')
            raise ShortLimitReachedError('30 seconds limit reached')

        else:
            raise UnknownServerError(f'Unknown API error. HTTP code: {status_code}')

    @staticmethod
    def _process_response(resp, params):
        parsed_resp = resp.json()
        resp_header = parsed_resp['header']

        status = resp_header['status']
        user_id = int(resp_header['user_id'])

        # Taken from https://saucenao.com/tools/examples/api/identify_images_v1.1.py
        if status < 0:
            raise UnknownClientError('Unknown client error, status < 0')
        elif status > 0:
            raise UnknownServerError('Unknown API error, status > 0')
        elif user_id < 0:
            raise UnknownServerError('Unknown API error, user_id < 0')

        # Request passed, but api_key was ignored
        elif user_id == 0 and 'api_key' in params:
            raise BadKeyError('Invalid API key')

        long_remaining = resp_header['long_remaining']
        short_remaining = resp_header['short_remaining']

        # Taken from https://saucenao.com/tools/examples/api/identify_images_v1.1.py
        if short_remaining < 0:
            raise ShortLimitReachedError('24 hours limit reached')
        elif long_remaining < 0:
            raise LongLimitReachedError('30 seconds limit reached')

        return parsed_resp
