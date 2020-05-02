import { EventEmitter } from 'events'
import { AxiosInstance } from 'axios'
import {
  EventAppOpen,
  EventMessage,
  EventRemoveAddBot,
  EventP2PCreateChat,
  EventUserInAndOutChat
} from './types/CallbackEvent'
import Sayable, {
  TextMessageParams,
  ImageMessageParams,
  RichTextMessageParams,
  ShareChatCardParams,
  CardMessageParams
} from './Sayable'
import { UrgentType, EventType } from './types/Enum'
import {
  sendMessage,
  sendImageMessage,
  sendRichTextMessage,
  shareChatCard,
  recallMessage,
  readMessage,
  urgentMessage,
  sendCardMessage
} from './apis/Message'
import {
  SendMessageResponse,
  CommonResponse,
  ReadMessageResponse,
  UrgentMessageResponse
} from './types/Response'

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

  protected initFlag = false

  constructor({ appId, appSecret }: { appId: string; appSecret: string }) {
    super()
    this.appId = appId
    this.appSecret = appSecret
  }

  abstract async init(): Promise<unknown>

  protected checkParamsBefore(): void {
    if (!this.initFlag) {
      throw new Error('Bot init failed, please re-init')
    }
  }

  async sayTextMessage(
    params: TextMessageParams
  ): Promise<SendMessageResponse> {
    this.checkParamsBefore()

    return await sendMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  async sayImageMessage(
    params: ImageMessageParams
  ): Promise<SendMessageResponse> {
    this.checkParamsBefore()

    return await sendImageMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  async sayRichTextMessage(
    params: RichTextMessageParams
  ): Promise<SendMessageResponse> {
    this.checkParamsBefore()

    return await sendRichTextMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  async sayChatCard(params: ShareChatCardParams): Promise<SendMessageResponse> {
    this.checkParamsBefore()

    return await shareChatCard({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  async recallMessage(params: { messageId: string }): Promise<CommonResponse> {
    this.checkParamsBefore()

    return await recallMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  async readMessage(params: {
    messageId: string
  }): Promise<ReadMessageResponse> {
    this.checkParamsBefore()

    return await readMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  async sayUrgentMessage(params: {
    messageId: string
    urgentType: UrgentType
    openIds: string[]
  }): Promise<UrgentMessageResponse> {
    this.checkParamsBefore()

    return await urgentMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken as string,
      instance: this.instance
    })
  }

  async sayCardMessage(
    params: CardMessageParams
  ): Promise<SendMessageResponse> {
    this.checkParamsBefore()

    return await sendCardMessage({
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
