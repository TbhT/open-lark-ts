/**
 * @doc 云文档api https://open.feishu.cn/document/ugTM5UjL4ETO14COxkTN/uczNzUjL3czM14yN3MTN
 * 云文档模块主要有以前api功能
 *
 * @packageDocumentation
 * @module Api.Doc
 * @preferred
 */
import axios, { AxiosInstance } from 'axios'
import {
  CreateDriveDirResponse,
  GetDriveDirInfoResponse,
  GetDriveDirFilesInfoResponse
} from '../types/Response'
import { CREATE_DRIVE_DIR } from '../Constants'
import Headers from '../utils/headers'

/**
 * 创建云文档文件夹
 */
export async function createDriveDir({
  userAccessToken,
  instance,
  folderToken,
  title
}: {
  userAccessToken: string
  instance?: AxiosInstance
  folderToken: string
  title: string
}): Promise<CreateDriveDirResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(userAccessToken))
  }

  const { data } = await $instance.post<CreateDriveDirResponse>(
    `${CREATE_DRIVE_DIR}/${folderToken}`,
    {
      title
    }
  )

  return data
}

/**
 * 获取文件夹源信息
 */
export async function getDriveDirInfo({
  userAccessToken,
  instance,
  folderToken
}: {
  userAccessToken: string
  instance?: AxiosInstance
  folderToken: string
}): Promise<GetDriveDirInfoResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(userAccessToken))
  }

  const { data } = await $instance.get<GetDriveDirInfoResponse>(
    `${CREATE_DRIVE_DIR}/${folderToken}/meta`
  )

  return data
}

/**
 * 获取文件夹下的文档清单
 */
export async function getDriveDirFilesInfo({
  userAccessToken,
  instance,
  folderToken,
  types
}: {
  userAccessToken: string
  instance?: AxiosInstance
  folderToken: string
  types?: string | string[]
}): Promise<GetDriveDirFilesInfoResponse> {
  let $instance: AxiosInstance | undefined = instance

  if (!$instance) {
    $instance = axios.create(Headers(userAccessToken))
  }

  const { data } = await $instance.get<GetDriveDirFilesInfoResponse>(
    `${CREATE_DRIVE_DIR}/${folderToken}/children`,
    {
      params: { types }
    }
  )

  return data
}
