/**
 * Chat模块的api有以下功能：
 * - 机器人创建群并拉指定用户进群
 * - 获取机器人所在的群列表
 * - 获取群名称、群主 ID、成员列表 ID 等群基本信息
 * - 更新群名称、群配置、转让群主等
 * - 机器人拉用户进群，机器人必须在群里
 * - 机器人移除用户出群
 * - 机器人解散群
 *
 * @packageDocumentation
 * @module Api.Chat
 * @preferred
 */
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

/**
 * 机器人创建群并拉指定用户进群
 * > **权限说明 ：** 需要启用机器人能力
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, createChat  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { data } = await createChat({
 *    tenantAccessToken,
 *    name: 'jest unit test',
 *    openIds: [open_id]
 *  })
 * ```
 * @param params
 */
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

/**
 * 获取机器人所在的群列表
 * > **权限说明 ：** 需要启用机器人能力
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, getChatList  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 * const { data } = await getChatList({
 *    tenantAccessToken
 * })
 * ```
 *
 * @param pageSize 分页大小，最大支持 200；默认为 100
 * @param pageToken 分页标记，第一次请求不填，表示从头开始遍历；分
 * 页查询还有更多群时会同时返回新的 page_token, 下次遍历可采用该 page_token 获取更多群
 * @param instance {AxiosInstance}
 * @param tenantAccessToken
 */
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

  const { data } = await $instance.get<ChatListResponse>(CHAT_LIST, {
    params: {
      page_size: pageSize,
      page_token: pageToken
    }
  })

  return data
}

/**
 * 获取群名称、群主 ID、成员列表 ID 等群基本信息
 * > **权限说明 ：** 需要启用机器人能力
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, getChatInfo  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { data } = await getChatInfo({
 *    chatId: chatId,
 *    tenantAccessToken
 *  })
 * ```
 *
 * @param chatId 群 ID
 * @param instance {AxiosInstance}
 * @param tenantAccessToken
 */
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

  const { data } = await $instance.get<ChatInfoResponse>(CHAT_INFO, {
    params: {
      chat_id: chatId
    }
  })

  return data
}

/**
 * 更新群名称、群配置、转让群主等
 * > **权限说明 ：** 需要启用机器人能力
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, updateChatInfo  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 * const { data } = await updateChatInfo({
 *    chatId: chatId,
 *    tenantAccessToken,
 *    i18nNames: {
 *      zh_cn: 'jest测试群',
 *      en_us: 'jestGroup',
 *      ja_jp: 'jestJapan'
 *    }
 * })
 * ```
 *
 * @param params
 */
export async function updateChatInfo(params: {
  chatId: string
  ownerOpenId?: string
  ownerUserId?: string
  name?: string
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
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<UpdateChatResponse>(UPDATE_CHAT, {
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

/**
 * 机器人拉用户进群，机器人必须在群里
 * **权限说明 ：** 需要启用机器人能力；机器人必须在群里
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, addUserToChat  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { data } = await addUserToChat({
 *    tenantAccessToken,
 *    userIds: [userId],
 *    chatId
 *  })
 *
 * ```
 * @param chatId 群 ID
 * @param instance {AxiosInstance}
 * @param tenantAccessToken
 * @param openIds 需要加入群的用户的 user_id 列表，最多可以传200个
 * (open_ids 和 user_ids 参数不能同时为空)
 * @param userIds 需要加入群的用户的 open_id 列表，最多可以传200个
 * (open_ids 和 user_ids 参数不能同时为空)
 */
export async function addUserToChat({
  chatId,
  instance,
  tenantAccessToken,
  openIds,
  userIds
}: ModifyUserInChat): Promise<ModifyUserToChatResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<ModifyUserToChatResponse>(
    ADD_USER_TO_CHAT,
    {
      chat_id: chatId,
      user_ids: userIds,
      open_ids: openIds
    }
  )

  return data
}

/**
 * 机器人移除用户出群
 * **权限说明 ：** 需要启用机器人能力；机器人必须在群里
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, removeUserFromChat  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { data: removeData } = await removeUserFromChat({
 *    tenantAccessToken,
 *    userIds: [userId],
 *    chatId: data.chat_id
 *  })
 * ```
 *
 * @param chatId
 * @param instance
 * @param tenantAccessToken
 * @param openIds
 * @param userIds
 */
export async function removeUserFromChat({
  chatId,
  instance,
  tenantAccessToken,
  openIds,
  userIds
}: ModifyUserInChat): Promise<ModifyUserToChatResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<ModifyUserToChatResponse>(
    REMOVE_USER_FROM_CHAT,
    {
      chat_id: chatId,
      user_ids: userIds,
      open_ids: openIds
    }
  )

  return data
}

/**
 * 机器人解散群
 * **权限说明 ：** 需要启用机器人能力；机器人必须是群主（机器人创建的群，机器人默认是群主。）
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, updateChatInfo  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  await discardChat({
 *    tenantAccessToken,
 *    chatId: data.chat_id
 *  })
 *
 * ```
 *
 * @param chatId
 * @param instance
 * @param tenantAccessToken
 */
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
    $instance = axios.create(Headers(tenantAccessToken))
  }

  const { data } = await $instance.post<CommonResponse>(DISCARD_CHAT, {
    chat_id: chatId
  })

  return data
}
