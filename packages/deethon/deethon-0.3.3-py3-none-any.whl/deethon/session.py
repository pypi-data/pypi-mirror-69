import re
from pathlib import Path

import requests

from . import errors, consts, utils, tag, types


class Session:
    def __init__(self, arl_token: str):
        self._arl_token = arl_token
        self._req = requests.Session()
        self._req.cookies["arl"] = self._arl_token
        self._csrf_token = self.get_api(consts.METHOD_GET_USER)["checkForm"]

    def get_api(self, method: str, api_token="null", json=None) -> dict:
        params = {
            "api_version": "1.0",
            "api_token": api_token,
            "input": "3",
            "method": method,
        }
        return self._req.post(consts.API_URL, params=params,
                              json=json).json()["results"]

    def download(self,
                 url: str,
                 bitrate: str = "FLAC",
                 progress_callback=None):
        match = re.match(
            r"https?://(?:www\.)?deezer\.com/(?:\w+/)?(\w+)/(\d+)", url)
        if match:
            mode = match.group(1)
            content_id = match.group(2)
            if mode == "track":
                return self.download_track(types.Track(content_id), bitrate,
                                           progress_callback)
            if mode == "album":
                return self.download_album(types.Album(content_id), bitrate)
            else:
                raise errors.ActionNotSupported(mode)
        else:
            raise errors.InvalidUrlError(url)

    def download_track(self,
                       track: types.Track,
                       bitrate: str = "FLAC",
                       progress_callback=None) -> Path:

        track.add_more_tags(self)
        bitrate = utils.get_quality(bitrate)
        download_url = utils.get_stream_url(track, bitrate)

        ext = ".flac" if bitrate == "9" else ".mp3"
        file_path = utils.get_file_path(track, ext)
        crypt = self._req.get(download_url, stream=True)
        total = int(crypt.headers["Content-Length"])
        current = 0

        with file_path.open("wb") as f:
            for data in utils.decrypt_file(crypt.iter_content(2048), track.id):
                current += len(data)
                f.write(data)
                if progress_callback:
                    progress_callback(current, total)

        tag.tag(file_path, track)

        return file_path

    def download_album(self, album: types.Album, bitrate: str, stream=False):
        tracks = (self.download_track(track, bitrate) for track in album.tracks)
        if stream:
            return tracks
        return tuple(tracks)

    @property
    def csrf_token(self):
        return self._csrf_token
