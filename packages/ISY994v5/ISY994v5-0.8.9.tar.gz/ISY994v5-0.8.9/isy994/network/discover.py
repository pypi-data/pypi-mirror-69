#!/usr/local/bin/python
import socket
import struct
from threading import Thread, Timer

TIMEOUT = 1.5


class Discover(object):
    def __init__(self):
        pass

    def start(self):
        ISYs = []
        MCAST_GRP = "239.255.255.250"
        MCAST_PORT = 1900
        msg = 'M-SEARCH * HTTP/1.1\r\nHOST:239.255.255.250:1900\r\nMAN:"ssdp.discover"\r\nMX:1\r\nST:urn:udi-com:device:X_Insteon_Lighting_Device:1\r\n\r\n'.encode()

        self.discovery_done = False

        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)
        sock.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_TTL, 5)
        mreq = struct.pack("4sl", socket.inet_aton(MCAST_GRP), socket.INADDR_ANY)
        sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreq)
        sock.settimeout(0.1)

        def multicast_timeout():
            self.discovery_done = True

        timer = Timer(TIMEOUT, multicast_timeout)
        timer.start()
        sock.sendto(msg, (MCAST_GRP, MCAST_PORT))

        while self.discovery_done != True:
            try:
                data = sock.recv(10240).decode()

                if "HTTP/1.1 200 OK" in data:
                    index = data.index("LOCATION:")
                    index2 = data.index("/desc")
                    location = data[index + 16 : index2]
                    index = data.index("USN:")
                    index2 = data.index("::urn")
                    uuid = data[index + 4 : index2]
                    ISY = "%s [%s]" % (location, uuid)
                    # print('isy found',ISY)
                    ISYs.append(location)
            except Exception as e:
                pass

        sock.close()
        return ISYs


if __name__ == "__main__":
    d = Discover()
    isys = d.start()

    print(isys)

    for x in isys:
        print(x)
