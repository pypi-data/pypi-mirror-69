#!/usr/bin/env python
from typing import Optional, List
from .params import DB


class BasicSauce:
    def __init__(self, raw):
        result_header = raw['header']
        data = raw['data']

        self.raw:        dict = raw
        self.similarity: float = float(result_header['similarity'])
        self.thumbnail:  str = result_header['thumbnail']
        self.index_id:   int = result_header['index_id']
        self.index_name: str = result_header['index_name']
        self.title:      Optional[str] = self._get_title(data)
        self.url:        Optional[str] = self._get_url(data)
        self.author:     Optional[str] = self._get_author(data)

    @staticmethod
    def _get_title(data):
        # Order is important!
        if 'title' in data:
            return data['title']
        elif 'eng_name' in data:
            return data['eng_name']
        elif 'material' in data:
            return data['material']
        elif 'source' in data:
            return data['source']
        elif 'created_at' in data:
            return data['created_at']

    @staticmethod
    def _get_url(data):
        # Order is important!
        if 'ext_urls' in data:
            return data['ext_urls'][0]
        elif 'getchu_id' in data:
            return f'http://www.getchu.com/soft.phtml?id={data["getchu_id"]}'

    @staticmethod
    def _get_author(data):
        # Order is important!
        if 'author' in data:
            return data['author']
        elif 'author_name' in data:
            return data['author_name']
        elif 'member_name' in data:
            return data['member_name']
        elif 'pawoo_user_username' in data:
            return data['pawoo_user_username']
        elif 'company' in data:
            return data['company']
        elif 'creator' in data:
            if isinstance(data['creator'], list):
                return data['creator'][0]
            return data['creator']


class BookSauce(BasicSauce):
    def __init__(self, result):
        super().__init__(result)
        data = result['data']

        self.part: str = data['part']


class VideoSauce(BasicSauce):
    def __init__(self, result):
        super().__init__(result)
        data = result['data']

        self.part:     str = data['part']
        self.year:     str = data['year']
        self.est_time: str = data['est_time']


class SauceResponse:
    _BOOK_INDEXES = [DB.HMagazines, DB.Madokami, DB.MangaDex]
    _VIDEO_INDEXES = [DB.Anime, DB.HAnime, DB.Movies, DB.Shows]

    def __init__(self, resp):
        resp_header = resp['header']
        parsed_results = self._parse_results(resp['results'])

        self.raw:                 dict = resp
        self.user_id:             str = resp_header['user_id']
        self.account_type:        str = resp_header['account_type']
        self.short_limit:         str = resp_header['short_limit']
        self.long_limit:          str = resp_header['long_limit']
        self.long_remaining:      int = resp_header['long_remaining']
        self.short_remaining:     int = resp_header['short_remaining']
        self.status:              int = resp_header['status']
        self.results_requested:   str = resp_header['results_requested']
        self.search_depth:        str = resp_header['search_depth']
        self.minimum_similarity:  float = resp_header['minimum_similarity']
        self.query_image_display: str = resp_header['query_image_display']
        self.query_image:         str = resp_header['query_image']
        self.results_returned:    int = resp_header['results_returned']
        self.results:             List[BasicSauce] = parsed_results

    def _parse_results(self, results):
        if results is None:
            return []

        filtered_results = sorted(results, key=lambda r: float(r['header']['similarity']), reverse=True)

        parsed_results = []
        for result in filtered_results:
            index_id = result['header']['index_id']
            if index_id in self._BOOK_INDEXES:
                parsed_results.append(BookSauce(result))
            elif index_id in self._VIDEO_INDEXES:
                parsed_results.append(VideoSauce(result))
            else:
                parsed_results.append(BasicSauce(result))
        return parsed_results

    def __len__(self):
        return len(self.results)

    def __getitem__(self, item):
        return self.results[item]

    def __repr__(self):
        return (f'<SauceResponse(results_count={len(self.results)}, long_remaining={self.long_remaining}, '
                f'short_remaining={self.short_remaining})>')
