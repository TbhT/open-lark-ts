import debug from 'debug'
import {} from '@/observable/Bot'

if (process.env.NODE_ENV === 'development') {
  debug.enable('test*')
}

const logger = debug('test:bot')
