

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { JapanesePublicHolidaysSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('YearEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JAPANESE_PUBLIC_HOLIDAYS_TEST_LIVE=TRUE.
  afterEach(liveDelay('JAPANESE_PUBLIC_HOLIDAYS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JapanesePublicHolidaysSDK.test()
    const ent = testsdk.Year()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = JapanesePublicHolidaysSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Year().list({"year":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JAPANESE_PUBLIC_HOLIDAYS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'year.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"fo":"date","h":"Date","n":"date","r":true,"sh":"Date in Japan time, YYYY-MM-DD.","t":"`$STRING`","key$":"date","index$":0},"kind":{"a":true,"h":"Kind","n":"kind","r":true,"sh":"national, substitute, citizens or special.","t":"`$STRING`","key$":"kind","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$OBJECT`","key$":"name","index$":2},"weekday":{"a":true,"h":"Weekday","n":"weekday","r":false,"sh":"English three-letter weekday.","t":"`$STRING`","key$":"weekday","index$":3}},"name":"year","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /jp/{year}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":2026,"k":"param","n":"year","or":"year","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/jp/{year}.json","q":{"exist":["year"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"jp"},{"lit":"{year}.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"year","name__orig":"year","Name":"Year","name_":"year","name-":"year","NAME":"YEAR","index$":1}, {"active":true,"entity":"year","key$":"BasicYearFlow","kind":"basic","name":"BasicYearFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"year":"year01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"year_ref01"}}],"index$":0}]}, 'Year', {"GET /jp/{year}.json":{"protocol":"http","parameters":[{"name":"year","in":"path","required":true,"description":"Four-digit year, 1955 to the latest published year (2027 on 2026-10-23).","schema":{"type":"integer","minimum":1955},"example":2026,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let year_ref01_data = Object.values(setup.data.existing.year)[0] as any

    // LIST
    const year_ref01_ent = client.Year()
    const year_ref01_match: any = {}
    year_ref01_match['year'] = setup.idmap['year01']

    const year_ref01_list = (await year_ref01_ent.list(year_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/year/YearTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = JapanesePublicHolidaysSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['year01','year02','year03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JAPANESE_PUBLIC_HOLIDAYS_TEST_YEAR_ENTID': idmap,
    'JAPANESE_PUBLIC_HOLIDAYS_TEST_LIVE': 'FALSE',
    'JAPANESE_PUBLIC_HOLIDAYS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JAPANESE_PUBLIC_HOLIDAYS_TEST_YEAR_ENTID']

  const live = 'TRUE' === env.JAPANESE_PUBLIC_HOLIDAYS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JAPANESE_PUBLIC_HOLIDAYS_TEST_YEAR_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new JapanesePublicHolidaysSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.JAPANESE_PUBLIC_HOLIDAYS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
