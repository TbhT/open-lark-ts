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
 * 图片类型只能为 message
 * @param param0
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
    file = await Promise.all(filePath.map(f => createReadStream(f)))
  } else {
    file = [createReadStream(filePath)]
  }

  const res: UploadImageResponse[] = []

  for (const iterator of file) {
    const r = await uploadImage({
      file: iterator,
      imageType,
      instance,
      tenantAccessToken
    })
    res.push(r)
  }

  return res
}
