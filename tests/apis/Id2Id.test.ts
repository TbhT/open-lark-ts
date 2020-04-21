import debug from 'debug'
import axios, { AxiosInstance } from 'axios'
import { getTenantAccessToken } from '../../src/apis/OAuth'
import {
  openId2LarkId,
  larkId2OpenId,
  messageId2OpenMessageId
} from '../../src/apis/Id2Id'
import * as Config from '../config.json'

debug.enable('test*')

const D = debug('test:id2id')
let tenantAccessToken: string

beforeAll(async () => {
  const { tenant_access_token } = await getTenantAccessToken({
    appId: Config.bot.appId,
    appSecret: Config.bot.appSecret
  })

  tenantAccessToken = tenant_access_token
})

describe('内部id转换', () => {
  test('will convert open_id to lark_id', async () => {
    const { code, user_id, msg } = await openId2LarkId({
      tenantAccessToken,
      openId: Config.development.open_id
    })

    D('open_id to lark_id: %s %s', code, msg)

    expect(user_id).toBe(Config.development.lark_id)
  })

  test('will convert lark_id to open_id', async () => {
    const { code, msg, open_id } = await larkId2OpenId({
      tenantAccessToken,
      larkId: Config.development.lark_id
    })

    D('open_id %s: ', code, msg, open_id)

    expect(open_id).toBe(Config.development.open_id)
  })
})
