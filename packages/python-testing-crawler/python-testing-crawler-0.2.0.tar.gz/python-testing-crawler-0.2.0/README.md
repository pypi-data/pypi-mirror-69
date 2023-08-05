# Python Testing Crawler

_A crawler for automated functional testing of a web application_

Crawling a server-side-rendered web application is a _low cost_ way to get _low quality_ test coverage of your JavaScript-light web application.

If you have only partial test coverage of your routes, but still want to protect against silly mistakes, then this is for you. It follows links and can post forms.

Works with the test clients for Flask (inc Flask-WebTest), Django and Zope/WebTest.

## Installation

```
$ pip install python-testing-crawler
```

## Usage

Create a crawler using your framework's existing test client, tell it where to start and what rules to obey, then set it off:

```
from python_testing_crawler import Crawler
from python_testing_crawler import Rule, Request

def test_crawl_all():
    client = ## ... existing testing client
    ## ... any setup ...
    crawler = Crawler(
        client=my_testing_client,
        initial_paths=['/'],
        rules=[
            Rule("a", '/.*', "GET", Request()),
        ]
    )
    crawler.crawl()
```

This will crawl all anchor links to relative addresses beginning "/". Any exceptions encountered will be collected and presented at the end of the crawl. For **more power** see the Rules section below.

If you need to authorise the client's session, e.g. login, then you should that before creating the Crawler.

It is also a good idea to create enough data, via fixtures or otherwise, to expose enough endpoints.

## Crawler Options

| Param | Description |
| --- | --- |
| `initial_paths` |  list of paths/URLs to start from
| `rules` | list of rules
| `path_attrs` | list of attribute names to get paths/URLs from; defaults to "href" but include "src" if you want to check e.g. `<link>`, `<script>` or even `<img>`
| `ignore_css_selectors` |any elements matching this list of CSS selectors will be ignored
| `ignore_form_fields` | list of form input names to ignore when determining the identity/uniqueness of a form. Include CSRF token field names here.
| `max_requests` | crawler will raise an exception if this limit is exceeded
| `capture_exceptions` | keep going on any exception and fail at the end of the crawl instead of during (default `True`)
| `should_process_handlers` | list of "should process" handlers; see Handlers section
| `check_response_handlers` | list of "check response" handlers; see Handlers section

## Rules

The crawler has to be told what URLs to follow, what forms to post and what to ignore.

Rules are four-tuples:

```(source element, URL/path, HTTP method, action to take)```

These are matched against every link or form that the crawler encounters, in reverse priority order.

Supported actions:

1. `Request(only=False, params=None)` -- follow a link or submit a form
  * `only=True` will retrieve a page but _not_ spider its links.
  * the dict `params` allows you to specify _overrides_ for a form's default values
1. `Ignore` -- do nothing
1. `Allow` -- allow a HTTP status code, i.e. do not consider it to be an error.


### Example Rules

#### Follow all local/relative links

```
HYPERLINKS_ONLY_RULE_SET = [
    Rule(ANCHOR, '/.*', GET, Request()),
    Rule(AREA, '/.*', GET, Request()),
]
```

#### Request but do not spider all links

```
REQUEST_ONLY_EXTERNAL_RULE_SET = [
    Rule(ANCHOR, '.*', GET, Request(only=True)),
    Rule(AREA, '.*', GET, Request(only=True)),
]
```

This is useful for finding broken links.  You can also check `<link>` tags from the `<head>` if you include the following rule plus set a Crawler's `path_attrs` to `("HREF", "SRC")`.

```Rule(LINK, '.*', GET, Request())```

#### Submit forms with GET or POST

```
SUBMIT_GET_FORMS_RULE_SET = [
    Rule(FORM, '.*', GET, Request())
]

SUBMIT_POST_FORMS_RULE_SET = [
    Rule(FORM, '.*', POST, Request())
]
```

Setting `Request(params={...}` on a specific form lets you specify what values to submit.`

#### Allow some routes to fail

```
PERMISSIVE_RULE_SET = [
    Rule('.*', '.*', GET, Allow([*range(400, 600)])),
    Rule('.*', '.*', POST, Allow([*range(400, 600)]))
]
```

## Crawl Graph

The crawler builds up a graph of your web application. It can be interrogated via `crawler.graph` when the crawl is finished.

See `Node` in docs (TODO).

## Handlers

Two hooks points are provided:

### Whether to process a Node

Using `should_process_handlers`, you can register functions that take a `Node` and return a `bool` of whether the Crawler should "process" -- follow a link or submit a form -- or not.

### Whether a response is acceptable

Using `check_response_handlers`, you can register functions that take a `Node` and response object (specific to your test client) and return a bool of whether the response should constitute an error.

If your function returns `True`, the Crawler with throw an exception.
