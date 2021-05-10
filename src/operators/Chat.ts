import { Observable } from 'rxjs'
import {
  createChatParams,
  createChat as $createChat,
  getChatList as $getChatList,
  getChatInfo as $getChatInfo,
  UpdateChatInfo,
  updateChatInfo as $updateChatInfo,
  ModifyUserInChat,
  addUserToChat as $addUserToChat,
  removeUserFromChat as $removeUserFromChat,
  discardChat as $discardChat
} from '@/observable/Chat'
import { ChatListResponse, CreateChatResponse } from '@/types/Response'

export function createChat() {
  return (ob: Observable<createChatParams>) =>
    new Observable<CreateChatResponse>(subscriber =>
      ob.subscribe(data =>
        $createChat(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}

export function getChatList() {
  return (
    ob: Observable<{
      pageSize?: number
      pageToken?: string
      tenantAccessToken: string
    }>
  ) =>
    new Observable<ChatListResponse>(subscriber =>
      ob.subscribe(data =>
        $getChatList(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}

export function getChatInfo() {
  return (
    ob: Observable<{
      chatId: string
      tenantAccessToken: string
    }>
  ) =>
    new Observable(subscriber =>
      ob.subscribe(data =>
        $getChatInfo(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}

export function updateChatInfo() {
  return (ob: Observable<UpdateChatInfo>) =>
    new Observable(subscriber =>
      ob.subscribe(data =>
        $updateChatInfo(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}

export function addUserToChat() {
  return (ob: Observable<ModifyUserInChat>) =>
    new Observable(subscriber =>
      ob.subscribe(data =>
        $addUserToChat(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}

export function removeUserFromChat() {
  return (ob: Observable<ModifyUserInChat>) =>
    new Observable(subscriber =>
      ob.subscribe(data =>
        $removeUserFromChat(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}

export function discardChat() {
  return (
    ob: Observable<{
      chatId: string
      tenantAccessToken: string
    }>
  ) =>
    new Observable(subscriber =>
      ob.subscribe(data =>
        $discardChat(data).subscribe(
          botInfo => subscriber.next(botInfo),
          error => subscriber.error(error),
          () => subscriber.complete()
        )
      )
    )
}
