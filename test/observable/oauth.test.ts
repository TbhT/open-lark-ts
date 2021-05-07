import debug from 'debug'
import * as Config from '../config.json'
import {
  getAppAccessToken,
  getAppTicket,
  getAuth,
  getTenantAccessToken,
  getUserAccessToken,
  refreshUserAccessToken
} from '@/observable/OAuth'
import { map, mergeMap } from 'rxjs/operators'

debug.enable('test*')

const logger = debug('test:oauth')

describe('OAuth', () => {
  describe('获取 app_access_token', () => {
    it('should return correct data', done => {
      getAppAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      }).subscribe(
        data => {
          expect(data).toHaveProperty('code')
          expect(data).toHaveProperty('msg')
          expect(data).toHaveProperty('app_access_token')
          expect(data).toHaveProperty('expire')

          logger('correct app access token %o ', data)
        },
        done,
        done
      )
    })
  })

  describe('获取 tenant_access_token', () => {
    it('should return correct data', done => {
      getTenantAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      }).subscribe(
        data => {
          expect(data).toHaveProperty('code')
          expect(data).toHaveProperty('msg')
          expect(data).toHaveProperty('tenant_access_token')
          expect(data).toHaveProperty('expire')
          logger('correct tenant_access_token %o', data)
        },
        done,
        done
      )
    })
  })

  describe('获取 app ticket', () => {
    it('should return correct data', done => {
      getAppTicket({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      }).subscribe(
        data => {
          expect(data).toHaveProperty('code')
          expect(data).toHaveProperty('msg')
        },
        done,
        done
      )
    })
  })

  describe('请求身份验证', () => {
    it('should return correct data', done => {
      getAuth({
        appId: Config.bot.appId,
        redirectURI: 'https://github.com/TbhT'
      }).subscribe(
        data => {
          logger('data %O ', data)
        },
        done,
        done
      )
    })
  })

  describe('获取登录用户身份 ', () => {
    it('should return correct data', done => {
      getAppAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      })
        .pipe(
          mergeMap(data => {
            expect(data).toHaveProperty('code')
            expect(data).toHaveProperty('msg')
            expect(data).toHaveProperty('app_access_token')
            return getUserAccessToken({
              appAccessToken: data.app_access_token,
              code: 'sZjiCTpTbi2kQzIkIKCjrg'
            })
          })
        )
        .subscribe(
          data => {
            expect(data).toHaveProperty('code')
            expect(data).toHaveProperty('msg')
            logger('---- user access token %o', data)
          },
          done,
          done
        )
    })
  })

  describe.skip('刷新 access_token', () => {
    it('should return correct data', done => {
      getAppAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      })
        .pipe(
          mergeMap(({ app_access_token }) => {
            return getUserAccessToken({
              appAccessToken: app_access_token,
              code: 'sZjiCTpTbi2kQzIkIKCjrg'
            }).pipe(
              map(({ data: { refresh_token } }) => ({
                app_access_token,
                refresh_token
              }))
            )
          }),
          mergeMap(({ app_access_token, refresh_token }) => {
            return refreshUserAccessToken({
              appAccessToken: app_access_token,
              refreshToken: refresh_token
            })
          })
        )
        .subscribe(
          data => {
            expect(data).toHaveProperty('code')
            expect(data).toHaveProperty('msg')
            expect(data).toHaveProperty('data')
          },
          done,
          done
        )
    })
  })
})
