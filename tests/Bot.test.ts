import { Bot } from '../src/Bot'
import * as Config from './config.json'
import { UrgentType } from '../src/types/Enum'

let botInstance: Bot
let initFlag: boolean

beforeAll(async () => {
  botInstance = new Bot({
    appId: Config.bot.appId,
    appSecret: Config.bot.appSecret
  })

  initFlag = await botInstance.init()
})

describe('机器人发消息', () => {
  it('should be init', async () => {
    expect(initFlag).toBe(true)
    expect(botInstance.tenantAccessToken).not.toBeUndefined()
    expect(botInstance.instance).not.toBeUndefined()
  })

  it('should send a text message', async () => {
    const { data, code, msg } = await botInstance.sayTextMessage({
      userId: Config.development.user_id,
      content: 'this is a bot text message'
    })

    expect(data).toHaveProperty('message_id')
    expect(code).toBe(0)
  })

  it('should send | recall | read a image message', async () => {
    const { code, data } = await botInstance.sayImageMessage({
      userId: Config.development.user_id,
      imageKey: Config.development.image_key
    })

    expect(data).toHaveProperty('message_id')
    expect(code).toBe(0)

    await new Promise(r => {
      setTimeout(() => {
        r()
      }, 1000)
    })

    {
      // read message status
      const { data: readData } = await botInstance.readMessage({
        messageId: data.message_id
      })

      expect(code).toBe(0)
      expect(readData).toHaveProperty('read_users')
      expect(readData.read_users.length).toBeLessThanOrEqual(1)
    }

    {
      // recall message
      const { code } = await botInstance.recallMessage({
        messageId: data.message_id
      })

      expect(code).toBe(0)
    }
  })

  it('should send rich text message', async () => {
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

    const { code, data } = await botInstance.sayRichTextMessage({
      post: message,
      userId: Config.development.user_id
    })

    expect(code).toBe(0)
    expect(data).toHaveProperty('message_id')
  })

  it('should send a chat card', async () => {
    const { code, data } = await botInstance.sayChatCard({
      shareChatId: Config.development.chat_id,
      userId: Config.development.user_id
    })

    expect(code).toBe(0)
    expect(data).toHaveProperty('message_id')
  })

  it('should send a urgent message', async () => {
    const { code, data } = await botInstance.sayImageMessage({
      userId: Config.development.user_id,
      imageKey: Config.development.image_key
    })

    {
      const { code, invalid_open_ids } = await botInstance.sayUrgentMessage({
        urgentType: UrgentType.SMS,
        messageId: data.message_id,
        openIds: [Config.development.open_id]
      })

      expect(code).toBe(0)
    }
  })
})

describe.only('机器人收到监听事件', () => {
  // todo:
})
