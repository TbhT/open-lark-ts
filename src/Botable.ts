import { EventEmitter } from 'events'
import { AxiosInstance } from 'axios'
import Sayable, {
  TextMessageParams,
  ImageMessageParams,
  RichTextMessageParams,
  ShareChatCardParams
} from './Sayable'
import { UrgentType, EventType } from './types/Enum'
import {
  sendMessage,
  sendImageMessage,
  sendRichTextMessage,
  shareChatCard,
  recallMessage,
  readMessage,
  urgentMessage
} from './apis/Message'
import {
  SendMessageResponse,
  CommonResponse,
  ReadMessageResponse,
  UrgentMessageResponse
} from './types/Response'
import {
  EventAppOpen,
  EventMessage,
  EventRemoveAddBot,
  EventP2PCreateChat,
  EventUserInAndOutChat
} from './types/CallbackEvent'

export function beforeUsed(value: string): Function {
  return function (target: any): void {
    if (!target[value]) {
      throw Error(`class instance should init property ${value}`)
    }
  }
}

export type EventTypeSupported =
  | EventType.APP_OPEN
  | EventType.MESSAGE
  | EventType.REMOVE_BOT
  | EventType.ADD_BOT
  | EventType.P2P_CHAT_CREATE
  | EventType.ADD_USER_TO_CHAT
  | EventType.REMOVE_USER_FROM_CHAT
  | EventType.REVOKE_ADD_USER_FROM_CHAT

export default abstract class Botable extends EventEmitter implements Sayable {
  tenantAccessToken: string | undefined

  instance: AxiosInstance | undefined

  protected readonly appId: string

  protected readonly appSecret: string

  constructor({ appId, appSecret }: { appId: string; appSecret: string }) {
    super()
    this.appId = appId
    this.appSecret = appSecret
  }

  abstract async init(): Promise<unknown>

  @beforeUsed('tenantAccessToken')
  @beforeUsed('instance')
  async sayTextMessage(
    params: TextMessageParams
  ): Promise<SendMessageResponse> {
    return await sendMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  @beforeUsed('tenantAccessToken')
  @beforeUsed('instance')
  async sayImageMessage(
    params: ImageMessageParams
  ): Promise<SendMessageResponse> {
    return await sendImageMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  @beforeUsed('tenantAccessToken')
  @beforeUsed('instance')
  async sayRichTextMessage(
    params: RichTextMessageParams
  ): Promise<SendMessageResponse> {
    return await sendRichTextMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  @beforeUsed('tenantAccessToken')
  @beforeUsed('instance')
  async sayChatCard(params: ShareChatCardParams): Promise<SendMessageResponse> {
    return await shareChatCard({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  @beforeUsed('tenantAccessToken')
  @beforeUsed('instance')
  async recallMessage(params: { messageId: string }): Promise<CommonResponse> {
    return await recallMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  @beforeUsed('tenantAccessToken')
  @beforeUsed('instance')
  async readMessage(params: {
    messageId: string
  }): Promise<ReadMessageResponse> {
    return await readMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  @beforeUsed('tenantAccessToken')
  @beforeUsed('instance')
  async urgentMessage(params: {
    messageId: string
    urgentType: UrgentType
    openIds: string[]
  }): Promise<UrgentMessageResponse> {
    return await urgentMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  /**
   * 回调事件
   * @param event
   * @param fn
   */
  on(event: EventType.APP_OPEN, fn: (data: EventAppOpen) => void): this
  on(event: EventType.MESSAGE, fn: (data: EventMessage) => void): this
  on(
    event: EventType.REMOVE_BOT | EventType.ADD_BOT,
    fn: (data: EventRemoveAddBot) => void
  ): this
  on(
    event: EventType.P2P_CHAT_CREATE,
    fn: (data: EventP2PCreateChat) => void
  ): this
  on(
    event:
      | EventType.ADD_USER_TO_CHAT
      | EventType.REMOVE_USER_FROM_CHAT
      | EventType.REVOKE_ADD_USER_FROM_CHAT,
    fn: (data: EventUserInAndOutChat) => void
  ): this
  on(event: EventTypeSupported, fn: (data: any) => void): this {
    switch (event) {
      case EventType.APP_OPEN:
        this.addListener(
          event as EventType.APP_OPEN,
          fn as (data: EventAppOpen) => void
        )
        break
      case EventType.MESSAGE:
        this.addListener(
          event as EventType.MESSAGE,
          fn as (data: EventMessage) => void
        )
        break
      case EventType.REMOVE_BOT:
      case EventType.ADD_BOT:
        this.addListener(
          event as EventType.REMOVE_BOT | EventType.ADD_BOT,
          fn as (data: EventRemoveAddBot) => void
        )
        break
      case EventType.P2P_CHAT_CREATE:
        this.addListener(
          event as EventType.P2P_CHAT_CREATE,
          fn as (data: EventP2PCreateChat) => void
        )
        break
      case EventType.ADD_USER_TO_CHAT:
      case EventType.REMOVE_USER_FROM_CHAT:
      case EventType.REVOKE_ADD_USER_FROM_CHAT:
        this.addListener(
          event as
            | EventType.ADD_USER_TO_CHAT
            | EventType.REMOVE_USER_FROM_CHAT
            | EventType.REVOKE_ADD_USER_FROM_CHAT,
          fn as (data: EventUserInAndOutChat) => void
        )
        break

      default:
        throw Error(`event : ${event} is not supported now`)
    }

    return this
  }
}
