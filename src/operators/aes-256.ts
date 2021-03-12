import { Observable, of } from 'rxjs'
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes
} from 'crypto'
import { mergeMap, map } from 'rxjs/operators'

const ALGORITHM = 'aes-256-cbc'

export type AES_KEY = string

export function generateKey() {
  return function (ob: Observable<AES_KEY>) {
    return new Observable<Buffer>(subscriber =>
      ob.subscribe(
        value => {
          const HASH_SHA_256 = createHash('sha256')
          const k = HASH_SHA_256.update(value).digest()
          subscriber.next(k)
        },
        error => {
          subscriber.error(error)
        },
        () => {
          subscriber.complete()
        }
      )
    )
  }
}

const iv = randomBytes(16)

export function encrypt(key: Buffer) {
  return function (ob: Observable<string>) {
    return new Observable<string>(subscriber =>
      ob.subscribe(
        data => {
          const cipher = createCipheriv(ALGORITHM, Buffer.from(key), iv)
          cipher.update(data)
          const cipherText = cipher.final()
          const final = Buffer.concat([iv, cipherText])

          subscriber.next(final.toString('base64'))
        },
        error => subscriber.error(error),
        () => subscriber.complete()
      )
    )
  }
}

export function decrypt() {
  return function (ob: Observable<AESData>) {
    return new Observable<string>(subscriber =>
      ob.subscribe(
        data => {
          const decodeString = Buffer.from(data.data, 'base64')
          const decipher = createDecipheriv(
            ALGORITHM,
            Buffer.from(data.aesKey),
            iv
          )
          let decrypted = decipher.update(
            decodeString.slice(16),
            undefined,
            'utf8'
          )
          decrypted += decipher.final('utf8')
          subscriber.next(decrypted)
        },
        error => subscriber.error(error),
        () => subscriber.complete()
      )
    )
  }
}

export interface AESData {
  data: string
  aesKey: Buffer
}

export default function aes256(key: string) {
  return (ob: Observable<string>) => {
    return new Observable<AESData>(subscriber =>
      of(key)
        .pipe(
          generateKey(),
          mergeMap($key => {
            return ob.pipe(
              encrypt($key),
              map(data => ({
                data,
                aesKey: $key
              }))
            )
          })
        )
        .subscribe(
          encryptData => {
            subscriber.next(encryptData)
          },
          error => subscriber.error(error),
          () => subscriber.complete()
        )
    )
  }
}
