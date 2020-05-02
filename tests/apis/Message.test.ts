import debug from 'debug'
import { getTenantAccessToken } from '../../src/apis/OAuth'
import * as Config from '../config.json'
import {
  sendMessage,
  sendMessageBatch,
  sendImageMessage,
  recallMessage,
  readMessage,
  sendRichTextMessage,
  shareChatCard,
  urgentMessage,
  sendCardMessage
} from '../../src/apis/Message'
import { UrgentType } from '../../src/types/Enum'

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

describe('批量发送消息', () => {
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

describe('发送图片消息｜撤回消息｜查询消息已读状态', () => {
  test('should send a image message', async () => {
    const { data, code } = await sendImageMessage({
      userId: Config.development.user_id,
      tenantAccessToken,
      imageKey: Config.development.image_key
    })

    D('发送图片消息 %o', data)
    expect(data).toHaveProperty('message_id')
    expect(code).toBe(0)

    await new Promise(r => {
      setTimeout(() => {
        r()
      }, 1000)
    })

    {
      // read message status
      const { code, data: readData } = await readMessage({
        messageId: data.message_id,
        tenantAccessToken
      })

      D('read message %o', readData)
      expect(code).toBe(0)
      expect(readData).toHaveProperty('read_users')
      expect(readData.read_users.length).toBeLessThanOrEqual(1)
    }

    {
      // recall message
      const { code } = await recallMessage({
        tenantAccessToken,
        messageId: data.message_id
      })

      D('recall message %o', code)
      expect(code).toBe(0)
    }
  })
})

describe('转发监听的富文本消息', () => {
  test.todo('todo')
})

describe('发送富文本消息', () => {
  test('should send rich text message', async () => {
    const message = {
      zh_cn: {
        title: '我是一个标题',
        content: [
          [
            {
              tag: 'text' as 'text',
              un_escape: true,
              text: '第一行&nbsp;:'
            },
            {
              tag: 'a' as 'a',
              text: '超链接',
              href: 'http://www.feishu.cn'
            },
            {
              tag: 'at' as 'at',
              user_id: Config.development.user_id
            }
          ],
          [
            {
              tag: 'text' as 'text',
              text: '第二行 :'
            },
            {
              tag: 'text' as 'text',
              text: '文本测试'
            }
          ],
          [
            {
              tag: 'img' as 'img',
              image_key: Config.development.image_key,
              width: 300,
              height: 300
            }
          ]
        ]
      }
    }

    const { code, data } = await sendRichTextMessage({
      tenantAccessToken,
      post: message,
      userId: Config.development.user_id
    })

    D('send rich text message %o', data)
    expect(code).toBe(0)
    expect(data).toHaveProperty('message_id')
  })
})

describe('发送群名片', () => {
  test('should send a chat card', async () => {
    const { data, code } = await shareChatCard({
      tenantAccessToken,
      shareChatId: Config.development.chat_id,
      userId: Config.development.user_id
    })

    D('chat card %o', data)
    expect(code).toBe(0)
    expect(data).toHaveProperty('message_id')
  })
})

describe('加急消息', () => {
  test('should send a urgent message', async () => {
    const { data, code } = await sendImageMessage({
      userId: Config.development.user_id,
      tenantAccessToken,
      imageKey: Config.development.image_key
    })

    {
      const { code, invalid_open_ids } = await urgentMessage({
        tenantAccessToken,
        messageId: data.message_id,
        urgentType: UrgentType.SMS,
        openIds: [Config.development.open_id]
      })

      D('urgent message %o', invalid_open_ids)
      expect(code).toBe(0)
    }
  })
})

const CardContent = {
  config: {
    wide_screen_mode: true
  },
  header: {
    title: {
      tag: 'plain_text' as 'plain_text',
      content: 'This is header'
    },
    template: 'red' as 'red'
  },
  elements: [
    {
      tag: 'div',
      text: {
        tag: 'plain_text' as 'plain_text',
        content: 'This is a very very very very very very very long text;'
      }
    },
    {
      tag: 'action',
      actions: [
        {
          tag: 'button',
          text: {
            tag: 'plain_text' as 'plain_text',
            content: 'Read'
          },
          type: 'default'
        }
      ]
    }
  ]
}

describe.only('发送消息卡片', () => {
  test('should send a card message', async () => {
    const {} = await sendCardMessage({
      tenantAccessToken,
      userId: Config.development.user_id,
      card: CardContent as any
    })
  })
})
