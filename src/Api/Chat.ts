import axios, { AxiosInstance } from 'axios'
import {
  CreateChatResponse,
  ChatListResponse,
  ChatInfoResponse
} from '../types/Response'
import { CREATE_CHAT, CHAT_LIST, CHAT_INFO } from '../Constants'
import { Headers } from '../utils/headers'

type createChatParams = {
  name?: string
  description?: string
  i18n_names?: { [key: string]: string }
  only_owner_add?: boolean
  share_allowed?: boolean
  only_owner_at_all?: boolean
  only_owner_edit?: boolean
  instance?: AxiosInstance
  tenantAccessToken: string
} & ({ open_ids: string[] } | { user_ids: string[] })

export async function createChat(
  params: createChatParams
): Promise<CreateChatResponse> {
  let $instance: AxiosInstance | undefined = params.instance

  if (!$instance) {
    $instance = axios.create(Headers(params.tenantAccessToken))
  }

  const { data } = await $instance.post<CreateChatResponse>(CREATE_CHAT, {
    name: params.name || '',
    description: params.description || '',
    i18n_names: params.i18n_names,
    only_owner_add:
      params.only_owner_add === undefined ? false : params.only_owner_add,
    share_allowed:
      params.share_allowed === undefined ? true : params.share_allowed,
    only_owner_at_all:
      params.only_owner_at_all === undefined ? false : params.only_owner_at_all,
    only_owner_edit:
      params.only_owner_edit === undefined ? false : params.only_owner_edit
  })

  return data
}

export async function getChatList({
  pageSize,
  pageToken,
  instance,
  tenantAccessToken
}: {
  pageSize?: number
  pageToken?: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<ChatListResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      }
    })
  }

  const { data } = await axios.get<ChatListResponse>(CHAT_LIST, {
    params: {
      page_size: pageSize,
      page_token: pageToken
    }
  })

  return data
}

export async function getChatInfo({
  chatId,
  instance,
  tenantAccessToken
}: {
  chatId: string
  tenantAccessToken: string
  instance?: AxiosInstance
}): Promise<ChatInfoResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      }
    })
  }

  const { data } = await axios.get<ChatInfoResponse>(CHAT_INFO, {
    params: {
      chat_id: chatId
    }
  })

  return data
}
