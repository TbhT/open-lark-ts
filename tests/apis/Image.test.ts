import debug from 'debug'
import { getTenantAccessToken } from '../../src/apis/OAuth'
import * as Config from '../config.json'
import { uploadLocalImage, getImage } from '../../src/apis/Image'
import { resolve } from 'path'

debug.enable('test*')

const D = debug('test:image')
let tenantAccessToken: string

beforeAll(async () => {
  const { tenant_access_token } = await getTenantAccessToken({
    appId: Config.bot.appId,
    appSecret: Config.bot.appSecret
  })

  tenantAccessToken = tenant_access_token
})

describe('上传本地图片', () => {
  test('should upload a image', async () => {
    const res = await uploadLocalImage({
      tenantAccessToken,
      filePath: resolve('tests/images/avatar.png'),
      imageType: 'message'
    })

    D('upload image response %o', res)

    expect(res.length).toBe(1)
    expect(res[0].code).toBe(0)
    expect(res[0].data).toHaveProperty('image_key')
  })

  test('should upload some image', async () => {
    const res = await uploadLocalImage({
      tenantAccessToken,
      filePath: [
        resolve('tests/images/avatar.png'),
        resolve('tests/images/avatar.png')
      ],
      imageType: 'message'
    })

    expect(res.length).toBe(2)
    expect(res[0].code).toBe(0)
    expect(res[1].code).toBe(0)
    expect(res[0].data).toHaveProperty('image_key')
    expect(res[1].data).toHaveProperty('image_key')
  })
})

describe('获取上传的图片', () => {
  test('should return a picture', async () => {
    const data = await getImage({
      tenantAccessToken,
      imageKey: Config.development.image_key
    })

    D('图片数据流 %O', typeof data)
    expect(data.length).toBeGreaterThan(10)
  })
})
