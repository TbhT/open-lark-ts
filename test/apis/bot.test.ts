import debug from 'debug'
import { getBotInfo, addBotToChat, removeBotFromChat } from '@/observable/Bot'
import * as Config from '../config.json'
import { getTenantAccessToken } from '@/observable/OAuth'
import { forkJoin, of } from 'rxjs'
import { catchError, mergeMap, map } from 'rxjs/operators'
import { createChat } from '@/observable/Chat'

if (process.env.NODE_ENV === 'development') {
  debug.enable('test*')
}

const logger = debug('test:bot')
let tenantAccessToken: string
let wingmanAccessToken: string

async function getAccessToken() {
  return new Promise<any>((resolve, reject) => {
    forkJoin([
      getTenantAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      }),
      getTenantAccessToken({
        appId: Config.wingman.appId,
        appSecret: Config.wingman.appSecret
      })
    ])
      .pipe(catchError(e => of(e)))
      .subscribe(
        data => {
          resolve(data)
        },
        error => reject(error)
      )
  })
}

beforeAll(async () => {
  return getAccessToken().then(value => {
    tenantAccessToken = value[0]
    wingmanAccessToken = value[1]
  })
})

describe('获取机器人的信息', () => {
  test('will return bot info', () => {
    getBotInfo({
      tenantAccessToken
    }).subscribe(({ bot }) => {
      logger('bot info %o', bot)
      expect(bot).toHaveProperty('activate_status')
      expect(bot).toHaveProperty('app_name')
      expect(bot).toHaveProperty('avatar_url')
      expect(bot).toHaveProperty('ip_white_list')
      expect(bot).toHaveProperty('open_id')
    })
  })

  test('should add a bot to a chat and remove a bot from chat', () => {
    createChat({
      tenantAccessToken,
      name: 'jest unit test for chat rxjs',
      openIds: [Config.development.open_id]
    })
      .pipe(
        mergeMap(({ data }) =>
          addBotToChat({
            tenantAccessToken: wingmanAccessToken,
            chatId: data.chat_id
          }).pipe(map(({ code }) => ({ code, data })))
        )
      )
      .pipe(
        mergeMap(({ data, code: code1 }) =>
          removeBotFromChat({
            tenantAccessToken: wingmanAccessToken,
            chatId: data.chat_id
          }).pipe(map(({ code: code }) => ({ data, code1, code2: code })))
        )
      )
      .subscribe(({ data, code1, code2 }) => {
        expect(code1).toBe(0)
        expect(code2).toBe(0)
        logger('chat info %o ', data)
      })
  })
})
