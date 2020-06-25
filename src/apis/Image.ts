/**
 * Image 模块有以下功能：
 * - 上传本地图片
 * - 获取上传的图片流
 *
 * @packageDocumentation
 * @module Api.Image
 * @preferred
 */

import axios, { AxiosInstance } from 'axios'
import { createReadStream } from 'fs'
/**
 * @doc https://github.com/jdalrymple/gitbeaker/issues/417
 */
import * as FormData from 'form-data'
import { UPLOAD_PATH, GET_IMAGE_PATH } from '../Constants'
import { UploadImageResponse } from '../types/Response'
import { Stream } from 'stream'

export async function uploadImage({
  instance,
  file,
  imageType,
  tenantAccessToken
}: {
  file: Stream
  imageType: 'message' | 'avatar'
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<UploadImageResponse> {
  let $instance: AxiosInstance | undefined = instance
  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      }
    })
  }

  const formData = new FormData()
  formData.append('image', file)
  formData.append('image_type', imageType)

  const { data } = await $instance.post<UploadImageResponse>(
    UPLOAD_PATH,
    formData,
    {
      headers: formData.getHeaders()
    }
  )

  return data
}

export async function getImage({
  imageKey,
  instance,
  tenantAccessToken
}: {
  imageKey: string
  instance?: AxiosInstance
  tenantAccessToken: string
}): Promise<any> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create({
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      }
    })
  }

  const { data } = await $instance.get<any>(GET_IMAGE_PATH, {
    params: {
      image_key: imageKey
    }
  })

  return data
}

/**
 *
 * ```typescript
 *  import { Api: { getTenantAccessToken, uploadImage  } } from "@lark-sdk";
 *
 *  const { tenant_access_token } = await getTenantAccessToken({
 *    appId: Config.bot.appId,
 *    appSecret: Config.bot.appSecret
 *  })
 *
 *  const res = await uploadLocalImage({
 *    tenantAccessToken,
 *    filePath: resolve('tests/images/avatar.png'),
 *    imageType: 'message'
 *  })
 * ```
 *
 * @param instance {AxiosInstance}
 * @param file {Stream} 文件流
 * @param imageType 图片类型只能为 'message'
 * @param tenantAccessToken
 */
export async function uploadLocalImage({
  filePath,
  imageType,
  instance,
  tenantAccessToken
}: {
  filePath: string | string[]
  imageType: 'message' | 'avatar'
  tenantAccessToken: string
  instance?: AxiosInstance
}): Promise<UploadImageResponse[]> {
  let file: Stream[]

  if (Array.isArray(filePath)) {
    file = filePath.map(f => createReadStream(f))
  } else {
    file = [createReadStream(filePath)]
  }

  const fileArray: Promise<UploadImageResponse>[] = []

  for (const iterator of file) {
    fileArray.push(
      uploadImage({
        file: iterator,
        imageType,
        instance,
        tenantAccessToken
      })
    )
  }

  const res: UploadImageResponse[] = await Promise.all(fileArray)

  return res
}
