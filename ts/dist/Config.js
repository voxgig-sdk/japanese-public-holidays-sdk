"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'JapanesePublicHolidays',
        slug: "japanese-public-holidays",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "now": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://marubox.jp/holidays",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            jpn: {},
            year: {},
        }
    };
    entity = {
        "jpn": {
            "fields": [
                {
                    "name": "date",
                    "title": "Date",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Date in Japan time, YYYY-MM-DD.",
                    "format": "date"
                },
                {
                    "name": "kind",
                    "title": "Kind",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "national, substitute, citizens or special."
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "weekday",
                    "title": "Weekday",
                    "type": "`$STRING`",
                    "short": "English three-letter weekday."
                }
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
                                    "lit": "jp.json"
                                }
                            ],
                            "parts": [
                                "jp.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "year": {
            "fields": [
                {
                    "name": "date",
                    "title": "Date",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Date in Japan time, YYYY-MM-DD.",
                    "format": "date"
                },
                {
                    "name": "kind",
                    "title": "Kind",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "national, substitute, citizens or special."
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "weekday",
                    "title": "Weekday",
                    "type": "`$STRING`",
                    "short": "English three-letter weekday."
                }
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
                                    "lit": "jp"
                                },
                                {
                                    "lit": "{year}.json"
                                }
                            ],
                            "parts": [
                                "jp",
                                "{year}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "year",
                                        "orig": "year",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 2026
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "year"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map