import axios, { AxiosInstance } from 'axios'
import Headers from '../utils/headers'
import {
  SendMessageBatchResponse,
  SendMessageResponse
} from '../types/Response'
import { SEND_MESSAGE_BATCH, SEND_MESSAGE } from '../Constants'

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
  content: { text: string }
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
      content
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
}: {
  openId?: string
  userId?: string
  email?: string
  chatId?: string
  tenantAccessToken: string
  rootId?: string
  content: string
  instance?: AxiosInstance
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
