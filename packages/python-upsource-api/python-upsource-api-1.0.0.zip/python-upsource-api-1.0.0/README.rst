====================
Python Upsource API
====================

API Handler for Upsource web service, providing basic authentication (which
seems to be the only kind that Upsource supports) and a few methods.

Installation
============

Install::

    pip install python-upsource-api

Compatibility
-------------

This package is compatible Python versions 2.7, 3.4, 3.5 and 3.6.


Usage
=====

The API handler is easy to use, you just need to initialize it with the
connection parameters and use any of the methods to get the required information 

Example getting projects with coverage and issues metrics::

    from upsource.UpsourceClient import UpsourceClient
    from upsource.HubClient import HubClient

    upsource = UpsourceClient(base_url, username='admin', password='xxx')
    hub = HubClient(hub_url, username='admin', password='xxx') or hub = HubClient(hub_url, token='xxxxx')


