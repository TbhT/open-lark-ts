import axios, { AxiosInstance } from 'axios'
import Headers from '../utils/headers'
import {
  SendMessageBatchResponse,
  SendMessageResponse,
  CommonResponse,
  ReadMessageResponse,
  UrgentMessageResponse
} from '../types/Response'
import {
  SEND_MESSAGE_BATCH,
  SEND_MESSAGE,
  RECALL_MESSAGE,
  READ_MESSAGE,
  URGENT_MESSAGE
} from '../Constants'

interface MessageParamCommon {
  tenantAccessToken: string
  openId?: string
  userId?: string
  email?: string
  chatId?: string
  rootId?: string
  instance?: AxiosInstance
}

/**
 * 给多个用户或者多个部门发送消息。
 * @param param0
 */
export async function sendMessageBatch({
  departmentIds,
  openIds,
  userIds,
  msgType,
  content,
  instance,
  tenantAccessToken
}: {
  departmentIds?: string[]
  openIds?: string[]
  userIds?: string[]
  msgType: string
  content: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<SendMessageBatchResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<SendMessageBatchResponse>(
    SEND_MESSAGE_BATCH,
    {
      department_ids: departmentIds,
      open_ids: openIds,
      user_ids: userIds,
      msg_type: msgType,
      content: {
        text: content
      }
    }
  )

  return data
}

/**
 * 给指定用户或者会话发送文本消息，其中会话包括私聊会话和群会话。
 * @param param0
 */
export async function sendMessage({
  openId,
  userId,
  email,
  chatId,
  rootId,
  content,
  instance,
  tenantAccessToken
}: MessageParamCommon & {
  content: string
}): Promise<SendMessageResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<SendMessageResponse>(SEND_MESSAGE, {
    open_id: openId,
    user_id: userId,
    email,
    chat_id: chatId,
    root_id: rootId,
    content: {
      text: content
    },
    msg_type: 'text'
  })

  return data
}

/**
 * 用于转发 订阅事件 - 接收富文本消息 中的内容
 */
export async function forwardRichTextMessage({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  content,
  title,
  instance
}: MessageParamCommon & {
  content: string
  title: string
}): Promise<SendMessageResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<SendMessageResponse>(SEND_MESSAGE, {
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
  })

  return data
}

/**
 * 给指定用户或者会话发送图片消息，其中会话包括私聊会话和群会话。
 */
export async function sendImageMessage({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  imageKey,
  instance
}: MessageParamCommon & {
  imageKey: string
}): Promise<SendMessageResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<SendMessageResponse>(SEND_MESSAGE, {
    open_id: openId,
    user_id: userId,
    root_id: rootId,
    chat_id: chatId,
    email,
    msg_type: 'image',
    content: {
      image_key: imageKey
    }
  })

  return data
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

/**
 * 给指定用户或者会话发送富文本消息，其中会话包括私聊会话和群会话。
 */
export async function sendRichTextMessage({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  post,
  instance
}: MessageParamCommon & {
  post: RichTextMessage
}): Promise<SendMessageResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<SendMessageResponse>(SEND_MESSAGE, {
    open_id: openId,
    user_id: userId,
    root_id: rootId,
    chat_id: chatId,
    email,
    msg_type: 'post',
    content: {
      post
    }
  })

  return data
}

/**
 * 给指定用户或者会话发送群名片，其中会话包括私聊会话和群会话。
 */
export async function shareChatCard({
  tenantAccessToken,
  openId,
  userId,
  email,
  chatId,
  rootId,
  instance,
  shareChatId
}: MessageParamCommon & {
  shareChatId: string
}): Promise<SendMessageResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<SendMessageResponse>(SEND_MESSAGE, {
    open_id: openId,
    user_id: userId,
    root_id: rootId,
    chat_id: chatId,
    email,
    msg_type: 'share_chat',
    content: {
      share_chat_id: shareChatId
    }
  })

  return data
}

/**
 * 撤回指定消息。仅能撤回机器人消息
 */
export async function recallMessage({
  messageId,
  tenantAccessToken,
  instance
}: {
  messageId: string
  tenantAccessToken: string
  instance?: AxiosInstance
}): Promise<CommonResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<CommonResponse>(RECALL_MESSAGE, {
    message_id: messageId
  })

  return data
}

/**
 * 查询消息已读信息,仅能查看机器人自己发的消息
 */
export async function readMessage({
  messageId,
  tenantAccessToken,
  instance
}: {
  messageId: string
  tenantAccessToken: string
  instance?: AxiosInstance
}): Promise<ReadMessageResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<ReadMessageResponse>(READ_MESSAGE, {
    message_id: messageId
  })

  return data
}

// 消息加急类型
// *支持：飞书内部、短信、电话
export enum UrgentType {
  APP = 'app',
  SMS = 'sms',
  PHONE = 'phone'
}

/**
 * 对指定消息进行加急。
 */
export async function urgentMessage({
  messageId,
  urgentType,
  openIds,
  tenantAccessToken,
  instance
}: {
  messageId: string
  urgentType: UrgentType
  openIds: string[]
  tenantAccessToken: string
  instance?: AxiosInstance
}): Promise<UrgentMessageResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<UrgentMessageResponse>(URGENT_MESSAGE, {
    message_id: messageId,
    urgent_type: urgentType,
    open_ids: openIds
  })

  return data
}
