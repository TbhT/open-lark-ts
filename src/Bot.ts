import { Cache } from '@/Cache'
import { getTenantAccessToken } from '@/observable/OAuth'
import { EventEmitter } from 'events'
import { CardMessage } from '@/types/CardMessage'
import {
  recallMessage,
  RichTextMessage,
  sendCardMessage,
  sendImageMessage,
  sendMessage,
  sendRichTextMessage,
  shareChatCard,
  urgentMessage
} from '@/observable/Message'
import { UrgentType } from '@/types/Enum'
import {
  CommonResponse,
  SendMessageResponse,
  UrgentMessageResponse
} from '@/types/Response'
import { catchError, map } from 'rxjs/operators'
import { of } from 'rxjs'

const tokenCache = new Cache(10, 3600 * 1.9)

export enum BotEventType {
  INITIATING = 'initiating',
  INITIAL_COMPLETE = 'initial_complete',
  ERROR = 'error',
  RECEIVE_MESSAGE = 'receive_message',
  RECEIVE_TEXT_MESSAGE = 'receive_text_message',
  RECEIVE_IMAGE_MESSAGE = 'receive_image_message',
  RECEIVE_RICH_TEXT_MESSAGE = 'receive_rich_text_message',
  MESSAGE_ERROR = 'message_error'
}

/**
 * 接受消息方的通用参数
 */
export interface ReceiverParams {
  openId?: string
  userId?: string
  email?: string
  chatId?: string
  rooId?: string
}

/**
 * 文本消息参数
 */
export type TextMessageParams = {
  content: string
} & ReceiverParams

/**
 * 图片消息
 */
export type ImageMessageParams = {
  imageKey: string
} & ReceiverParams

/**
 * 富文本消息
 */
export type RichTextMessageParams = {
  post: RichTextMessage
} & ReceiverParams

/**
 * 分享群名片
 */
export type ShareChatCardParams = {
  shareChatId: string
  userId: string
}

export type CardMessageParams = {
  card: CardMessage
  update_multi?: boolean
} & ReceiverParams

export class Bot {
  private emitter = new EventEmitter()

  private tokenCache = tokenCache

  constructor({ appId, appSecret }: { appId: string; appSecret: string }) {
    this.initToken({ appId, appSecret })
    this.emit(BotEventType.INITIATING)
  }

  public emit(event: BotEventType, ...args: unknown[]) {
    if (event in BotEventType) {
      this.emitter.emit(event, ...args)
    }
  }

  public on(event: BotEventType, listener: (...args: any[]) => void) {
    this.emitter.on(event, listener)
  }

  public once(event: BotEventType, listener: (...args: any[]) => void) {
    this.emitter.once(event, listener)
  }

  $sayTextMessage(params: TextMessageParams) {
    return sendMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    }).pipe(
      map(m => {
        this.emit(BotEventType.RECEIVE_MESSAGE, m)
        this.emit(BotEventType.RECEIVE_TEXT_MESSAGE, m)
        return m
      }),
      catchError(e => {
        this.emit(BotEventType.ERROR, e)
        this.emit(BotEventType.MESSAGE_ERROR, e)
        return of(e)
      })
    )
  }

  sayTextMessage(params: TextMessageParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.$sayTextMessage(params).subscribe(resolve, reject)
    })
  }

  $sayImageMessage(params: ImageMessageParams) {
    return sendImageMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    }).pipe(
      map(m => {
        this.emit(BotEventType.RECEIVE_MESSAGE, m)
        this.emit(BotEventType.RECEIVE_IMAGE_MESSAGE, m)
        return m
      }),
      catchError(e => {
        this.emit(BotEventType.ERROR, e)
        this.emit(BotEventType.MESSAGE_ERROR, e)
        return of(e)
      })
    )
  }

  sayImageMessage(params: ImageMessageParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.$sayImageMessage(params).subscribe(resolve, reject)
    })
  }

  $sayRichTextMessage(params: RichTextMessageParams) {
    return sendRichTextMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    }).pipe(
      map(m => {
        this.emit(BotEventType.RECEIVE_MESSAGE, m)
        this.emit(BotEventType.RECEIVE_RICH_TEXT_MESSAGE, m)
        return of(m)
      }),
      catchError(e => {
        this.emit(BotEventType.ERROR, e)
        this.emit(BotEventType.MESSAGE_ERROR, e)
        return of(e)
      })
    )
  }

  sayRichTextMessage(params: RichTextMessageParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.$sayRichTextMessage(params).subscribe(resolve, reject)
    })
  }

  $sayChatCard(params: CardMessageParams) {
    return sendCardMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    }).pipe(
      map(m => {
        this.emit(BotEventType.RECEIVE_MESSAGE, m)
        return of(m)
      }),
      catchError(e => {
        this.emit(BotEventType.ERROR, e)
        this.emit(BotEventType.MESSAGE_ERROR, e)
        return of(e)
      })
    )
  }

  sayChatCard(params: CardMessageParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.$sayChatCard(params).subscribe(resolve, reject)
    })
  }

  $recallMessage(params: { messageId: string }) {
    return recallMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    }).pipe(
      map(m => {
        this.emit(BotEventType.RECEIVE_MESSAGE, m)
        this.emit(BotEventType.RECEIVE_TEXT_MESSAGE, m)
        return m
      }),
      catchError(e => {
        this.emit(BotEventType.ERROR, e)
        this.emit(BotEventType.MESSAGE_ERROR, e)
        return of(e)
      })
    )
  }

  recallMessage(params: { messageId: string }) {
    return new Promise<CommonResponse>((resolve, reject) => {
      this.$recallMessage(params).subscribe(resolve, reject)
    })
  }

  $sayUrgentMessage(params: {
    messageId: string
    urgentType: UrgentType
    openIds: string[]
  }) {
    return urgentMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    }).pipe(
      map(m => {
        this.emit(BotEventType.RECEIVE_MESSAGE, m)
        return m
      }),
      catchError(e => {
        this.emit(BotEventType.ERROR, e)
        this.emit(BotEventType.MESSAGE_ERROR, e)
        return of(e)
      })
    )
  }

  sayUrgentMessage(params: {
    messageId: string
    urgentType: UrgentType
    openIds: string[]
  }) {
    return new Promise<UrgentMessageResponse>((resolve, reject) => {
      this.$sayUrgentMessage(params).subscribe(resolve, reject)
    })
  }

  $shareCardMessage(params: ShareChatCardParams) {
    return shareChatCard({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    }).pipe(
      map(m => {
        this.emit(BotEventType.RECEIVE_MESSAGE, m)
        return m
      }),
      catchError(e => {
        this.emit(BotEventType.ERROR, e)
        this.emit(BotEventType.MESSAGE_ERROR, e)
        return of(e)
      })
    )
  }

  shareCardMessage(params: ShareChatCardParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.$shareCardMessage(params).subscribe(resolve, reject)
    })
  }

  private initToken({
    appId,
    appSecret
  }: {
    appId: string
    appSecret: string
  }) {
    getTenantAccessToken({
      appSecret,
      appId
    }).subscribe(
      data => {
        this.tokenCache.add('tenantAccessToken', data.tenant_access_token)
      },
      error => {
        this.emit(BotEventType.ERROR, error)
      },
      () => {
        this.emit(BotEventType.INITIAL_COMPLETE)
      }
    )
  }
}
