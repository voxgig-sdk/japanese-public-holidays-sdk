# JapanesePublicHolidays SDK configuration

module JapanesePublicHolidaysConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "JapanesePublicHolidays",
        "slug" => "japanese-public-holidays",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://marubox.jp/holidays",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "jpn" => {},
          "year" => {},
        },
      },
      "entity" => {
        "jpn" => {
          "fields" => [
            {
              "name" => "date",
              "title" => "Date",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Date in Japan time, YYYY-MM-DD.",
              "format" => "date",
            },
            {
              "name" => "kind",
              "title" => "Kind",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "national, substitute, citizens or special.",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "weekday",
              "title" => "Weekday",
              "type" => "`$STRING`",
              "short" => "English three-letter weekday.",
            },
          ],
          "name" => "jpn",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jp.json",
                  "segments" => [
                    {
                      "lit" => "jp.json",
                    },
                  ],
                  "parts" => [
                    "jp.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "year" => {
          "fields" => [
            {
              "name" => "date",
              "title" => "Date",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Date in Japan time, YYYY-MM-DD.",
              "format" => "date",
            },
            {
              "name" => "kind",
              "title" => "Kind",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "national, substitute, citizens or special.",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$OBJECT`",
              "req" => true,
            },
            {
              "name" => "weekday",
              "title" => "Weekday",
              "type" => "`$STRING`",
              "short" => "English three-letter weekday.",
            },
          ],
          "name" => "year",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jp/{year}.json",
                  "segments" => [
                    {
                      "lit" => "jp",
                    },
                    {
                      "lit" => "{year}.json",
                    },
                  ],
                  "parts" => [
                    "jp",
                    "{year}.json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "year",
                        "orig" => "year",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => 2026,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "year",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    JapanesePublicHolidaysFeatures.make_feature(name)
  end
end
