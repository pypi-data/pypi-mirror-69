# -*- coding: utf-8 -*-

import os

import requests
from urllib.parse import urlencode


class Client:
    CLIENT_ID = os.environ.get('LINE_NOTIFY_CLIENT_ID')
    CLIENT_SECRET = os.environ.get('LINE_NOTIFY_CLIENT_SECRET')
    REDIRECT_URI = os.environ.get('LINE_NOTIFY_REDIRECT_URI')

    def __init__(self,
                 client_id=None,
                 client_secret=None,
                 redirect_uri=None,
                 bot_origin=None,
                 api_origin=None,
                 *args, **kwargs):
        super(Client, self).__init__(*args, **kwargs)
        self.client_id = client_id or self.CLIENT_ID
        self.client_secret = client_secret or self.CLIENT_SECRET
        self.redirect_uri = redirect_uri or self.REDIRECT_URI

        self.bot_origin = bot_origin or "https://notify-bot.line.me"
        self.api_origin = api_origin or "https://notify-api.line.me"

    def get_auth_link(self, state):
        query_string = {
            'scope': 'notify',
            'response_type': 'code',
            'client_id': self.client_id,
            'redirect_uri': self.redirect_uri,
            'state': state
        }
        return '{url}/oauth/authorize?{query_string}'.format(
            url=self.bot_origin, query_string=urlencode(query_string))

    def get_access_token(self, code):
        response = self._post(
            url='{url}/oauth/token'.format(url=self.bot_origin),
            headers={
                'Content-Type': 'application/x-www-form-urlencoded',
            }, data={
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': self.redirect_uri,
                'client_id': self.client_id,
                'client_secret': self.client_secret
            })
        return response.json().get('access_token')

    def status(self, access_token):
        response = self._get(
            url='{url}/api/status'.format(url=self.api_origin),
            headers={
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer {token}'.format(token=access_token)
            })
        return response.json()

    def send(self,
             access_token,
             message,
             image_path=None,
             image_thumbnail=None,
             image_fullsize=None,
             sticker_id=None,
             sticker_package_id=None,
             notification_disabled=False):
        """
        :param access_token: string
        :param message: string
        :param image_path: string
        :param image_thumbnail: url string
        :param image_fullsize: url string
        :param sticker_id: integer
        :param sticker_package_id: integer
        :param notification_disabled: boolean
        :return:
        """
        files = {}
        params = {'message': message}

        if image_path and os.path.isfile(image_path):
            files = {'imageFile': ('imageFile', open(image_path, 'rb'))}
        if image_fullsize and image_thumbnail:
            params.update({
                'imageFullsize': image_fullsize,
                'imageThumbnail': image_thumbnail
            })
        if sticker_id and sticker_package_id:
            params.update({
                'stickerId': sticker_id,
                'stickerPackageId': sticker_package_id
            })
        if notification_disabled:
            params.update({'notificationDisabled': notification_disabled})

        response = self._post(
            url='{url}/api/notify'.format(url=self.api_origin),
            data=params,
            files=files,
            headers={
                'Authorization': 'Bearer {token}'.format(token=access_token)
            })
        return response.json()

    def revoke(self, access_token):
        response = self._post(
            url='{url}/api/revoke'.format(url=self.api_origin),
            headers={
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer {token}'.format(token=access_token)
            })
        return response.json()

    def _get(self, url, headers=None, timeout=None):
        response = requests.get(
            url, headers=headers, timeout=timeout
        )

        self.__check_error(response)
        return response

    def _post(self, url, data=None, headers=None, files=None, timeout=None):
        response = requests.post(
            url, headers=headers, data=data, files=files, timeout=timeout
        )
        self.__check_error(response)
        return response

    @staticmethod
    def __check_error(response):
        if 200 <= response.status_code < 300:
            pass
        else:
            raise ValueError(response.json())
