/**
 * Bot模块的api有以下功能：
 * - 获取机器人信息
 * - 拉机器人进群
 * - 将机器人移出群
 *
 * @packageDocumentation
 * @module Api.Bot
 * @preferred
 */
import axios, { AxiosInstance } from 'axios'
import { BotInfoResponse, CommonResponse } from '../types/Response'
import {
  GET_BOT_INFO,
  ADD_BOT_TO_CHAT,
  REMOVE_BOT_FROM_CHAT
} from '../Constants'
import { Headers } from '../utils/headers'

/**
 * 获取机器人信息
 * > **权限说明：** 需要启用机器人能力
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, getBotInfo  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const { bot } = await getBotInfo({
 *    tenantAccessToken
 *  })
 * ```
 *
 * @param tenantAccessToken 访问 token
 * @param instance {AxiosInstance}
 * @category Bot
 */
export async function getBotInfo({
  tenantAccessToken,
  instance
}: {
  tenantAccessToken: string
  instance?: AxiosInstance
}): Promise<BotInfoResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      }
    })
  }

  const { data } = await $instance.get<BotInfoResponse>(GET_BOT_INFO)

  return data
}

/**
 * 拉机器人进群
 * > **权限说明:** 需要启用机器人能力；机器人的owner需要已经在群里
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, getBotInfo  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId,
 *    appSecret
 *  })
 *
 *  const { code } = await addBotToChat({
 *     tenantAccessToken,
 *     chatId
 *  })
 * ```
 * @param chatId 群的id
 * @param instance {AxiosInstance}
 * @param tenantAccessToken  访问 token
 * @category Bot
 */
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

  const { data } = await $instance.post<CommonResponse>(ADD_BOT_TO_CHAT, {
    chat_id: chatId
  })

  return data
}

/**
 * 将机器人移出群
 * > **权限说明：** 需要启用机器人能力
 *
 * ```typescript
 * import { Api: { getTenantAccessToken, getBotInfo  } } from "@lark-sdk";
 *
 * const { tenant_access_token } = await getTenantAccessToken({
 *   appId,
 *   appSecret
 * })
 *
 * const { code } = await removeBotFromChat({
 *    tenantAccessToken,
 *    chatId
 * })
 * ```
 *
 * @param chatId 群的id
 * @param instance {AxiosInstance}
 * @param tenantAccessToken 访问 token
 * @category Bot
 */
export async function removeBotFromChat({
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

  const { data } = await $instance.post<CommonResponse>(REMOVE_BOT_FROM_CHAT, {
    chat_id: chatId
  })

  return data
}
