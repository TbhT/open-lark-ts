import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { readFile } from 'fs'
import { promisify } from 'util'
import FormData from 'form-data'
import { UPLOAD_PATH, GET_IMAGE_PATH } from './Constants'
import { UploadImageResponse } from './types/Response'

const readFileAsync = promisify(readFile)

export default abstract class Requestable {
  abstract axiosInstance: AxiosInstance

  async uploadLocalImage(
    filePath: string | string[],
    imageType: 'message' | 'avatar'
  ): Promise<UploadImageResponse[]> {
    let file: Buffer[]

    if (Array.isArray(filePath)) {
      file = await Promise.all(filePath.map(f => readFileAsync(f)))
    } else {
      file = [await readFileAsync(filePath)]
    }

    const res: UploadImageResponse[] = []

    for (const iterator of file) {
      const r = await this.uploadImage(iterator, imageType)
      res.push(r)
    }

    return res
  }

  async uploadImage(
    file: Buffer,
    imageType: 'message' | 'avatar'
  ): Promise<UploadImageResponse> {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('image_type', imageType)
    const { data } = await this.axiosInstance.post(UPLOAD_PATH, formData, {
      headers: formData.getHeaders()
    })
    return data
  }

  async getImage(imageKey: string): Promise<BinaryType> {
    const { data } = await this.axiosInstance.get(GET_IMAGE_PATH, {
      params: {
        image_key: imageKey
      }
    })

    return data
  }
}
