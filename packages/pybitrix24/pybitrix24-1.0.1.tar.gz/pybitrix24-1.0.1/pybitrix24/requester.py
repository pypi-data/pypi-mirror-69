import json
import sys

from collections import OrderedDict

from .exceptions import PBx24RequestError, PyBitrix24Error

try:
    from urllib.request import Request, urlopen
    from urllib.parse import urlencode
    from urllib.error import HTTPError
except ImportError:
    from urllib2 import Request, urlopen, HTTPError
    from urllib import urlencode


def decode_response(s):
    if sys.version_info.major == 2:
        return json.load(s)
    else:
        return json.loads(s.read().decode('utf-8'))


def request(url, query=None, data=None):
    if query is not None:
        url += '?' + urlencode(query)

    if data is not None:
        data = json.dumps(data).encode('utf-8')

    # Make a request
    request_ = Request(url, data=data,
                       headers={'Content-Type': 'application/json'})
    try:
        response = urlopen(request_)
    except HTTPError as e:
        return decode_response(e)
    except Exception as e:
        raise PBx24RequestError("Error on request", e)

    # Decode response body
    try:
        return decode_response(response)
    except Exception as e:
        raise PyBitrix24Error("Error decoding of server response", e)


def flatten(d):
    """Return a dict as a list of lists.

    >>> flatten({"a": "b"})
    [['a', 'b']]
    >>> flatten({"a": [1, 2, 3]})
    [['a', [1, 2, 3]]]
    >>> flatten({"a": {"b": "c"}})
    [['a', 'b', 'c']]
    >>> flatten({"a": {"b": {"c": "e"}}})
    [['a', 'b', 'c', 'e']]
    >>> flatten({"a": {"b": "c", "d": "e"}})
    [['a', 'b', 'c'], ['a', 'd', 'e']]
    >>> flatten({"a": {"b": "c", "d": "e"}, "b": {"c": "d"}})
    [['a', 'b', 'c'], ['a', 'd', 'e'], ['b', 'c', 'd']]
    """
    if not isinstance(d, dict):
        return [[d]]

    returned = []
    for key, value in sorted(d.items()):
        # Each key, value is treated as a row.
        nested = flatten(value)
        for nest in nested:
            current_row = [key]
            current_row.extend(nest)
            returned.append(current_row)

    return returned


def parametrize(params):
    """Return list of params as params.

    >>> parametrize(['a'])
    'a'
    >>> parametrize(['a', 'b'])
    'a[b]'
    >>> parametrize(['a', 'b', 'c'])
    'a[b][c]'

    """
    returned = str(params[0])
    returned += "".join("[" + str(p) + "]" for p in params[1:])
    return returned


def encode_url(params):
    """Urlencode a multidimensional dict."""

    # Not doing duck typing here. Will make debugging easier.
    if not isinstance(params, dict):
        raise TypeError("Only dicts are supported.")

    params = flatten(params)

    url_params = OrderedDict()
    for param in params:
        value = param.pop()

        name = parametrize(param)
        if isinstance(value, (list, tuple)):
            name += "[]"

        url_params[name] = value

    return urlencode(url_params, doseq=True)


def prepare_batch_command(calls):
    commands = {}
    for name, call in calls.items():
        if isinstance(call, str):
            command = call
        elif isinstance(call, tuple):
            try:
                command = '{}?{}'.format(call[0], encode_url(call[1]))
            except IndexError as e:
                raise PyBitrix24Error(
                    'The "' + name + '" call must be a pair of values', e)
        elif isinstance(call, dict):
            try:
                command = '{}?{}'.format(call['method'],
                                         encode_url(call['params']))
            except KeyError as e:
                raise PyBitrix24Error(
                    'The "' + name + '" call has the following required '
                                     'keys: method, params.', e)
        else:
            if isinstance(call, list):
                raise PyBitrix24Error(
                    'The "' + name + '" call must be a tuple')
            else:
                raise PyBitrix24Error(
                    'The "' + name + '" call must be a string, a tuple or '
                                     'a dictionary.')
        commands[name] = command
    return commands
