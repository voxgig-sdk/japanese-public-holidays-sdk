<?php
declare(strict_types=1);

// JapanesePublicHolidays SDK configuration

class JapanesePublicHolidaysConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "JapanesePublicHolidays",
                "slug" => "japanese-public-holidays",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://marubox.jp/holidays",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "jpn" => [],
                    "year" => [],
                ],
            ],
            "entity" => [
        'jpn' => [
          'fields' => [
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Date in Japan time, YYYY-MM-DD.',
              'format' => 'date',
            ],
            [
              'name' => 'kind',
              'title' => 'Kind',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'national, substitute, citizens or special.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'weekday',
              'title' => 'Weekday',
              'type' => '`$STRING`',
              'short' => 'English three-letter weekday.',
            ],
          ],
          'name' => 'jpn',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/jp.json',
                  'segments' => [
                    [
                      'lit' => 'jp.json',
                    ],
                  ],
                  'parts' => [
                    'jp.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'year' => [
          'fields' => [
            [
              'name' => 'date',
              'title' => 'Date',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Date in Japan time, YYYY-MM-DD.',
              'format' => 'date',
            ],
            [
              'name' => 'kind',
              'title' => 'Kind',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'national, substitute, citizens or special.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'weekday',
              'title' => 'Weekday',
              'type' => '`$STRING`',
              'short' => 'English three-letter weekday.',
            ],
          ],
          'name' => 'year',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/jp/{year}.json',
                  'segments' => [
                    [
                      'lit' => 'jp',
                    ],
                    [
                      'lit' => '{year}.json',
                    ],
                  ],
                  'parts' => [
                    'jp',
                    '{year}.json',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'year',
                        'orig' => 'year',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 2026,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'year',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return JapanesePublicHolidaysFeatures::make_feature($name);
    }
}
