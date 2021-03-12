import { RxHR } from '@akanass/rx-http-request'
import { Stream } from 'stream'
import * as FormData from 'form-data'
import { forkJoin, Observable, of } from 'rxjs'
import { UploadImageResponse } from '@/types/Response'
import { UPLOAD_PATH, GET_IMAGE_PATH } from '@/Constants'
import { createReadStream } from 'fs'
import { catchError, concatMap, mergeMap } from 'rxjs/operators'

export function uploadImage({
  file,
  imageType,
  tenantAccessToken
}: {
  file: Stream
  imageType: 'message' | 'avatar'
  tenantAccessToken: string
}) {
  return new Observable<UploadImageResponse>(subscriber => {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('image_type', imageType)

    return RxHR.post<UploadImageResponse>(UPLOAD_PATH, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`,
        ...formData.getHeaders()
      },
      json: true,
      formData
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  })
}

export function getImage({
  imageKey,
  tenantAccessToken
}: {
  imageKey: string
  tenantAccessToken: string
}) {
  return new Observable(subscriber =>
    RxHR.get(GET_IMAGE_PATH, {
      headers: {
        Authorization: `Bearer ${tenantAccessToken}`
      },
      json: true,
      qs: {
        image_key: imageKey
      }
    }).subscribe(
      data => subscriber.next(data.body),
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  )
}

export function uploadLocalImage({
  filePath,
  imageType,
  tenantAccessToken
}: {
  filePath: string | string[]
  imageType: 'message' | 'avatar'
  tenantAccessToken: string
}) {
  return new Observable(subscriber => {
    let file: Stream[]

    if (Array.isArray(filePath)) {
      file = filePath.map(f => createReadStream(f))
    } else {
      file = [createReadStream(filePath)]
    }

    const fileArray: Observable<UploadImageResponse>[] = []

    for (const iterator of file) {
      fileArray.push(
        uploadImage({
          file: iterator,
          imageType,
          tenantAccessToken
        })
      )
    }

    forkJoin(...fileArray).subscribe(
      (data: UploadImageResponse[]) => {
        subscriber.next(data)
      },
      error => subscriber.error(error),
      () => subscriber.complete()
    )
  })
}
