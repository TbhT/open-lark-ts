import { RxHR } from '@akanass/rx-http-request'
import { Observable } from 'rxjs'
import {
  ADD_BOT_TO_CHAT,
  GET_BOT_INFO,
  REMOVE_BOT_FROM_CHAT
} from '../Constants'
import { BotInfoResponse, CommonResponse } from '../../src/types/Response'

const { get, post } = RxHR

export function getBotInfo({
  tenantAccessToken
}: {
  tenantAccessToken: string
}) {
  return new Observable<BotInfoResponse>(subscriber => {
    get<BotInfoResponse>(GET_BOT_INFO, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      }
    }).subscribe(
      data => {
        subscriber.next(data.body)
      },
      error => {
        subscriber.error(error)
      },
      () => {
        subscriber.complete()
      }
    )
  })
}

export function addBotToChat({
  chatId,
  tenantAccessToken
}: {
  chatId: string
  tenantAccessToken: string
}) {
  return new Observable(subscriber => {
    post<CommonResponse>(ADD_BOT_TO_CHAT, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        chat_id: chatId
      }
    }).subscribe(
      data => {
        subscriber.next(data.body)
      },
      error => {
        subscriber.error(error)
      },
      () => {
        subscriber.complete()
      }
    )
  })
}

export function removeBotFromChat({
  chatId,
  tenantAccessToken
}: {
  chatId: string
  tenantAccessToken: string
}) {
  return new Observable(subscriber => {
    post<CommonResponse>(REMOVE_BOT_FROM_CHAT, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        chat_id: chatId
      }
    }).subscribe(
      data => {
        subscriber.next(data.body)
      },
      error => {
        subscriber.error(error)
      },
      () => {
        subscriber.complete()
      }
    )
  })
}
