import axios, { AxiosInstance } from 'axios'
import { BotInfoResponse, CommonResponse } from '../types/Response'
import {
  GET_BOT_INFO,
  ADD_BOT_TO_CHAT,
  REMOVE_BOT_FROM_CHAT
} from '../Constants'
import { Headers } from '../utils/headers'

export async function getBotInfo({
  tenantAccessToken,
  instance
}: {
  tenantAccessToken: string
  instance: AxiosInstance
}): Promise<BotInfoResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      }
    })
  }

  const { data } = await axios.get<BotInfoResponse>(GET_BOT_INFO)

  return data
}

export async function addBotToChat({
  chatId,
  instance,
  tenantAccessToken
}: {
  chatId: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<CommonResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await axios.post<CommonResponse>(ADD_BOT_TO_CHAT, {
    chat_id: chatId
  })

  return data
}

export async function removeBotFromChat({
  chatId,
  instance,
  tenantAccessToken
}: {
  chatId: string
  instance: AxiosInstance
  tenantAccessToken: string
}): Promise<CommonResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await axios.post<CommonResponse>(REMOVE_BOT_FROM_CHAT, {
    chat_id: chatId
  })

  return data
}
