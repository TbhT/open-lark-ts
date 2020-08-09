import debug from 'debug'
import { getTenantAccessToken } from '../../src/apis/OAuth'
import {
  createChat,
  getChatInfo,
  updateChatInfo,
  getChatList,
  discardChat,
  addUserToChat,
  removeUserFromChat
} from '../../src/apis/Chat'
import * as Config from '../config.json'
import { getUserId } from '../../src/apis/User'

debug.enable('test*')

const D = debug('test:chat')
let tenantAccessToken: string

beforeAll(async () => {
  const { tenant_access_token } = await getTenantAccessToken({
    appId: Config.bot.appId,
    appSecret: Config.bot.appSecret
  })

  tenantAccessToken = tenant_access_token
})

describe('群信息和群管理', () => {
  test.skip('should discard all groups ', async () => {
    const { data } = await getChatList({
      tenantAccessToken
    })

    D('will discard all groups %O', data)

    if (data.groups.length) {
      for (const { chat_id } of data.groups) {
        const { code } = await discardChat({
          chatId: chat_id,
          tenantAccessToken
        })

        expect(code).toBe(0)
      }
    }
  })

  test('it will union all api in one test', async () => {
    // create a chat
    let chatId: string

    {
      const { data } = await createChat({
        tenantAccessToken,
        name: 'jest unit test',
        openIds: [Config.development.open_id]
      })

      expect(data).toHaveProperty('chat_id')
      expect(data).toHaveProperty('invalid_open_ids')
      expect(data).toHaveProperty('invalid_user_ids')
      chatId = data.chat_id
    }

    // get a chat info
    {
      const { data } = await getChatInfo({
        chatId: chatId,
        tenantAccessToken
      })

      D('chat info : %o ', data)
      expect(data).toHaveProperty('avatar')
      expect(data).toHaveProperty('chat_id')
      expect(data).toHaveProperty('description')
      expect(data).toHaveProperty('members')
      expect(data).toHaveProperty('name', 'jest unit test')
      expect(data).toHaveProperty('type')
      expect(data).not.toHaveProperty('owner_open_id')
      expect(data).not.toHaveProperty('owner_user_id')
    }

    // update a chat info
    {
      const { data } = await updateChatInfo({
        chatId: chatId,
        tenantAccessToken,
        i18nNames: {
          zh_cn: 'jest测试群',
          en_us: 'jestGroup',
          ja_jp: 'jestJapan'
        }
      })

      expect(data).toHaveProperty('chat_id', chatId)

      {
        const { data } = await getChatInfo({
          chatId: chatId,
          tenantAccessToken
        })

        D('update chat info %o', data)
        expect(data).toHaveProperty('i18n_names')
        expect(data).toHaveProperty('i18n_names.zh_cn', 'jest测试群')
        expect(data).toHaveProperty('i18n_names.en_us', 'jestGroup')
        expect(data).toHaveProperty('i18n_names.ja_jp', 'jestJapan')
      }
    }

    // get chat list
    {
      const { data } = await getChatList({
        tenantAccessToken
      })

      D('chat list info %o', data)
      expect(data).toHaveProperty('has_more')
      expect(data).toHaveProperty('page_token')
      expect(data).toHaveProperty('groups')
      expect(data.groups.length).toBeGreaterThanOrEqual(1)
    }

    // discard chat
    {
      const { code } = await discardChat({
        chatId,
        tenantAccessToken
      })

      D('discard chat %o: ', code)
      expect(code).toBe(0)

      const { data } = await getChatList({
        tenantAccessToken
      })

      expect(data.groups.length).toBeGreaterThanOrEqual(0)
    }
  })

  test('will add user to chat', async () => {
    const { data } = await getUserId({
      email: 'wangbinghua@bytedance.com',
      tenantAccessToken
    })

    const userId = data.user_id

    D('user id %o', data)

    {
      const { data } = await createChat({
        tenantAccessToken,
        name: 'jest unit test',
        openIds: [Config.development.open_id]
      })

      const { data: addData } = await addUserToChat({
        tenantAccessToken,
        userIds: [userId],
        chatId: data.chat_id
      })

      D('add user to chat %o', addData)
      expect(addData).toHaveProperty('invalid_open_ids')
      expect(addData).toHaveProperty('invalid_user_ids')
      expect(addData.invalid_open_ids.length).toBe(0)
      expect(addData.invalid_user_ids.length).toBe(0)

      await discardChat({
        tenantAccessToken,
        chatId: data.chat_id
      })
    }
  })

  test('will remove user to chat', async () => {
    const { data } = await getUserId({
      email: 'wangbinghua@bytedance.com',
      tenantAccessToken
    })

    const userId = data.user_id

    D('user id %o', data)

    {
      const { data } = await createChat({
        tenantAccessToken,
        name: 'jest unit test',
        openIds: [Config.development.open_id]
      })

      await addUserToChat({
        tenantAccessToken,
        userIds: [userId],
        chatId: data.chat_id
      })

      const { data: removeData } = await removeUserFromChat({
        tenantAccessToken,
        userIds: [userId],
        chatId: data.chat_id
      })

      D('remove data %o', removeData)

      expect(removeData).toHaveProperty('invalid_open_ids')
      expect(removeData).toHaveProperty('invalid_user_ids')
    }
  })
})
