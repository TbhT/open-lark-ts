import axios, { AxiosInstance } from 'axios'
import {
  CreateChatResponse,
  ChatListResponse,
  ChatInfoResponse,
  UpdateChatResponse,
  ModifyUserToChatResponse,
  CommonResponse
} from '../types/Response'
import {
  CREATE_CHAT,
  CHAT_LIST,
  CHAT_INFO,
  UPDATE_CHAT,
  ADD_USER_TO_CHAT,
  REMOVE_USER_FROM_CHAT,
  DISCARD_CHAT
} from '../Constants'
import { Headers } from '../utils/headers'

type createChatParams = {
  name?: string
  description?: string
  i18nNames?: { [key: string]: string }
  onlyOwnerAdd?: boolean
  shareAllowed?: boolean
  onlyOwnerAtAll?: boolean
  onlyOwnerEdit?: boolean
  instance?: AxiosInstance
  tenantAccessToken: string
  userIds?: string[]
  openIds?: string[]
}

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
    i18n_names: params.i18nNames,
    only_owner_add:
      params.onlyOwnerAdd === undefined ? false : params.onlyOwnerAdd,
    share_allowed:
      params.shareAllowed === undefined ? true : params.shareAllowed,
    only_owner_at_all:
      params.onlyOwnerAtAll === undefined ? false : params.onlyOwnerAtAll,
    only_owner_edit:
      params.onlyOwnerEdit === undefined ? false : params.onlyOwnerEdit,
    user_ids: params.userIds,
    open_ids: params.openIds
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
  ownerOpenId?: string
  ownerUserId?: string
  name?: string
  description?: string
  i18nNames?: { [key: string]: string }
  onlyOwnerAdd?: boolean
  shareAllowed?: boolean
  onlyOwnerAtAll?: boolean
  onlyOwnerEdit?: boolean
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<UpdateChatResponse> {
  const {
    tenantAccessToken,
    instance,
    chatId,
    ownerOpenId,
    ownerUserId,
    name,
    i18nNames,
    onlyOwnerAdd = false,
    shareAllowed = true,
    onlyOwnerAtAll = false,
    onlyOwnerEdit = false
  } = params

  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: Headers(tenantAccessToken)
    })
  }

  const { data } = await axios.post<UpdateChatResponse>(UPDATE_CHAT, {
    chat_id: chatId,
    owner_open_id: ownerOpenId,
    owner_user_id: ownerUserId,
    name,
    i18n_names: i18nNames,
    only_owner_add: onlyOwnerAdd,
    only_owner_at_all: onlyOwnerAtAll,
    share_allowed: shareAllowed,
    only_owner_edit: onlyOwnerEdit
  })

  return data
}

type ModifyUserInChat = {
  chatId: string
  instance?: AxiosInstance
  tenantAccessToken: string
  userIds?: string[]
  openIds?: string[]
}

export async function AddUserToChat({
  chatId,
  instance,
  tenantAccessToken,
  openIds,
  userIds
}: ModifyUserInChat): Promise<ModifyUserToChatResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: Headers(tenantAccessToken)
    })
  }

  const { data } = await axios.post<ModifyUserToChatResponse>(
    ADD_USER_TO_CHAT,
    {
      chat_id: chatId,
      user_ids: userIds,
      open_ids: openIds
    }
  )

  return data
}

export async function removeUserFromChat({
  chatId,
  instance,
  tenantAccessToken,
  openIds,
  userIds
}: ModifyUserInChat): Promise<ModifyUserToChatResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: Headers(tenantAccessToken)
    })
  }

  const { data } = await axios.post<ModifyUserToChatResponse>(
    REMOVE_USER_FROM_CHAT,
    {
      chat_id: chatId,
      user_ids: userIds,
      open_ids: openIds
    }
  )

  return data
}

export async function discardChat({
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
    $instance = axios.create({
      headers: Headers(tenantAccessToken)
    })
  }

  const { data } = await axios.post<CommonResponse>(DISCARD_CHAT, {
    chat_id: chatId
  })

  return data
}
