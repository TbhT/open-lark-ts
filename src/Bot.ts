import https from 'https'
import axios, { AxiosResponse, Method } from 'axios'
import FormData from 'form-data'

export default class Bot {
  private app_id: string
  private app_secret: string
  private encrypt_key: string
  private verification_token: string
  private oauth_redirect_uri: string
  private is_isv: boolean
  private tenant_key: string
  private is_staging: boolean
  private ignore_ssl: boolean

  constructor({
    app_id,
    app_secret,
    encrypt_key,
    verification_token,
    oauth_redirect_uri,
    is_isv = false,
    tenant_key,
    is_staging = false,
    ignore_ssl = false
  }: {
    app_id: string
    app_secret: string
    encrypt_key: string
    verification_token: string
    oauth_redirect_uri: string
    is_isv: boolean
    tenant_key: string
    is_staging: boolean
    ignore_ssl: boolean
  }) {
    this.app_id = app_id
    this.app_secret = app_secret
    this.encrypt_key = encrypt_key
    this.verification_token = verification_token
    this.oauth_redirect_uri = oauth_redirect_uri
    this.is_isv = is_isv
    this.tenant_key = tenant_key
    this.is_staging = is_staging
    this.ignore_ssl = ignore_ssl
  }

  private async baseRequest({
    method,
    url,
    body,
    files,
    with_app_token = false,
    with_tenant_token = false,
    auth_token,
    raw_content = false,
    success_code
  }: {
    method: Method
    url: string
    body?: string
    with_app_token: boolean
    with_tenant_token: boolean
    auth_token: string
    raw_content: boolean
    success_code: number
  }): Promise<void> {
    //   TODO
    const headers: { [key: string]: string } = {}

    if (with_tenant_token) {
      headers['Authorization'] = `Bearer ${this.tenant_access_token}`
    } else if (with_app_token) {
      headers['Authorization'] = `Bearer ${this.app_access_token}`
    } else if (auth_token) {
      headers['Authorization'] = `Bearer ${auth_token}`
    }

    const verify = this.ignore_ssl
    let res: AxiosResponse
    const httpsAgent = new https.Agent({
      rejectUnauthorized: verify
    })

    if (files && body) {
      // todo: 需要重新写写上传文件和body逻辑
      res = await axios({
        method,
        data: body,
        url,
        httpsAgent,
        headers
      })
    } else if (files) {
      // todo: 需要单独写上传文件逻辑
      res = await axios({
        method,
        url,
        httpsAgent,
        headers
      })
    } else if (body) {
      headers['Content-Type'] = 'application/json'
      res = await axios({
        method,
        url,
        httpsAgent,
        headers,
        data: body
      })
    } else {
      res = await axios({
        method,
        url,
        httpsAgent,
        headers
      })
    }
  }

  private get tenant_access_token(): any {
    //   todo
  }

  private get app_access_token(): any {
    //   todo
  }
}
