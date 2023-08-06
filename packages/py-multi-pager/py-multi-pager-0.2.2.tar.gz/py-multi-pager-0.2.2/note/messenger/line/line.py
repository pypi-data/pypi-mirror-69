import sys
import requests
from pprint import pprint

from note.messenger.messenger import messenger

class Line(messenger):
    def __init__(self, API_ID, API_PASSWORD):
        super().__init__(API_ID, API_PASSWORD)
        self._img = ""

    def print_all(self):
        print(self.API_PASSWORD)
        print(self.API_ID)
        print(self._msg)

    def send_message(self):
        TARGET_URL = "https://notify-api.line.me/api/notify"
        headers = {'Authorization': 'Bearer ' + self.API_PASSWORD}
        payload = {'message': self._msg}
        files = {'imageFile': open(self._img, 'rb')} if self._img else None
        r = requests.post(TARGET_URL, headers=headers, params=payload, files=files)
        if files:
            files['imageFIle'].close()
            return r.status_code
        print("Message has been sent")

    @property
    def image(self):
        return self._img

    @image.setter
    def image(self, image):
        self._img = image