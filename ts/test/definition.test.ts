import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "jpn",
    "accessor": "Jpn",
    "op": "list",
    "method": "GET",
    "path": "/jp.json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "country": "JP",
      "updated": "2026-09-29",
      "source": {
        "name": "Cabinet Office, Government of Japan",
        "url": "x"
      },
      "credit": "x",
      "licence": "x",
      "docs": "https://marubox.jp/holidays/",
      "holidays": [
        {
          "date": "2026-01-01",
          "weekday": "Thu",
          "name": {
            "en": "New Year's Day",
            "ja": "元日"
          },
          "kind": "national"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "year",
    "accessor": "Year",
    "op": "list",
    "method": "GET",
    "path": "/jp/{year}.json",
    "args": [
      {
        "name": "year",
        "wire": "year",
        "value": 2026
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "country": "JP",
      "year": 2026,
      "updated": "2026-09-29",
      "source": {
        "name": "Cabinet Office, Government of Japan",
        "url": "x"
      },
      "credit": "x",
      "licence": "x",
      "docs": "https://marubox.jp/holidays/",
      "holidays": [
        {
          "date": "2026-01-01",
          "weekday": "Thu",
          "name": {
            "en": "New Year's Day",
            "ja": "元日"
          },
          "kind": "national"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
