import { Observable } from 'rxjs'
import { RxHR } from '@akanass/rx-http-request'
import {
  ChatInfoResponse,
  ChatListResponse,
  CommonResponse,
  CreateChatResponse,
  ModifyUserToChatResponse,
  UpdateChatResponse
} from 'src/types/Response'
import {
  ADD_USER_TO_CHAT,
  CHAT_INFO,
  CHAT_LIST,
  CREATE_CHAT,
  DISCARD_CHAT,
  REMOVE_USER_FROM_CHAT,
  UPDATE_CHAT
} from '@/Constants'

const { get, post } = RxHR

type createChatParams = {
  name?: string
  description?: string
  i18nNames?: { [key: string]: string }
  onlyOwnerAdd?: boolean
  shareAllowed?: boolean
  onlyOwnerAtAll?: boolean
  onlyOwnerEdit?: boolean
  tenantAccessToken: string
  userIds?: string[]
  openIds?: string[]
}

export function createChat(params: createChatParams) {
  return new Observable<CreateChatResponse>(subscriber =>
    post<CreateChatResponse>(CREATE_CHAT, {
      headers: {
        Authorization: `Bearer ${params.tenantAccessToken}`
      },
      json: true,
      body: {
        name: params.name || '',
        description: params.description || '',
        i18n_names: params.i18nNames,
        only_owner_add:
          params.onlyOwnerAdd === undefined ? false : params.onlyOwnerAdd,
        share_allowed:
          params.shareAllowed === undefined ? true : params.shareAllowed,
        only_owner_at_all:
          params.onlyOwnerAtAll === undefined ? false : params.onlyOwnerAtAll,
        only_owner_edit:
          params.onlyOwnerEdit === undefined ? false : params.onlyOwnerEdit,
        user_ids: params.userIds,
        open_ids: params.openIds
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getChatList({
  pageSize,
  pageToken,
  tenantAccessToken
}: {
  pageSize?: number
  pageToken?: string
  tenantAccessToken: string
}) {
  return new Observable<ChatListResponse>(subscriber =>
    get<ChatListResponse>(CHAT_LIST, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      qs: {
        page_size: pageSize,
        page_token: pageToken
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getChatInfo({
  chatId,
  tenantAccessToken
}: {
  chatId: string
  tenantAccessToken: string
}) {
  return new Observable<ChatInfoResponse>(subscriber =>
    get<ChatInfoResponse>(CHAT_INFO, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      qs: {
        chat_id: chatId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function updateChatInfo(params: {
  chatId: string
  ownerOpenId?: string
  ownerUserId?: string
  name?: string
  i18nNames?: { [key: string]: string }
  onlyOwnerAdd?: boolean
  shareAllowed?: boolean
  onlyOwnerAtAll?: boolean
  onlyOwnerEdit?: boolean
  tenantAccessToken: string
}) {
  const {
    tenantAccessToken,
    chatId,
    ownerOpenId,
    ownerUserId,
    name,
    i18nNames,
    onlyOwnerAdd = false,
    shareAllowed = true,
    onlyOwnerAtAll = false,
    onlyOwnerEdit = false
  } = params

  return new Observable<UpdateChatResponse>(subscriber =>
    post<UpdateChatResponse>(UPDATE_CHAT, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        chat_id: chatId,
        owner_open_id: ownerOpenId,
        owner_user_id: ownerUserId,
        name,
        i18n_names: i18nNames,
        only_owner_add: onlyOwnerAdd,
        only_owner_at_all: onlyOwnerAtAll,
        share_allowed: shareAllowed,
        only_owner_edit: onlyOwnerEdit
      }
    }).subscribe(data => subscriber.next(data.body))
  )
}

type ModifyUserInChat = {
  chatId: string
  tenantAccessToken: string
  userIds?: string[]
  openIds?: string[]
}

export function addUserToChat({
  chatId,
  tenantAccessToken,
  openIds,
  userIds
}: ModifyUserInChat) {
  return new Observable<ModifyUserToChatResponse>(subscriber =>
    post<ModifyUserToChatResponse>(ADD_USER_TO_CHAT, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        chat_id: chatId,
        user_ids: userIds,
        open_ids: openIds
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function removeUserFromChat({
  chatId,
  tenantAccessToken,
  openIds,
  userIds
}: ModifyUserInChat) {
  return new Observable<ModifyUserToChatResponse>(subscriber =>
    post<ModifyUserToChatResponse>(REMOVE_USER_FROM_CHAT, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        chat_id: chatId,
        user_ids: userIds,
        open_ids: openIds
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function discardChat({
  chatId,
  tenantAccessToken
}: {
  chatId: string
  tenantAccessToken: string
}) {
  return new Observable<CommonResponse>(subscriber =>
    post<CommonResponse>(DISCARD_CHAT, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        chat_id: chatId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}
