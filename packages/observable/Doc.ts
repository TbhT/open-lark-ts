import { Observable } from 'rxjs'
import { RxHR } from '@akanass/rx-http-request'
import {
  CreateDriveDirResponse,
  GetDriveDirFilesInfoResponse,
  GetDriveDirInfoResponse
} from 'src/types/Response'
import { CREATE_DRIVE_DIR } from '@/Constants'

const { get, post } = RxHR

export function createDriveDir({
  userAccessToken,
  folderToken,
  title
}: {
  userAccessToken: string
  folderToken: string
  title: string
}) {
  return new Observable<CreateDriveDirResponse>(subscriber =>
    post<CreateDriveDirResponse>(`${CREATE_DRIVE_DIR}/${folderToken}`, {
      headers: {
        Authorization: `Bearer ${userAccessToken}`
      },
      json: true,
      body: {
        title
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getDriveDirInfo({
  userAccessToken,
  folderToken
}: {
  userAccessToken: string
  folderToken: string
}) {
  return new Observable<GetDriveDirInfoResponse>(subscriber =>
    get<GetDriveDirInfoResponse>(`${CREATE_DRIVE_DIR}/${folderToken}/meta`, {
      headers: {
        Authorization: `Bearer ${userAccessToken}`
      },
      json: true
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function getDriveDirFilesInfo({
  userAccessToken,
  folderToken,
  types
}: {
  userAccessToken: string
  folderToken: string
  types?: string | string[]
}) {
  return new Observable<GetDriveDirFilesInfoResponse>(subscriber =>
    get<GetDriveDirFilesInfoResponse>(
      `${CREATE_DRIVE_DIR}/${folderToken}/children`,
      {
        headers: {
          Authorization: `Bearer ${userAccessToken}`
        },
        json: true,
        qs: {
          types
        }
      }
    ).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}
