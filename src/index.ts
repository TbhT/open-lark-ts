import * as BotObservable from '@/observable/Bot'

import * as ChatObservable from '@/observable/Chat'

import * as DocObservable from '@/observable/Doc'

import * as Id2IdObservable from '@/observable/Id2Id'

import * as ImageObservable from '@/observable/Image'

import * as MessageObservable from '@/observable/Message'

import * as OAuthObservable from '@/observable/OAuth'

import * as UserObservable from '@/observable/User'

import * as Aes from '@/operators/aes-256'

import * as BotOperator from '@/operators/Bot'

import * as Chat from '@/operators/Chat'

import { Bot } from '@/Bot'

import { Cache } from '@/Cache'

export const observable = {
  Bot: BotObservable,
  Doc: DocObservable,
  Id2Id: Id2IdObservable,
  Chat: ChatObservable,
  Image: ImageObservable,
  Message: MessageObservable,
  OAuth: OAuthObservable,
  User: UserObservable,
  Cache
}

export const operators = {
  aes: Aes,
  bot: BotOperator,
  chat: Chat
}

export default {
  Bot
}
