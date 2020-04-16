import axios, { AxiosInstance } from 'axios'
import { readFile } from 'fs'
import { promisify } from 'util'
import FormData from 'form-data'
import { UPLOAD_PATH, GET_IMAGE_PATH } from '../Constants'
import { UploadImageResponse } from '../types/Response'

const readFileAsync = promisify(readFile)

export async function uploadImage({
  axiosInstance,
  file,
  imageType
}: {
  file: Buffer
  imageType: 'message' | 'avatar'
  axiosInstance?: AxiosInstance
}): Promise<UploadImageResponse> {
  let $instance: AxiosInstance | undefined = axiosInstance

  if (!$instance) {
    $instance = axios.create()
  }

  const formData = new FormData()

  formData.append('image', file)
  formData.append('image_type', imageType)
  const { data } = await $instance.post(UPLOAD_PATH, formData, {
    headers: formData.getHeaders()
  })
  return data
}

export async function getImage({
  imageKey,
  axiosInstance
}: {
  imageKey: string
  axiosInstance?: AxiosInstance
}): Promise<BinaryType> {
  let $instance: AxiosInstance | undefined = axiosInstance

  if (!$instance) {
    $instance = axios.create()
  }

  const { data } = await $instance.get(GET_IMAGE_PATH, {
    params: {
      image_key: imageKey
    }
  })

  return data
}

export async function uploadLocalImage({
  filePath,
  imageType,
  axiosInstance
}: {
  filePath: string | string[]
  imageType: 'message' | 'avatar'
  axiosInstance: AxiosInstance
}): Promise<UploadImageResponse[]> {
  let file: Buffer[]
  let $instance: AxiosInstance | undefined = axiosInstance

  if (!$instance) {
    $instance = axios.create()
  }

  if (Array.isArray(filePath)) {
    file = await Promise.all(filePath.map(f => readFileAsync(f)))
  } else {
    file = [await readFileAsync(filePath)]
  }

  const res: UploadImageResponse[] = []

  for (const iterator of file) {
    const r = await uploadImage({ file: iterator, imageType })
    res.push(r)
  }

  return res
}
