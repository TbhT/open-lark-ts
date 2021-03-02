import { Observable } from 'rxjs'
import { RxHR } from '@akanass/rx-http-request'
import {
  CommonResponse,
  SendMessageBatchResponse,
  SendMessageResponse,
  UrgentMessageResponse
} from '@/types/Response'
import {
  RECALL_MESSAGE,
  REFRESH_CARD_MESSAGE,
  SEND_MESSAGE,
  SEND_MESSAGE_BATCH,
  URGENT_MESSAGE
} from '@/Constants'
import { UrgentType } from '@/types/Enum'
import { CardContentElements, CardMessage } from '@/types/CardMessage'

export interface MessageParamCommon {
  tenantAccessToken: string
  openId?: string
  userId?: string
  email?: string
  chatId?: string
  rootId?: string
}

export function sendMessageBatch({
  departmentIds,
  openIds,
  userIds,
  msgType,
  content,
  tenantAccessToken
}: {
  departmentIds?: string[]
  openIds?: string[]
  userIds?: string[]
  msgType: string
  content: string
  tenantAccessToken: string
}) {
  return new Observable<SendMessageBatchResponse>(subscriber =>
    RxHR.post<SendMessageBatchResponse>(SEND_MESSAGE_BATCH, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        department_ids: departmentIds,
        open_ids: openIds,
        user_ids: userIds,
        msg_type: msgType,
        content: {
          text: content
        }
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function sendMessage({
  openId,
  userId,
  email,
  chatId,
  rootId,
  content,
  tenantAccessToken
}: MessageParamCommon & {
  content: string
}) {
  return new Observable<SendMessageResponse>(subscriber =>
    RxHR.post<SendMessageResponse>(SEND_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_id: openId,
        user_id: userId,
        email,
        chat_id: chatId,
        root_id: rootId,
        content: {
          text: content
        },
        msg_type: 'text'
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function forwardRichTextMessage({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  content,
  title
}: MessageParamCommon & {
  content: string
  title: string
}) {
  return new Observable<SendMessageResponse>(subscriber =>
    RxHR.post<SendMessageResponse>(SEND_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_id: openId,
        user_id: userId,
        root_id: rootId,
        chat_id: chatId,
        email,
        msg_type: 'forward',
        content: {
          title,
          text: content
        }
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function sendImageMessage({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  imageKey
}: MessageParamCommon & {
  imageKey: string
}) {
  return new Observable<SendMessageResponse>(subscriber =>
    RxHR.post<SendMessageResponse>(SEND_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_id: openId,
        user_id: userId,
        root_id: rootId,
        chat_id: chatId,
        email,
        msg_type: 'image',
        content: {
          image_key: imageKey
        }
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

interface TextTag {
  tag: 'text'
  text: string
  un_escape?: boolean
  lines?: number
}

interface ATag {
  tag: 'a'
  text: string
  un_escape?: boolean
  href: string
}

interface AtTag {
  tag: 'at'
  user_id: string
}

interface ImgTag {
  tag: 'img'
  image_key: string
  height: number
  width: number
}

interface RichTextMessageInner {
  title: string
  content: (ATag | AtTag | TextTag | ImgTag)[][]
}

export interface RichTextMessage {
  zh_cn?: RichTextMessageInner
  ja_jp?: RichTextMessageInner
  en_us?: RichTextMessageInner
}

export function sendRichTextMessage({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  post
}: MessageParamCommon & {
  post: RichTextMessage
}) {
  return new Observable<SendMessageResponse>(subscriber =>
    RxHR.post<SendMessageResponse>(SEND_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_id: openId,
        user_id: userId,
        root_id: rootId,
        chat_id: chatId,
        email,
        msg_type: 'post',
        content: {
          post
        }
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function shareChatCard({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  shareChatId
}: MessageParamCommon & {
  shareChatId: string
}) {
  return new Observable<SendMessageResponse>(subscriber =>
    RxHR.post<SendMessageResponse>(SEND_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_id: openId,
        user_id: userId,
        root_id: rootId,
        chat_id: chatId,
        email,
        msg_type: 'share_chat',
        content: {
          share_chat_id: shareChatId
        }
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function recallMessage({
  messageId,
  tenantAccessToken
}: {
  messageId: string
  tenantAccessToken: string
}) {
  return new Observable<CommonResponse>(subscriber =>
    RxHR.post<CommonResponse>(RECALL_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        message_id: messageId
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function urgentMessage({
  messageId,
  urgentType,
  openIds,
  tenantAccessToken
}: {
  messageId: string
  urgentType: UrgentType
  openIds: string[]
  tenantAccessToken: string
}) {
  return new Observable<UrgentMessageResponse>(subscriber =>
    RxHR.post<UrgentMessageResponse>(URGENT_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        message_id: messageId,
        urgent_type: urgentType,
        open_ids: openIds
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function sendCardMessage({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  updateMulti = false,
  card
}: {
  tenantAccessToken: string
  openId?: string
  userId?: string
  email?: string
  chatId?: string
  rootId?: string
  updateMulti?: boolean
  card: CardMessage
}) {
  return new Observable<SendMessageResponse>(subscriber =>
    RxHR.post<SendMessageResponse>(SEND_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        open_id: openId,
        user_id: userId,
        email,
        chat_id: chatId,
        msg_type: 'interactive',
        root_id: rootId,
        update_multi: updateMulti,
        card
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function refreshCardMessage({
  tenantAccessToken,
  openIds,
  token,
  cardContent
}: {
  tenantAccessToken: string
  openIds: string[]
  token: string
  cardContent: CardContentElements
}) {
  return new Observable<any>(subscriber =>
    RxHR.post<any>(REFRESH_CARD_MESSAGE, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      body: {
        token,
        card: {
          ...cardContent,
          open_ids: openIds
        }
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}
