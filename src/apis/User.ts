import axios, { AxiosInstance } from 'axios'
import {
  UserChatIdResponse,
  UserIdResponse,
  BasicUserInfoResponse
} from '../types/Response'
import { GET_USER_BASE_INFO, GET_USER_ID, GET_USER_CHAT_ID } from '../Constants'

export async function getUserChatId({
  tenantAccessToken,
  instance,
  userId,
  openId
}: {
  tenantAccessToken: string
  instance?: AxiosInstance
  userId?: string
  openId?: string
}): Promise<UserChatIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`,
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.get<UserChatIdResponse>(GET_USER_CHAT_ID, {
    params: {
      open_id: openId,
      user_id: userId
    }
  })

  return data
}

export async function getUserId({
  tenantAccessToken,
  instance,
  email
}: {
  tenantAccessToken: string
  instance?: AxiosInstance
  email: string
}): Promise<UserIdResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`,
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.post<UserIdResponse>(GET_USER_ID, {
    email
  })

  return data
}

export async function getBasicUserInfo({
  tenantAccessToken,
  openId,
  userId,
  instance
}: {
  tenantAccessToken: string
  openId?: string
  userId?: string
  instance?: AxiosInstance
}): Promise<BasicUserInfoResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`,
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.get<BasicUserInfoResponse>(
    GET_USER_BASE_INFO,
    {
      params: {
        open_id: openId,
        user_id: userId
      }
    }
  )

  return data
}
