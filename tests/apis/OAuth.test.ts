import axios from 'axios'
import {
  getAppAccessToken,
  getTenantAccessToken,
  getAppTicket,
  getAuth,
  getUserAccessToken,
  refreshUserAccessToken
} from '../../src/apis/OAuth'
import * as Config from '../config.json'
import debug from 'debug'

debug.enable('test*')

const D = debug('test:oauth')

describe('OAuth', () => {
  describe('获取 app_access_token', () => {
    it('should return correct data', async () => {
      const data = await getAppAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      })

      expect(data).toHaveProperty('code')
      expect(data).toHaveProperty('msg')
      expect(data).toHaveProperty('app_access_token')
      expect(data).toHaveProperty('expire')
      D('correct app access token %o', data)
    })

    it('should return correct data with customized axios instance', async () => {
      const instance = axios.create({
        headers: {
          'content-type': 'application/json'
        }
      })

      const data = await getAppAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret,
        instance
      })

      expect(data).toHaveProperty('code')
      expect(data).toHaveProperty('msg')
      expect(data).toHaveProperty('app_access_token')
      expect(data).toHaveProperty('expire')
      D('correct app access token with instance %o', data)
    })
  })

  describe('获取 tenant_access_token', () => {
    it('should return correct data', async () => {
      const data = await getTenantAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      })

      expect(data).toHaveProperty('code')
      expect(data).toHaveProperty('msg')
      expect(data).toHaveProperty('tenant_access_token')
      expect(data).toHaveProperty('expire')
      D('correct tenant_access_token %o', data)
    })

    it('should return correct data with customized axios instance', async () => {
      const instance = axios.create({
        headers: {
          'content-type': 'application/json'
        }
      })

      const data = await getTenantAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret,
        instance
      })

      expect(data).toHaveProperty('code')
      expect(data).toHaveProperty('msg')
      expect(data).toHaveProperty('tenant_access_token')
      expect(data).toHaveProperty('expire')
      D('correct tenant_access_token with instance %o', data)
    })
  })

  describe('获取 app ticket', () => {
    it('should return correct data', async () => {
      const data = await getAppTicket({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      })

      expect(data).toHaveProperty('code')
      expect(data).toHaveProperty('msg')
    })

    it('should return correct data with instance', async () => {
      const instance = axios.create({
        headers: {
          'content-type': 'application/json'
        }
      })

      const data = await getAppTicket({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret,
        instance
      })

      expect(data).toHaveProperty('code')
      expect(data).toHaveProperty('msg')
    })
  })

  describe.skip('请求身份验证', () => {
    it('should return correct data', async () => {
      const data = await getAuth({
        appId: Config.bot.appId,
        redirectURI: 'https://github.com/TbhT'
      })

      D('auth --- %o', data)
    })
  })

  describe.skip('获取登录用户身份 ', () => {
    it('should return correct data', async () => {
      const { app_access_token } = await getAppAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      })

      const data = await getUserAccessToken({
        appAccessToken: app_access_token,
        code: 'sZjiCTpTbi2kQzIkIKCjrg'
      })

      expect(data).toHaveProperty('code')
      expect(data).toHaveProperty('msg')
      expect(data).toHaveProperty('data')

      D('---- user access token %o', data)
    })
  })

  describe.skip('刷新 access_token', () => {
    it('should return correct data', async () => {
      const { app_access_token } = await getAppAccessToken({
        appId: Config.bot.appId,
        appSecret: Config.bot.appSecret
      })

      const {
        data: { refresh_token }
      } = await getUserAccessToken({
        appAccessToken: app_access_token,
        code: 'sZjiCTpTbi2kQzIkIKCjrg'
      })

      const data = await refreshUserAccessToken({
        appAccessToken: app_access_token,
        refreshToken: refresh_token
      })

      expect(data).toHaveProperty('code')
      expect(data).toHaveProperty('msg')
      expect(data).toHaveProperty('data')
    })
  })
})
