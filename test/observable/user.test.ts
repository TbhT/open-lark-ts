import * as Config from '../config.json'
import debug from 'debug'
import { getAccessToken } from './image.test'
import { getBasicUserInfo, getUserChatId, getUserId } from '@/observable/User'

debug.enable('test*')

const logger = debug('test:user')
let tenantAccessToken: string

beforeAll(async () => {
  return getAccessToken().then(value => {
    tenantAccessToken = value.tenant_access_token
  })
})

describe('获取用户信息', () => {
  test('should return wangbinghua@bytedance.com user_id and open_id', done => {
    getUserId({
      email: 'wangbinghua@bytedance.com',
      tenantAccessToken
    }).subscribe(
      ({ data }) => {
        expect(data).toHaveProperty('open_id')
        expect(data).toHaveProperty('user_id')
      },
      done,
      done
    )
  })

  test('should return chat_id with user_id', done => {
    getUserChatId({
      userId: Config.development.user_id,
      tenantAccessToken
    }).subscribe(
      ({ data }) => {
        logger('chat_id %o', data)
        expect(data).toHaveProperty('chat_id')
      },
      done,
      done
    )
  })

  test('should return chat_id with user_id with axios instance', done => {
    getUserChatId({
      userId: Config.development.user_id,
      tenantAccessToken
    }).subscribe(
      ({ data }) => {
        logger('chat_id %o', data)
        expect(data).toHaveProperty('chat_id')
      },
      done,
      done
    )
  })

  test('should return chat_id with open_id', done => {
    getUserChatId({
      openId: Config.development.open_id,
      tenantAccessToken
    }).subscribe(
      ({ data }) => {
        logger('chat_id %o', data)
        expect(data).toHaveProperty('chat_id')
      },
      done,
      done
    )
  })

  test('should return basic user info with user_id', done => {
    getBasicUserInfo({
      openId: Config.development.open_id,
      tenantAccessToken
    }).subscribe(
      ({ data }) => {
        logger('basic user info by user_id %o', data)
        expect(data).toHaveProperty('avatar')
        expect(data).toHaveProperty('name')
        expect(data).toHaveProperty('open_id')
        expect(data).toHaveProperty('user_id')
      },
      done,
      done
    )
  })

  test('should return basic user info with open_id', async () => {
    getBasicUserInfo({
      userId: Config.development.user_id,
      tenantAccessToken
    }).subscribe(({ data }) => {
      logger('basic user info by user_id %o', data)
      expect(data).toHaveProperty('avatar')
      expect(data).toHaveProperty('name')
      expect(data).toHaveProperty('open_id')
      expect(data).toHaveProperty('user_id')
    })
  })
})
