# JapanesePublicHolidays SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "JapanesePublicHolidays",
            "slug": "japanese-public-holidays",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://marubox.jp/holidays",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "jpn": {},
                "year": {},
            },
        },
        "entity": {
      "jpn": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Date in Japan time, YYYY-MM-DD.",
            "format": "date",
          },
          {
            "name": "kind",
            "title": "Kind",
            "type": "`$STRING`",
            "req": True,
            "short": "national, substitute, citizens or special.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "weekday",
            "title": "Weekday",
            "type": "`$STRING`",
            "short": "English three-letter weekday.",
          },
        ],
        "name": "jpn",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/jp.json",
                "segments": [
                  {
                    "lit": "jp.json",
                  },
                ],
                "parts": [
                  "jp.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "year": {
        "fields": [
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Date in Japan time, YYYY-MM-DD.",
            "format": "date",
          },
          {
            "name": "kind",
            "title": "Kind",
            "type": "`$STRING`",
            "req": True,
            "short": "national, substitute, citizens or special.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$OBJECT`",
            "req": True,
          },
          {
            "name": "weekday",
            "title": "Weekday",
            "type": "`$STRING`",
            "short": "English three-letter weekday.",
          },
        ],
        "name": "year",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/jp/{year}.json",
                "segments": [
                  {
                    "lit": "jp",
                  },
                  {
                    "lit": "{year}.json",
                  },
                ],
                "parts": [
                  "jp",
                  "{year}.json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "year",
                      "orig": "year",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 2026,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "year",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
