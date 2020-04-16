import axios, { AxiosInstance } from 'axios'
import { GET_APP_ACCESS_TOKEN } from '../Constants'
import { AppAccessTokenResponse } from '../types/Response'

export async function getAppAccessToken({
  appId,
  appSecret,
  instance
}: {
  instance?: AxiosInstance
  appId: string
  appSecret: string
}): Promise<AppAccessTokenResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  const { data } = await $instance.post<AppAccessTokenResponse>(
    GET_APP_ACCESS_TOKEN,
    {
      app_id: appId,
      app_secret: appSecret
    }
  )

  return data
}
