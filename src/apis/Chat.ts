import axios, { AxiosInstance } from 'axios'
import {
  CreateChatResponse,
  ChatListResponse,
  ChatInfoResponse,
  UpdateChatResponse
} from '../types/Response'
import { CREATE_CHAT, CHAT_LIST, CHAT_INFO, UPDATE_CHAT } from '../Constants'
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

export async function updateChatInfo(params: {
  chatId: string
  owner_open_id?: string
  owner_user_id?: string
  name?: string
  description?: string
  i18n_names?: { [key: string]: string }
  only_owner_add?: boolean
  share_allowed?: boolean
  only_owner_at_all?: boolean
  only_owner_edit?: boolean
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<UpdateChatResponse> {
  const {
    tenantAccessToken,
    instance,
    chatId,
    owner_open_id,
    owner_user_id,
    name,
    i18n_names,
    only_owner_add = false,
    share_allowed = true,
    only_owner_at_all = false,
    only_owner_edit = false
  } = params

  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: Headers(tenantAccessToken)
    })
  }

  const { data } = await axios.post<UpdateChatResponse>(UPDATE_CHAT, {
    chat_id: chatId,
    owner_open_id,
    owner_user_id,
    name,
    i18n_names,
    only_owner_add,
    only_owner_at_all,
    share_allowed,
    only_owner_edit
  })

  return data
}
