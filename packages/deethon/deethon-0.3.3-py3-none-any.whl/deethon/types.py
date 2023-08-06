from __future__ import annotations

from functools import cached_property, lru_cache
from typing import Union, TYPE_CHECKING

import requests

from . import consts, errors

if TYPE_CHECKING:
    from .session import Session


@lru_cache
class Album:
    def __init__(self, album_id: Union[int, str]):
        self.r = requests.get(
            f"https://api.deezer.com/album/{album_id}").json()
        if "error" in self.r:
            raise errors.DeezerApiError(self.r['error']['type'],
                                        self.r['error']['message'],
                                        self.r['error']['code'])
        self.id = self.r["id"]
        self.title = self.r["title"]
        self.artist = self.r["artist"]["name"]
        self.upc = self.r["upc"]
        self.link = self.r["link"]
        self.record_type = self.r["record_type"]
        self.release_date = self.r["release_date"]
        self.total_tracks = self.r["nb_tracks"]
        self.genres = [genre["name"] for genre in self.r["genres"]["data"]]
        self.label = self.r["label"]

    @cached_property
    def cover_small(self) -> bytes:
        return requests.get(self.r["cover_small"]).content

    @cached_property
    def cover_medium(self) -> bytes:
        return requests.get(self.r["cover_medium"]).content

    @cached_property
    def cover_big(self) -> bytes:
        return requests.get(self.r["cover_big"]).content

    @cached_property
    def cover_xl(self) -> bytes:
        return requests.get(self.r["cover_xl"]).content

    @cached_property
    def tracks(self) -> list:
        return [Track(x["id"]) for x in self.r["tracks"]["data"]]


@lru_cache
class Track:
    def __init__(self, track_id: Union[int, str]):
        r = requests.get(f"https://api.deezer.com/track/{track_id}").json()
        if "error" in r:
            raise errors.DeezerApiError(r['error']['type'],
                                        r['error']['message'],
                                        r['error']['code'])
        self.artist = r['artist']['name']
        self.bpm = r['bpm']
        self.disk_number = r['disk_number']
        self.duration = r['duration']
        self.id = r['id']
        self.isrc = r['isrc']
        self.link = r['link']
        self.number = r['track_position']
        self.replaygain_track_peak = r['gain']
        self.release_date = r['release_date']
        self.title = r['title']
        self.title_short = r['title_short']

        ymd_date = self.release_date.split("-")  # 0 YYYY 1 MM 2 DD
        self.release_year = ymd_date[0]
        self.release_date_four_digits = f"{ymd_date[2]}{ymd_date[1]}"

        self.album_id = r['album']["id"]

        self.md5_origin = None
        self.media_version = None
        self.composer = None
        self.author = None

    @cached_property
    def album(self) -> Album:
        return Album(self.album_id)

    def add_more_tags(self, session: Session):
        track_info = session.get_api(consts.METHOD_GET_TRACK, session.csrf_token,
                                     {"sng_id": self.id})
        self.md5_origin = track_info["MD5_ORIGIN"]
        self.media_version = track_info["MEDIA_VERSION"]

        if "composer" in track_info["SNG_CONTRIBUTORS"]:
            self.composer = track_info["SNG_CONTRIBUTORS"]["composer"]
        if "author" in track_info["SNG_CONTRIBUTORS"]:
            self.author = track_info["SNG_CONTRIBUTORS"]["author"]
