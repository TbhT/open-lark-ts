import axios, { AxiosInstance } from 'axios'
import Botable from './Botable'
import Cache from './Cache'
import { getTenantAccessToken } from './apis/OAuth'
import Headers from './utils/headers'

const tokenCache = new Cache(10, 3600 * 1.9)

export default class Bot extends Botable {
  tenantAccessToken: string | undefined

  instance: AxiosInstance | undefined

  private initFlag = false

  constructor({ appId, appSecret }: { appId: string; appSecret: string }) {
    super({ appId, appSecret })
  }

  async init(): Promise<boolean> {
    try {
      const { tenant_access_token } = await getTenantAccessToken({
        appSecret: this.appSecret,
        appId: this.appId
      })

      this.instance = axios.create(Headers(tenant_access_token))

      this.tenantAccessToken = tenant_access_token

      Bot.cacheToken('tenantAK', this.tenantAccessToken)

      this.initFlag = true
    } catch (error) {
      // todo:
      console.log('init error', error)
    } finally {
      return this.initFlag
    }
  }

  static cacheToken(key: string, value: string, ttl?: number): void {
    return tokenCache.add(key, value, ttl)
  }
}
