#!/usr/bin/env python
# coding=utf-8
from __future__ import unicode_literals


AUTHOR = u'Benoît Bryon'
SITENAME = u"L'élabomobile"
SITEURL = 'http://elabomobile.org'

PATH = 'content'
SLUGIFY_SOURCE = 'basename'
FILENAME_METADATA = '(?P<slug>.*)'
PAGE_PATHS = ['pages']
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'
ARTICLE_PATHS = ['evenements']
ARTICLE_SAVE_AS = 'evenements/{slug}.html'
INDEX_SAVE_AS = 'index.html'
STATIC_PATHS = ['']
USE_FOLDER_AS_CATEGORY = False
PATH_METADATA = '(?P<slug>.*)/'
SLUGIFY_SOURCE = 'basename'

THEME = 'assets/html'
TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'fr'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ()

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

PLUGINS = [
    'pelican_fontawesome',
]
DIRECT_TEMPLATES = ['index', 'agenda']
