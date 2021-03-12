import { Observable, of } from 'rxjs'
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes
} from 'crypto'
import { mergeMap } from 'rxjs/operators'

const ALGORITHM = 'aes-256-cbc'

export type AES_KEY = string

export function generateKey() {
  return function (ob: Observable<AES_KEY>) {
    return new Observable<Buffer>(subscriber =>
      ob.subscribe(
        value => {
          const HASH_SHA_256 = createHash('sha256')
          subscriber.next(HASH_SHA_256.update(value).digest())
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

export function decrypt(key: string) {
  return function (ob: Observable<string>) {
    return new Observable<string>(subscriber =>
      ob.subscribe(
        data => {
          const decodeString = Buffer.from(data, 'base64')
          const decipher = createDecipheriv(ALGORITHM, Buffer.from(key), iv)
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

export default function aes256(key: string) {
  return (ob: Observable<string>) => {
    return new Observable<string>(subscriber =>
      of(key)
        .pipe(
          generateKey(),
          mergeMap($key => ob.pipe(encrypt($key)))
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
