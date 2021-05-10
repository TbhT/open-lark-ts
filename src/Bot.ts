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

const tokenCache = new Cache(10, 3600 * 1.9)

export enum BotEventType {
  INITIATING = 'initiating',
  INITIAL_COMPLETE = 'initial_complete',
  ERROR = 'error'
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
    this.emitter.emit(BotEventType.INITIATING)
  }

  public on(event: BotEventType, listener: (...args: any[]) => void) {
    this.emitter.on(event, listener)
  }

  public once(event: BotEventType, listener: (...args: any[]) => void) {
    this.emitter.once(event, listener)
  }

  sayTextMessageRx(params: TextMessageParams) {
    return sendMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    })
  }

  sayTextMessage(params: TextMessageParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.sayTextMessageRx(params).subscribe(resolve, reject)
    })
  }

  sayImageMessageRx(params: ImageMessageParams) {
    return sendImageMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    })
  }

  sayImageMessage(params: ImageMessageParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.sayImageMessageRx(params).subscribe(resolve, reject)
    })
  }

  sayRichTextMessageRx(params: RichTextMessageParams) {
    return sendRichTextMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    })
  }

  sayRichTextMessage(params: RichTextMessageParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.sayRichTextMessageRx(params).subscribe(resolve, reject)
    })
  }

  sayChatCardRx(params: CardMessageParams) {
    return sendCardMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    })
  }

  sayChatCard(params: CardMessageParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.sayChatCardRx(params).subscribe(resolve, reject)
    })
  }

  recallMessageRx(params: { messageId: string }) {
    return recallMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    })
  }

  recallMessage(params: { messageId: string }) {
    return new Promise<CommonResponse>((resolve, reject) => {
      this.recallMessageRx(params).subscribe(resolve, reject)
    })
  }

  sayUrgentMessageRx(params: {
    messageId: string
    urgentType: UrgentType
    openIds: string[]
  }) {
    return urgentMessage({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    })
  }

  sayUrgentMessage(params: {
    messageId: string
    urgentType: UrgentType
    openIds: string[]
  }) {
    return new Promise<UrgentMessageResponse>((resolve, reject) => {
      this.sayUrgentMessageRx(params).subscribe(resolve, reject)
    })
  }

  shareCardMessageRx(params: ShareChatCardParams) {
    return shareChatCard({
      ...params,
      tenantAccessToken: this.tokenCache.get('tenantAccessToken') as string
    })
  }

  shareCardMessage(params: ShareChatCardParams) {
    return new Promise<SendMessageResponse>((resolve, reject) => {
      this.shareCardMessageRx(params).subscribe(resolve, reject)
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
        this.emitter.emit(BotEventType.ERROR, error)
      },
      () => {
        this.emitter.emit(BotEventType.INITIAL_COMPLETE)
      }
    )
  }
}
