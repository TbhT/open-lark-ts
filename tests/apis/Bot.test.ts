import debug from 'debug'
import axios, { AxiosInstance } from 'axios'
import { getBotInfo, addBotToChat, removeBotFromChat } from '../../src/apis/Bot'
import { getTenantAccessToken } from '../../src/apis/OAuth'
import * as Config from '../config.json'
import { createChat } from '../../src/apis/Chat'

debug.enable('test*')

const D = debug('test:bot')
let tenantAccessToken: string
let wingmanAccessToken: string

beforeAll(async () => {
  const { tenant_access_token } = await getTenantAccessToken({
    appId: Config.bot.appId,
    appSecret: Config.bot.appSecret
  })

  const { tenant_access_token: t } = await getTenantAccessToken({
    appId: Config.wingman.appId,
    appSecret: Config.wingman.appSecret
  })

  tenantAccessToken = tenant_access_token
  wingmanAccessToken = t
})

describe('获取机器人的信息', () => {
  test('will return bot info', async () => {
    const { bot } = await getBotInfo({
      tenantAccessToken
    })

    D('bot info %o', bot)

    expect(bot).toHaveProperty('activate_status')
    expect(bot).toHaveProperty('app_name')
    expect(bot).toHaveProperty('avatar_url')
    expect(bot).toHaveProperty('ip_white_list')
    expect(bot).toHaveProperty('open_id')
  })

  test('will return bot info with instance', async () => {
    const instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      }
    })

    const { bot } = await getBotInfo({
      tenantAccessToken,
      instance
    })

    D('bot info with instance %o', bot)

    expect(bot).toHaveProperty('activate_status')
    expect(bot).toHaveProperty('app_name')
    expect(bot).toHaveProperty('avatar_url')
    expect(bot).toHaveProperty('ip_white_list')
    expect(bot).toHaveProperty('open_id')
  })

  test('should add a bot to a chat and remove a bot from chat', async () => {
    const { data } = await createChat({
      tenantAccessToken,
      name: 'jest unit test for chat',
      openIds: [Config.development.open_id]
    })

    D('chat info %o', data)

    const { code } = await addBotToChat({
      tenantAccessToken: wingmanAccessToken,
      chatId: data.chat_id
    })

    expect(code).toBe(0)

    {
      const { code } = await removeBotFromChat({
        tenantAccessToken: wingmanAccessToken,
        chatId: data.chat_id
      })

      expect(code).toBe(0)
    }
  })
})
