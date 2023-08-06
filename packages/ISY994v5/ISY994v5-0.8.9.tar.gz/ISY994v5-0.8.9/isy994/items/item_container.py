#! /usr/bin/env python

"""

container for a collection of items

container_type = device, variable, program, scene, controller

publishes all item events back to the controller object

"""

import copy
import logging

logger = logging.getLogger(__name__)

# containter events = {'add','remove','property'}


class Item_Container(object):
    def __init__(self, controller, container_type):
        self.controller = controller
        self.container_type = container_type
        self.items_retrieved = False

        self.list = {}  # indexed by device(node) address

        self.started = False

    def start(self):
        pass

    def send_request(self, path, timeout=None):
        return self.controller.send_request(path, timeout)

    def websocket_event(self, event):
        pass

    def add(self, item, key):
        self.list[key] = item
        self.event(item, "add")

    def remove(self, key):
        item = self.list[key]
        del self.list[key]
        self.event(item, "remove")

    def get(self, key):
        if key in self.list:
            return self.list[key]
        else:
            return None

    def get_list_copy(self):
        return copy.copy(self.list)

    def property_change(
        self, item, property_, value
    ):  # called by the item to publish a change
        self.event(item, "property", property_, value)

    def event(self, item, event, *args):  # publish event to controller
        self.controller.container_event(self, item, event, args)
