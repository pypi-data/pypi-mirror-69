import json
import pkgutil


def get_resource(filename):
    return pkgutil.get_data(__package__, 'data/' + filename)


version = '0.4.0'

categories = json.loads(get_resource('categories.json').decode())
sorts = json.loads(get_resource('sorts.json').decode())
blacklist = set(json.loads(get_resource('blacklist.json').decode()))

default_headers = {'User-Agent': 'pirate get'}
default_timeout = 10

default_mirror = 'https://apibay.org'
mirror_list = 'https://proxybay.bz/list.txt'
