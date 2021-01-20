import debug from 'debug'
import { getBotInfo } from '@/observable/Bot'
import * as Config from '../config.json'
import { getTenantAccessToken } from '@/observable/OAuth'
import { forkJoin, of } from 'rxjs'
import { catchError } from 'rxjs/operators'

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
})
