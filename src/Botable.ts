import Eventable from './Eventable'
import Sayable, {
  TextMessageParams,
  ImageMessageParams,
  RichTextMessageParams,
  ShareChatCardParams
} from './Sayable'
import axios, { AxiosInstance } from 'axios'
import Headers from './utils/headers'
import { UrgentType } from './types/Enum'
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

export abstract class Botable extends Eventable implements Sayable {
  public readonly tenantAccessToken: string

  public readonly instance: AxiosInstance

  constructor({ tenantAccessToken }: { tenantAccessToken: string }) {
    super()
    this.tenantAccessToken = tenantAccessToken
    this.instance = axios.create(Headers(tenantAccessToken))
  }

  async sayTextMessage(
    params: TextMessageParams
  ): Promise<SendMessageResponse> {
    return await sendMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken,
      instance: this.instance
    })
  }

  async sayImageMessage(
    params: ImageMessageParams
  ): Promise<SendMessageResponse> {
    return await sendImageMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken,
      instance: this.instance
    })
  }

  async sayRichTextMessage(
    params: RichTextMessageParams
  ): Promise<SendMessageResponse> {
    return await sendRichTextMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken,
      instance: this.instance
    })
  }

  async sayChatCard(params: ShareChatCardParams): Promise<SendMessageResponse> {
    return await shareChatCard({
      ...params,
      tenantAccessToken: this.tenantAccessToken,
      instance: this.instance
    })
  }

  async recallMessage(params: { messageId: string }): Promise<CommonResponse> {
    return await recallMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken,
      instance: this.instance
    })
  }

  async readMessage(params: {
    messageId: string
  }): Promise<ReadMessageResponse> {
    return await readMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken,
      instance: this.instance
    })
  }

  async urgentMessage(params: {
    messageId: string
    urgentType: UrgentType
    openIds: string[]
  }): Promise<UrgentMessageResponse> {
    return await urgentMessage({
      ...params,
      tenantAccessToken: this.tenantAccessToken,
      instance: this.instance
    })
  }
}
