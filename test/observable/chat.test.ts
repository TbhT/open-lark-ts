import debug from 'debug'
import { getTenantAccessToken } from '@/observable/OAuth'
import {
  createChat,
  getChatInfo,
  updateChatInfo,
  getChatList,
  discardChat,
  addUserToChat,
  removeUserFromChat
} from '@/observable/Chat'
import * as Config from '@test/config.json'
import { forkJoin, of } from 'rxjs'
import { TenantAccessTokenResponse } from '@/types/Response'
import { mergeMap, map } from 'rxjs/operators'
import { getUserId } from '@/observable/User'

debug.enable('test*')

const logger = debug('test:chat')
let tenantAccessToken: string

async function getAccessToken() {
  return new Promise<TenantAccessTokenResponse>((resolve, reject) => {
    getTenantAccessToken({
      appId: Config.bot.appId,
      appSecret: Config.bot.appSecret
    }).subscribe(
      data => {
        resolve(data)
      },
      error => reject(error)
    )
  })
}

beforeAll(async () => {
  const { tenant_access_token } = await getAccessToken()

  tenantAccessToken = tenant_access_token
})

describe('群消息和群管理', () => {
  test('should discard all groups', done => {
    getChatList({
      tenantAccessToken
    })
      .pipe(
        mergeMap(({ data }) => {
          if (data.groups.length) {
            return forkJoin(
              ...data.groups.map(({ chat_id }) =>
                discardChat({
                  chatId: chat_id,
                  tenantAccessToken
                })
              )
            ).pipe(map(v => v))
          } else {
            return of([])
          }
        })
      )
      .subscribe(
        (data: any[]) => {
          data.map(d => expect(d).toHaveProperty('code'))
        },
        error => done.fail(error),
        () => done()
      )
  })

  test('it will union all api in one test', done => {
    const name = 'jest unit test all in one'
    createChat({
      tenantAccessToken,
      name,
      openIds: [Config.development.open_id]
    })
      .pipe(
        mergeMap(({ data }) => {
          expect(data).toHaveProperty('chat_id')
          expect(data).toHaveProperty('invalid_open_ids')
          expect(data).toHaveProperty('invalid_user_ids')

          return getChatInfo({
            chatId: data.chat_id,
            tenantAccessToken
          })
        }),
        mergeMap(({ data: chatData }) => {
          logger('chat info: %o ', chatData)
          expect(chatData).toHaveProperty('avatar')
          expect(chatData).toHaveProperty('chat_id')
          expect(chatData).toHaveProperty('description')
          expect(chatData).toHaveProperty('members')
          expect(chatData).toHaveProperty('name', name)
          expect(chatData).toHaveProperty('type')
          expect(chatData).not.toHaveProperty('owner_open_id')
          expect(chatData).not.toHaveProperty('owner_user_id')
          return updateChatInfo({
            chatId: chatData.chat_id,
            tenantAccessToken,
            i18nNames: {
              zh_cn: 'jest测试群',
              en_us: 'jestGroup',
              ja_jp: 'jestJapan'
            }
          })
        }),
        mergeMap(response => {
          logger('chat list info %o ', response)
          expect(response.data).toHaveProperty('chat_id')
          expect(response.code).toBe(0)
          return getChatInfo({
            chatId: response.data.chat_id,
            tenantAccessToken
          })
        }),
        mergeMap(({ data }) => {
          expect(data).toHaveProperty('i18n_names')
          expect(data).toHaveProperty('i18n_names.zh_cn', 'jest测试群')
          expect(data).toHaveProperty('i18n_names.en_us', 'jestGroup')
          expect(data).toHaveProperty('i18n_names.ja_jp', 'jestJapan')
          return getChatList({
            tenantAccessToken
          }).pipe(map(d => ({ data: d, chatId: data.chat_id })))
        }),
        mergeMap(({ data: { data }, chatId }) => {
          logger('chat list info: %o ', data)
          expect(data).toHaveProperty('has_more')
          expect(data).toHaveProperty('page_token')
          expect(data).toHaveProperty('groups')
          expect(data.groups.length).toBeGreaterThanOrEqual(1)
          return discardChat({
            chatId,
            tenantAccessToken
          })
        }),
        mergeMap(({ code }) => {
          logger('discard chat %o ', code)
          expect(code).toBe(0)

          return getChatList({
            tenantAccessToken
          })
        })
      )
      .subscribe(
        ({ data }) => {
          logger('get chat list: %o ', data)
          expect(data.groups.length).toBeGreaterThanOrEqual(0)
        },
        error => done.fail(error),
        done
      )
  })

  test('will add user to chat ', done => {
    getUserId({
      email: Config.development.email,
      tenantAccessToken
    })
      .pipe(
        mergeMap(({ data }) => {
          logger('user id %o ', data)

          return createChat({
            tenantAccessToken,
            name: 'jest unit test for rxjs',
            openIds: [Config.development.open_id]
          })
        }),
        mergeMap(({ data: addData }) => {
          logger('add user to chat %o ', addData)
          expect(addData).toHaveProperty('invalid_open_ids')
          expect(addData).toHaveProperty('invalid_user_ids')
          expect(addData.invalid_open_ids.length).toBe(0)
          expect(addData.invalid_user_ids.length).toBe(0)

          return discardChat({
            tenantAccessToken,
            chatId: addData.chat_id
          })
        })
      )
      .subscribe(
        d => {
          expect(d.code).toBe(0)
        },
        error => done.fail(error),
        () => done()
      )
  })

  test('will remove user to chat ', done => {
    getUserId({
      email: Config.development.email,
      tenantAccessToken
    })
      .pipe(
        mergeMap(({ data }) => {
          logger('user id %o ', data)

          return createChat({
            tenantAccessToken,
            name: 'jest unit test',
            openIds: [Config.development.open_id]
          }).pipe(map(d => ({ data: d, userId: data.user_id })))
        }),
        mergeMap(({ data: { data }, userId }) => {
          return addUserToChat({
            tenantAccessToken,
            userIds: [userId],
            chatId: data.chat_id
          }).pipe(map(d => ({ data: d, userId, chatId: data.chat_id })))
        }),
        mergeMap(({ data, userId, chatId }) => {
          expect(data.code).toBe(0)
          return removeUserFromChat({
            tenantAccessToken,
            userIds: [userId],
            chatId
          })
        })
      )
      .subscribe(
        ({ data: removeData }) => {
          logger('remove data %o ', removeData)
          expect(removeData).toHaveProperty('invalid_open_ids')
          expect(removeData).toHaveProperty('invalid_user_ids')
        },
        error => done.fail(error),
        () => done()
      )
  })
})
