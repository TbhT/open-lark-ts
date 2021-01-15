import { RxHR } from '@akanass/rx-http-request'
import { Observable } from 'rxjs'
import { ADD_BOT_TO_CHAT, GET_BOT_INFO } from '../Constants'
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
        subscriber.complete()
      },
      error => {
        subscriber.error(error)
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
      json: true
    }).subscribe(
      data => {
        subscriber.next(data.body)
        subscriber.complete()
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
