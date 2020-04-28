import * as MessageApi from './apis/Message'
import * as $Bot from './Bot'
import * as $Botable from './Botable'
import * as $Sayable from './Sayable'

export const Api = {
  ...MessageApi
}

export const Bot = {
  ...$Bot,
  ...$Botable,
  ...$Sayable
}
