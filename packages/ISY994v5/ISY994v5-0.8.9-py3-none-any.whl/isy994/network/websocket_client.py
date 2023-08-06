

#!/usr/local/bin/python

import websocket
import threading
from base64 import b64encode
import logging
import time

import xml.etree.ElementTree as ET

from .websocket_event import Websocket_Event

logger = logging.getLogger(__name__)
consoleHandler = logging.StreamHandler()

websocket.enableTrace(True,handler=consoleHandler)

class Websocket_Client(object):

    def __init__(self,controller,address,port,username,password,https):
        self._address = address
        self._port = port
        self.controller = controller
        self._https = https

        self._auth = b64encode((username+':'+password).encode('UTF-8')).decode("ascii")

        self._headers = [
            'Authorization: Basic %s' % self._auth, 
            "Sec-WebSocket-Protocol: ISYSUB",
            "Origin: com.universal-devices.websockets.isy"
        ]

        self._ws_thread = None
        self._connected = False
        self.keep_connected = True
        self.connect()

    def close(self):
        self._ws.keep_running=False
        self.keep_connected=False
            
    @property
    def connected(self):
        return self._connected

    @connected.setter
    def connected(self,connected):
        self._connected = connected
        if self.controller:
            self.controller.websocket_connected(connected)

    def connect(self):
        def stay_connected():
            while self.keep_connected:
                try:
                    logger.warning ('Opening Websocket')

                    self._ws = websocket.WebSocketApp(
                        "ws://"+self._address+"/rest/subscribe",
                        header=self._headers,
                        on_open = lambda ws : self._on_open (ws),
                        on_message = lambda ws,message : self._on_message (ws,message),
                        on_error = lambda ws,err : self._on_error (ws,err),
                        on_close = lambda ws : self._on_close (ws),
                    )

                    self._ws.run_forever(ping_interval=30,ping_timeout=20)

                except Exception as err:
                    logger.error ('Failed to open Websocket {}'.format(err))
                finally:
                    logger.warn ('WS runforever stopped')
                
                self.connected = False
                logger.warning ('Waiting to reopen Websocket')
                time.sleep(5)

            logger.warning ('Exiting stay connected')
        
        if self._ws_thread is None or self._ws_thread.isAlive is False:
            logger.warning ('Starting websocket thread')
            self._ws_thread = threading.Thread(
                target=stay_connected, args=())
                
            self._ws_thread.daemon = True
            self._ws_thread.start()
        else:
            logger.warning ('NOT starting websocket thread')
        
    def _on_open(self,ws):
        logger.info('Connected')
        self.connected = True

    def _on_message(self,ws, message):
        logger.info('Websocket Message: {}'.format(message))
        print('Websocket Message: {}'.format(message))

        try:
            event_node = ET.fromstring (message)        
            
            if event_node.tag == 'Event':
                event = Websocket_Event(event_node)

                if event.valid:
                    if self.controller:
                        self.controller.websocket_event(event)
        
        except Exception as ex:
            logger.error('Websocket On Message Error {}'.format(ex))

    def _on_error(self,ws, error):
        logger.error('Websocket Error: {}'.format(error))

    def _on_close(self,ws):
        logger.warning('Websocket Disonnected')
        self.connected = False
        #time.sleep(5)
        #self.connect()




if __name__ == "__main__":
    websocket.enableTrace(True)

    try:
        wsc = Websocket_Client(False,"192.168.1.51",80,'admin','admin',False)

        while True:
            time.sleep(2)

    except KeyboardInterrupt:
        print("KeyboardInterrupt has been caught.")

