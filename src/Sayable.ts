import {
  SendMessageResponse,
  CommonResponse,
  ReadMessageResponse,
  UrgentMessageResponse
} from './types/Response'
import { AxiosInstance } from 'axios'
import { RichTextMessage } from './apis/Message'
import { UrgentType } from './types/Enum'
import { CardMessage } from './types/CardMessage'

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

export interface Sayable {
  tenantAccessToken: string | undefined
  instance: AxiosInstance | undefined
  sayTextMessage(params: TextMessageParams): Promise<SendMessageResponse>
  sayImageMessage(params: ImageMessageParams): Promise<SendMessageResponse>
  sayRichTextMessage(
    params: RichTextMessageParams
  ): Promise<SendMessageResponse>
  sayChatCard(params: ShareChatCardParams): Promise<SendMessageResponse>
  recallMessage(params: { messageId: string }): Promise<CommonResponse>
  readMessage(params: { messageId: string }): Promise<ReadMessageResponse>
  sayUrgentMessage(params: {
    messageId: string
    urgentType: UrgentType
    openIds: string[]
  }): Promise<UrgentMessageResponse>
  sayCardMessage(params: CardMessageParams): Promise<SendMessageResponse>
}
