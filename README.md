# open-lark for rxjs

> The official lark sdk is [oapi-sdk-nodejs](https://github.com/larksuite/oapi-sdk-nodejs) , and what the advantage this
> repo has ? Maybe it is written by rxjs and support some apis that official sdk dont. Such as the **Bot** part.
> 

## Introduction

`open-lark-rxjs` is a `rxjs` version sdk of open lark, also add some customized apis for Bot, Message part, which may be free 
your hands. The api also support the usage to the people who 
not familiar with `rxjs`.

## Installation

yarn: `yarn add @tbht/lark-sdk-rxjs` 

npm: `npm i @tbht/lark-sdk-rxjs`

## Quick Start

### Bot

```typescript
import { Bot, BotEventType } from '@tbht/lark-sdk-rxjs'

const userId = 'userId'
const appId = `YOUR APPID`
const appSecret = `YOUR APPSECRET`
const imageKey = 'imageKey'

const botInstance = new Bot({
  appId,
  appSecret,
})

botInstance.on(BotEventType.INITIAL_COMPLETE, () => {
    console.log('机器人初始化完成')
})

// send text message
const { data, code, msg } = await botInstance.sayTextMessage({
    userId,
    content: 'this is a bot text message'
})

// send image message
const { code, data } = await botInstance.sayImageMessage({
    userId,
    imageKey
})

// recall message
const { code } = await botInstance.recallMessage({
    messageId: 'message id'
})

//  send a rich text message
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
    userId: 'user id'
})

```

