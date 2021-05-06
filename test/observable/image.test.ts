import debug from 'debug'
import { getTenantAccessToken } from '@/observable/OAuth'
import * as Config from '../config.json'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { getImage, uploadLocalImage } from '@/observable/Image'
import { resolve } from 'path'
import { TenantAccessTokenResponse } from '@/types/Response'

debug.enable('test*')

const logger = debug('test:image')
let tenantAccessToken: string

export async function getAccessToken() {
  return new Promise<TenantAccessTokenResponse>((resolve, reject) => {
    getTenantAccessToken({
      appId: Config.bot.appId,
      appSecret: Config.bot.appSecret
    })
      .pipe(catchError(e => of(e)))
      .subscribe(
        data => {
          resolve(data)
        },
        error => reject(error)
      )
  })
}

beforeAll(async () => {
  return getAccessToken().then(v => {
    tenantAccessToken = v.tenant_access_token
  })
})

describe('上传本地图片', () => {
  test('should update a image', done => {
    uploadLocalImage({
      tenantAccessToken,
      filePath: resolve('test/images/avatar.png'),
      imageType: 'message'
    }).subscribe(
      data => {
        logger('upload image response %o ', data)
        expect(data.length).toBe(1)
        expect(data[0].code).toBe(0)
        expect(data[0].data).toHaveProperty('image_key')
      },
      error => done(error),
      () => done()
    )
  })

  test('should upload some image', done => {
    uploadLocalImage({
      tenantAccessToken,
      filePath: [
        resolve('tests/images/avatar.png'),
        resolve('tests/images/avatar.png')
      ],
      imageType: 'message'
    }).subscribe(
      data => {
        logger('upload image response %o ', data)

        expect(data.length).toBe(2)
        expect(data[0].code).toBe(0)
        expect(data[0].data).toHaveProperty('image_key')
      },
      error => done(error),
      () => done()
    )
  })
})

describe('获取上传的图片', () => {
  test('should return a picture', done => {
    getImage({
      tenantAccessToken,
      imageKey: Config.development.image_key
    }).subscribe(
      data => {
        logger('图片数据流 %O ', typeof data)
        expect(data.length).toBeGreaterThan(10)
      },
      done,
      done
    )
  })
})
