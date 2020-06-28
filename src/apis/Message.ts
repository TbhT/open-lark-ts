/**
 * Message模块的api有以下功能：
 * - 给多个用户或者多个部门发送消息
 * - 给指定用户或者会话发送文本消息，其中会话包括私聊会话和群会话
 * - 用于转发 订阅事件 - 接收富文本消息 中的内容
 * - 给指定用户或者会话发送图片消息，其中会话包括私聊会话和群会话
 * - 给指定用户或者会话发送群名片，其中会话包括私聊会话和群会话
 * - 撤回指定消息。仅能撤回机器人消息
 * - 查询消息已读信息,仅能查看机器人自己发的消息
 * - 对指定消息进行加急
 * - 发送消息卡片
 * - 刷新卡片
 */

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
  URGENT_MESSAGE,
  REFRESH_CARD_MESSAGE
} from '../Constants'
import { UrgentType } from '../types/Enum'
import { CardMessage, CardContentElements } from '../types/CardMessage'

export interface MessageParamCommon {
  tenantAccessToken: string
  openId?: string
  userId?: string
  email?: string
  chatId?: string
  rootId?: string
  instance?: AxiosInstance
}

/**
 * 给多个用户或者多个部门发送消息
 * > **权限说明 ：**
 * - 需要启用机器人能力；
 * - 机器人需要拥有批量发送消息权限；
 * - 机器人需要拥有对用户或部门的可见性
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, sendMessageBatch  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { data, code } = await sendMessageBatch({
      userIds: [Config.development.user_id],
      tenantAccessToken,
      msgType: 'text',
      content: 'this is a batch message'
    })
 *  ```
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
 * 给指定用户或者会话发送文本消息，其中会话包括私聊会话和群会话
 *
 * **权限说明 ：**
 * - 需要启用机器人能力；
 * - 私聊会话时机器人需要拥有对用户的可见性，群会话需要机器人在群里
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, sendMessage  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { data, code } = await sendMessage({
 *    tenantAccessToken,
 *    userId: Config.development.user_id,
 *    content: 'this is a test message'
 *  })
 * ```
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
 * 给指定用户或者会话发送图片消息，其中会话包括私聊会话和群会话
 *
 * **权限说明 ：**
 * - 需要启用机器人能力；
 * - 私聊会话时机器人需要拥有对用户的可见性，群会话需要机器人在群里
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, sendImageMessage  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { data, code } = await sendImageMessage({
 *    userId: Config.development.user_id,
 *    tenantAccessToken,
 *    imageKey: Config.development.image_key
 *  })
 *
 * ```
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
 * 给指定用户或者会话发送富文本消息，其中会话包括私聊会话和群会话
 *
 * **权限说明 ：**
 * - 需要启用机器人能力
 * - 私聊会话时机器人需要拥有对用户的可见性，群会话需要机器人在群里
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, sendRichTextMessage  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { code, data } = await sendRichTextMessage({
 *    tenantAccessToken,
 *    post: message,
 *    userId: Config.development.user_id
 *  })
 * ```
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
 * 给指定用户或者会话发送群名片，其中会话包括私聊会话和群会话
 *
 * **权限说明 ：**
 * - 需要启用机器人能力；
 * - 私聊会话时机器人需要拥有对用户的可见性，群会话需要机器人在群里；
 * - 群名片对应的群组需要被设置为允许分享
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, shareChatCard  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { data, code } = await shareChatCard({
 *    tenantAccessToken,
 *    shareChatId: Config.development.chat_id,
 *    userId: Config.development.user_id
 *  })
 *
 * ```
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

/**
 * 发送消息卡片
 */
export async function sendCardMessage({
  tenantAccessToken,
  instance,
  openId,
  userId,
  email,
  chatId,
  rootId,
  updateMulti = false,
  card
}: {
  tenantAccessToken: string
  instance?: AxiosInstance
  openId?: string
  userId?: string
  email?: string
  chatId?: string
  rootId?: string
  updateMulti?: boolean
  card: CardMessage
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
    msg_type: 'interactive',
    root_id: rootId,
    update_multi: updateMulti,
    card
  })

  return data
}

/**
 * 刷新卡片
 */
export async function refreshCardMessage({
  tenantAccessToken,
  instance,
  openIds,
  token,
  cardContent
}: {
  tenantAccessToken: string
  instance?: AxiosInstance
  openIds: string[]
  token: string
  cardContent: CardContentElements
}): Promise<any> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<any>(REFRESH_CARD_MESSAGE, {
    token,
    card: {
      ...cardContent,
      open_ids: openIds
    }
  })

  return data
}
