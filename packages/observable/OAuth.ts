import { Observable } from 'rxjs'
import { RxHR } from '@akanass/rx-http-request'
import {
  AppAccessTokenResponse,
  AuthResponse,
  CommonResponse,
  TenantAccessTokenResponse,
  UserAccessTokenResponse,
  UserInfoResponse
} from 'src/types/Response'
import {
  GET_APP_ACCESS_TOKEN,
  GET_APP_TICKET,
  GET_AUTH,
  GET_TENANT_ACCESS_TOKEN,
  GET_USER_ACCESS_TOKEN,
  GET_USER_INFO
} from '@/Constants'
import { REFRESH_USER_ACCESS_TOKEN } from 'src/Constants'

const { get, post } = RxHR

export function getAppAccessToken({
  appId,
  appSecret
}: {
  appId: string
  appSecret: string
}) {
  return new Observable(subscriber =>
    post<AppAccessTokenResponse>(GET_APP_ACCESS_TOKEN, {
      json: true,
      body: {
        app_id: appId,
        app_secret: appSecret
      }
    }).subscribe(
      data => {
        subscriber.next(data)
      },
      error => {
        subscriber.error(error)
      },
      () => {
        subscriber.complete()
      }
    )
  )
}

export function getTenantAccessToken({
  appId,
  appSecret
}: {
  appId: string
  appSecret: string
}) {
  return new Observable(subscriber =>
    post<TenantAccessTokenResponse>(GET_TENANT_ACCESS_TOKEN, {
      json: true,
      body: {
        app_id: appId,
        app_secret: appSecret
      }
    }).subscribe(
      data => {
        subscriber.next(data.body)
      },
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getAppTicket({
  appId,
  appSecret
}: {
  appId: string
  appSecret: string
}) {
  return new Observable(subscriber =>
    post<CommonResponse>(GET_APP_TICKET, {
      json: true,
      body: {
        app_id: appId,
        app_secret: appSecret
      }
    }).subscribe(
      data => {
        subscriber.next(data.body)
      },
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getAuth({
  appId,
  redirectURI,
  state
}: {
  appId: string
  redirectURI: string
  state?: string
}) {
  return new Observable(subscriber =>
    get<AuthResponse>(GET_AUTH, {
      json: true,
      body: {
        app_id: appId,
        redirect_uri: redirectURI,
        state
      }
    }).subscribe(
      data => subscriber.next(data),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getUserAccessToken({
  appAccessToken,
  code
}: {
  appAccessToken: string
  code: string
}) {
  return new Observable(subscriber =>
    post<UserAccessTokenResponse>(GET_USER_ACCESS_TOKEN, {
      json: true,
      body: {
        app_access_token: appAccessToken,
        code,
        grant_type: 'authorization_code'
      }
    }).subscribe(
      data => subscriber.next(data),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function refreshUserAccessToken({
  appAccessToken,
  refreshToken
}: {
  appAccessToken: string
  refreshToken: string
}) {
  return new Observable(subscriber =>
    post<UserAccessTokenResponse>(REFRESH_USER_ACCESS_TOKEN, {
      json: true,
      body: {
        app_access_token: appAccessToken,
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      }
    }).subscribe(
      data => subscriber.next(data),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getUserInfo({ userAccessToken }: { userAccessToken: string }) {
  return new Observable(subscriber =>
    get<UserInfoResponse>(GET_USER_INFO, {
      json: true,
      body: {
        user_access_token: userAccessToken
      }
    }).subscribe(
      data => subscriber.next(data),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}
