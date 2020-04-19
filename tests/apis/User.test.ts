import axios from 'axios'
import * as Config from '../config.json'
import debug from 'debug'
import { getUserId } from '../../src/apis/User'
import { getTenantAccessToken } from '../../src/apis/OAuth'

debug.enable('test*')

const D = debug('test:user')
let tenantAccessToken: string

beforeAll(async () => {
  const { tenant_access_token } = await getTenantAccessToken({
    appId: Config.bot.appId,
    appSecret: Config.bot.appSecret
  })

  D('tenant access token %s', tenant_access_token)
  tenantAccessToken = tenant_access_token
})

describe('获取用户信息', () => {
  test('should return wangbinghua@bytedance.com user_id', async () => {
    const { data } = await getUserId({
      email: 'wangbinghua@bytedance.com',
      tenantAccessToken
    })

    expect(data).toHaveProperty('open_id')
    expect(data).toHaveProperty('user_id')
  })
})
