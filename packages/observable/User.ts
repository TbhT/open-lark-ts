import { Observable } from 'rxjs'
import { RxHR } from '@akanass/rx-http-request'
import {
  BasicUserInfoResponse,
  UserChatIdResponse,
  UserIdResponse
} from 'src/types/Response'
import {
  GET_USER_BASE_INFO,
  GET_USER_CHAT_ID,
  GET_USER_ID
} from 'packages/Constants'

const { get, post } = RxHR

export function getUserChatId({
  tenantAccessToken,
  userId,
  openId
}: {
  tenantAccessToken: string
  userId?: string
  openId?: string
}) {
  return new Observable<UserChatIdResponse>(subscriber =>
    get<UserChatIdResponse>(GET_USER_CHAT_ID, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      qs: {
        open_id: openId,
        user_id: userId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getUserId({
  tenantAccessToken,
  email
}: {
  tenantAccessToken: string
  email: string
}) {
  return new Observable<UserIdResponse>(subscriber =>
    post<UserIdResponse>(GET_USER_ID, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        email
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getBasicUserInfo({
  tenantAccessToken,
  openId,
  userId
}: {
  tenantAccessToken: string
  openId?: string
  userId?: string
}) {
  return new Observable<BasicUserInfoResponse>(subscriber =>
    get<BasicUserInfoResponse>(GET_USER_BASE_INFO, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      qs: {
        open_id: openId,
        user_id: userId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}
