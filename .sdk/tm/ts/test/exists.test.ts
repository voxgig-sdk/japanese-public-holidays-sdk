
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { JapanesePublicHolidaysSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = JapanesePublicHolidaysSDK.test()
    equal(testsdk instanceof JapanesePublicHolidaysSDK, true,
      'JapanesePublicHolidaysSDK.test() must return a client synchronously')
  })

})
