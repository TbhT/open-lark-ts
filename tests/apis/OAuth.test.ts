import { getAppAccessToken } from '../../src/apis/OAuth'
import * as Config from '../config.json'
import debug from 'debug'

debug.enable('test*')

const D = debug('test:oauth')

describe('OAuth', () => {
  it('should return', async () => {
    const data = await getAppAccessToken({
      appId: Config.bot.appId,
      appSecret: Config.bot.appSecret
    })
  })
})
