import axios, { AxiosInstance } from 'axios'
import * as Config from '../config.json'
import debug from 'debug'
import { getUserId, getUserChatId, getBasicUserInfo } from '../../src/apis/User'
import { getTenantAccessToken } from '../../src/apis/OAuth'

debug.enable('test*')

const D = debug('test:user')
let tenantAccessToken: string
let instance: AxiosInstance

beforeAll(async () => {
  const { tenant_access_token } = await getTenantAccessToken({
    appId: Config.bot.appId,
    appSecret: Config.bot.appSecret
  })

  instance = axios.create({
    headers: {
      Authorization: `Bearer ${tenant_access_token}`,
      'content-type': 'application/json'
    }
  })

  D('tenant access token %s', tenant_access_token)
  tenantAccessToken = tenant_access_token
})

describe('获取用户信息', () => {
  test('should return wangbinghua@bytedance.com user_id and open_id', async () => {
    const { data } = await getUserId({
      email: 'wangbinghua@bytedance.com',
      tenantAccessToken
    })

    D('user_id %o', data)
    expect(data).toHaveProperty('open_id')
    expect(data).toHaveProperty('user_id')
  })

  test('should return wangbinghua@bytedance.com user_id and open_id with axios instance', async () => {
    const { data } = await getUserId({
      email: 'wangbinghua@bytedance.com',
      tenantAccessToken,
      instance
    })

    D('user_id %o', data)
    expect(data).toHaveProperty('open_id')
    expect(data).toHaveProperty('user_id')
  })
  test('should return chat_id with user_id', async () => {
    const { data } = await getUserChatId({
      userId: Config.development.user_id,
      tenantAccessToken
    })

    D('chat_id %o', data)
    expect(data).toHaveProperty('chat_id')
  })

  test('should return chat_id with user_id with axios instance', async () => {
    const { data } = await getUserChatId({
      userId: Config.development.user_id,
      tenantAccessToken,
      instance
    })

    D('chat_id %o', data)
    expect(data).toHaveProperty('chat_id')
  })

  test('should return chat_id with open_id', async () => {
    const { data } = await getUserChatId({
      openId: Config.development.open_id,
      tenantAccessToken
    })

    D('chat_id %o', data)
    expect(data).toHaveProperty('chat_id')
  })

  test('should return chat_id with open_id with axios instance', async () => {
    const { data } = await getUserChatId({
      openId: Config.development.open_id,
      tenantAccessToken,
      instance
    })

    D('chat_id %o', data)
    expect(data).toHaveProperty('chat_id')
  })

  test('should return basic user info with user_id', async () => {
    const { data } = await getBasicUserInfo({
      openId: Config.development.open_id,
      tenantAccessToken
    })

    D('basic user info by user_id %o', data)
    expect(data).toHaveProperty('avatar')
    expect(data).toHaveProperty('name')
    expect(data).toHaveProperty('open_id')
    expect(data).toHaveProperty('user_id')
  })

  test('should return basic user info with user_id with axios instance', async () => {
    const { data } = await getBasicUserInfo({
      openId: Config.development.open_id,
      tenantAccessToken,
      instance
    })

    D('basic user info by user_id %o', data)
    expect(data).toHaveProperty('avatar')
    expect(data).toHaveProperty('name')
    expect(data).toHaveProperty('open_id')
    expect(data).toHaveProperty('user_id')
  })

  test('should return basic user info with open_id', async () => {
    const { data } = await getBasicUserInfo({
      userId: Config.development.user_id,
      tenantAccessToken
    })

    D('basic user info by user_id %o', data)
    expect(data).toHaveProperty('avatar')
    expect(data).toHaveProperty('name')
    expect(data).toHaveProperty('open_id')
    expect(data).toHaveProperty('user_id')
  })

  test('should return basic user info with open_id with axios instance', async () => {
    const { data } = await getBasicUserInfo({
      userId: Config.development.user_id,
      tenantAccessToken,
      instance
    })

    D('basic user info by user_id %o', data)
    expect(data).toHaveProperty('avatar')
    expect(data).toHaveProperty('name')
    expect(data).toHaveProperty('open_id')
    expect(data).toHaveProperty('user_id')
  })
})
