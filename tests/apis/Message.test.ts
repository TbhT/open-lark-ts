import debug from 'debug'
import axios, { AxiosInstance } from 'axios'
import { getTenantAccessToken } from '../../src/apis/OAuth'
import * as Config from '../config.json'
import { sendMessage, sendMessageBatch } from '../../src/apis/Message'

debug.enable('test*')

const D = debug('test:message')
let tenantAccessToken: string

beforeAll(async () => {
  const { tenant_access_token } = await getTenantAccessToken({
    appId: Config.bot.appId,
    appSecret: Config.bot.appSecret
  })

  tenantAccessToken = tenant_access_token
})

describe('发送单条消息', () => {
  test('should send a message to user', async () => {
    const { data, code } = await sendMessage({
      tenantAccessToken,
      userId: Config.development.user_id,
      content: 'this is a test message'
    })

    D('send result : %o', data)

    expect(data).toHaveProperty('message_id')
    expect(code).toBe(0)
  })
})

describe.only('批量发送消息', () => {
  test('should send a batch message', async () => {
    const { data, code } = await sendMessageBatch({
      userIds: [Config.development.user_id],
      tenantAccessToken,
      msgType: 'text',
      content: 'this is a batch message'
    })

    D('send batch result: %o', data)

    expect(code).toBe(0)
    expect(data).toHaveProperty('message_id')
    expect(data).toHaveProperty('invalid_department_ids')
    expect(data.invalid_department_ids.length).toBe(0)
    expect(data).toHaveProperty('invalid_open_ids')
    expect(data.invalid_open_ids.length).toBe(0)
    expect(data).toHaveProperty('invalid_user_ids')
    expect(data.invalid_user_ids.length).toBe(0)
  })
})
