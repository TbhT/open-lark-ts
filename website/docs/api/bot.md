---
sidebar_position: 1
---

# Bot

This part is for bot, and you need not be family with `rxjs`

## init

You can easily instance a Bot and register a listener, and the event type the bot supports is [bot event type](#boteventtype)

```typescript
import { Bot, BotEventType } from '@tbht/open-lark-rxjs'

const appId = 'your config appId'
const appSecret = 'your config appSecret'

const botInstance = new Bot({
    appId,
    appSecret
})

botInstance.on(BotEventType.INITIAL_COMPLETE, () => {
    console.log('机器人初始化完成')
})

```


## BotEventType

All BotEventType as follows:

```typescript
enum BotEventType {
  INITIATING = 'initiating',
  INITIAL_COMPLETE = 'initial_complete',
  ERROR = 'error',
  RECEIVE_MESSAGE = 'receive_message',
  RECEIVE_TEXT_MESSAGE = 'receive_text_message',
  RECEIVE_IMAGE_MESSAGE = 'receive_image_message',
  RECEIVE_RICH_TEXT_MESSAGE = 'receive_rich_text_message',
  MESSAGE_ERROR = 'message_error'
}
```

### INITIATING

When create instance by ``new`` operator, bot will send a request to get token for later use.
This event will be emitted when `new` operator execute.

### INITIAL_COMPLETE

When bot get `tenant_access_token`, the initial is completed. `INITIAL_COMPLETE` will be emitted
after get the token successfully, otherwise the ``BotEventType.ERROR`` event will be triggered.

### ERROR

This event type will be triggered when there has any error occur. 

### RECEIVE_MESSAGE

This event type will be emitted if there is any message was successfully received.

### RECEIVE_TEXT_MESSAGE

### RECEIVE_IMAGE_MESSAGE

### RECEIVE_RICH_TEXT_MESSAGE

### MESSAGE_ERROR




## sayTextMessage

```typescript

const { data, code, msg } = await botInstance.sayTextMessage({
    userId: 'the user your want to send',
    content: 'this is a bot text message'
})

```

## sayImageMessage

```typescript

const { code, data } = await botInstance.sayImageMessage({
    userId: 'the user your want to send',
    imageKey: 'image key'
})

```

## recallMessage

```typescript
const { code } = await botInstance.recallMessage({
    messageId: 'the message id'
})
```

## sayRichTextMessage

```typescript

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
    userId: 'the user your want to send',
})

```

## sayUrgentMessage

```typescript

const { code, data } = await botInstance.sayImageMessage({
    userId: 'the userId',
    imageKey: 'image key'
})

{
    const { code, invalid_open_ids } = await botInstance.sayUrgentMessage({
        urgentType: UrgentType.SMS,
        messageId: 'message id',
        openIds: ['the user\'s open id']
    })
}

```
