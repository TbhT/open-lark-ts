import { Observable } from 'rxjs'
import {
  getBotInfo as $getBotInfo,
  addBotToChat as $addBotToChat,
  removeBotFromChat as $removeBotFromChat
} from '@/observable/Bot'

export function getBotInfo() {
  return (ob: Observable<string>) => {
    return new Observable(subscriber =>
      ob.subscribe(data =>
        $getBotInfo({
          tenantAccessToken: data
        }).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
  }
}

export function addBotToChat() {
  return (ob: Observable<{ chatId: string; tenantAccessToken: string }>) =>
    new Observable(subscriber =>
      ob.subscribe(data =>
        $addBotToChat(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}

export function removeBotFromChat() {
  return (
    ob: Observable<{
      chatId: string
      tenantAccessToken: string
    }>
  ) =>
    new Observable(subscriber =>
      ob.subscribe(data =>
        $removeBotFromChat(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}
