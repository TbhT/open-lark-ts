import axios from 'axios'
import debug from 'debug'
import { getTenantAccessToken } from '../../src/apis/OAuth'
import { createChat } from '../../src/apis/Chat'
import * as Config from '../config.json'

debug.enable('test*')

const D = debug('test:chat')

describe.skip('群信息和群管理', () => {
  let tenantAccessToken: string
  beforeAll(async () => {
    const { tenant_access_token } = await getTenantAccessToken({
      appId: Config.bot.appId,
      appSecret: Config.bot.appSecret
    })
    D('tenant access token %s', tenant_access_token)
    tenantAccessToken = tenant_access_token
  })
  test('should create a chat', async () => {
    const { data } = await createChat({
      tenantAccessToken,
      openIds: []
    })
    D('create a chat %o', data)
  })
})
