import axios, { AxiosInstance } from 'axios'
import {
  GET_APP_ACCESS_TOKEN,
  GET_TENANT_ACCESS_TOKEN,
  GET_APP_TICKET,
  GET_AUTH,
  GET_USER_ACCESS_TOKEN,
  REFRESH_USER_ACCESS_TOKEN,
  GET_USER_INFO
} from '../Constants'
import {
  AppAccessTokenResponse,
  TenantAccessTokenResponse,
  CommonResponse,
  AuthResponse,
  UserAccessTokenResponse,
  UserInfoResponse
} from '../types/Response'

// * app_access_token ：访问App资源相关接口。
// * tenant_access_token ：访问企业资源相关接口。
// * user_access_token ：访问用户资源相关接口。

export async function getAppAccessToken({
  appId,
  appSecret,
  instance
}: {
  instance?: AxiosInstance
  appId: string
  appSecret: string
}): Promise<AppAccessTokenResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.post<AppAccessTokenResponse>(
    GET_APP_ACCESS_TOKEN,
    {
      app_id: appId,
      app_secret: appSecret
    }
  )

  return data
}

export async function getTenantAccessToken({
  appId,
  appSecret,
  instance
}: {
  appId: string
  appSecret: string
  instance?: AxiosInstance
}): Promise<TenantAccessTokenResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.post<TenantAccessTokenResponse>(
    GET_TENANT_ACCESS_TOKEN,
    {
      app_id: appId,
      app_secret: appSecret
    }
  )

  return data
}

export async function getAppTicket({
  appId,
  appSecret,
  instance
}: {
  appId: string
  appSecret: string
  instance?: AxiosInstance
}): Promise<CommonResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.post<CommonResponse>(GET_APP_TICKET, {
    app_id: appId,
    app_secret: appSecret
  })

  return data
}

// * 请求身份验证
export async function getAuth({
  appId,
  redirectURI,
  state,
  instance
}: {
  appId: string
  redirectURI: string
  state?: string
  instance?: AxiosInstance
}): Promise<AuthResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create()
  }

  const { data } = await $instance.get<AuthResponse>(GET_AUTH, {
    params: {
      app_id: appId,
      redirect_uri: redirectURI,
      state
    }
  })

  return data
}

// * 获取登录用户身份
export async function getUserAccessToken({
  appAccessToken,
  code,
  instance
}: {
  appAccessToken: string
  code: string
  instance?: AxiosInstance
}): Promise<UserAccessTokenResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.post<UserAccessTokenResponse>(
    GET_USER_ACCESS_TOKEN,
    {
      app_access_token: appAccessToken,
      code,
      grant_type: 'authorization_code'
    }
  )

  return data
}

// 刷新 access_token
export async function refreshUserAccessToken({
  appAccessToken,
  refreshToken,
  instance
}: {
  appAccessToken: string
  refreshToken: string
  instance?: AxiosInstance
}): Promise<UserAccessTokenResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.post<UserAccessTokenResponse>(
    REFRESH_USER_ACCESS_TOKEN,
    {
      app_access_token: appAccessToken,
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    }
  )

  return data
}

// 需要设置 Authorization 请求头
export async function getUserInfo({
  userAccessToken,
  instance
}: {
  userAccessToken: string
  instance: AxiosInstance
}): Promise<UserInfoResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${userAccessToken}`
      }
    })
  }

  const { data } = await $instance.get<UserInfoResponse>(GET_USER_INFO, {
    params: {
      user_access_token: userAccessToken
    }
  })

  return data
}
