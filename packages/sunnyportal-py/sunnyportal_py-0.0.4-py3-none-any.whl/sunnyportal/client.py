# Copyright (c) 2016 Erik Johansson <erik@ejohansson.se>
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License as
# published by the Free Software Foundation; either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307
# USA

from . import requests

import http.client as http
import logging
import ssl
import certifi


class Client(object):
    def __init__(self, username, password, server='com.sunny-portal.de',
                 port=http.HTTPS_PORT):
        super().__init__()
        self.log = logging.getLogger(__name__)
        self.username = username
        self.password = password
        self.server = server
        self.port = port
        self.token = None

    def create_ssl_context(self):
        context = ssl.create_default_context(cafile=certifi.where())
        context.check_hostname = True
        return context

    def do_request(self, request):
        conn = http.HTTPSConnection(
            self.server, self.port, context=self.create_ssl_context())
        return request.perform(conn)

    def get_token(self):
        if self.token is None:
            req = requests.AuthenticationRequest(self.username, self.password)
            self.token = self.do_request(req)
        return self.token

    def logout(self):
        if self.token is None:
            return
        req = requests.LogoutRequest(self.get_token())
        self.do_request(req)
        self.token = None

    def get_plants(self):
        req = requests.PlantListRequest(self.get_token())
        res = self.do_request(req)
        return [Plant(self, p['oid'], p['name']) for p in res.plants]


class Plant(object):
    def __init__(self, client, oid, name=None):
        self.client = client
        self.oid = oid
        self.name = name

    def get_token(self):
        return self.client.get_token()

    def profile(self):
        req = requests.PlantProfileRequest(self.get_token(), self.oid)
        return self.client.do_request(req)

    def last_data_exact(self, date):
        req = requests.LastDataExactRequest(self.get_token(), self.oid, date)
        return self.client.do_request(req)

    def all_data(self, interval):
        req = requests.AllDataRequest(self.get_token(), self.oid, interval)
        return self.client.do_request(req)

    def day_overview(self, date):
        req = requests.DayOverviewRequest(self.get_token(), self.oid, date)
        return self.client.do_request(req)

    def month_overview(self, date):
        req = requests.MonthOverviewRequest(self.get_token(), self.oid, date)
        return self.client.do_request(req)

    def year_overview(self, date):
        req = requests.YearOverviewRequest(self.get_token(), self.oid, date)
        return self.client.do_request(req)
