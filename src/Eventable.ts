import { EventEmitter } from 'events'
import { EventType } from './types/Enum'
import {
  EventAppOpen,
  EventMessage,
  EventRemoveAddBot,
  EventP2PCreateChat,
  EventUserInAndOutChat
} from './types/CallbackEvent'

export default abstract class Eventable extends EventEmitter {
  /**
   * 当企业管理员在管理员后台首次开通应用时，开放平台推送 app_open 事件到请求网址。
   */
  abstract on(event: EventType.APP_OPEN, fn: (data: EventAppOpen) => void): this

  /**
   * 会话消息事件包括与机器人直接对话和在群聊中与机器人交流。
   * 当前应用默认可以接收机器人私聊消息与群里中@机器人的消息。
   * 当消息事件发生时，开放平台推送 message 消息到请求网址，不同类型的消息通知内容略有差异。
   * @param event
   * @param fn
   */
  abstract on(event: EventType.MESSAGE, fn: (data: EventMessage) => void): this

  /**
   * 机器人被从群聊中移除时，开放平台推送 remove_bot 通知事件到请求网址。
   * 机器人被邀请进入群聊时，平台推送 add_bot 通知事件到请求网址。
   * @param event
   * @param fn
   */
  abstract on(
    event: EventType.REMOVE_BOT | EventType.ADD_BOT,
    fn: (data: EventRemoveAddBot) => void
  ): this

  /**
   * 首次会话是用户了解应用的重要机会，你可以发送操作说明、配置地址来指导用户开始使用你的应用。
   * @param event
   * @param fn
   */
  abstract on(
    event: EventType.P2P_CHAT_CREATE,
    fn: (data: EventP2PCreateChat) => void
  ): this

  /**
   * 用户进群出群事件通知
   * 用户出群
   * 撤销加人
   * @param event
   * @param fn
   */
  abstract on(
    event:
      | EventType.ADD_USER_TO_CHAT
      | EventType.REMOVE_USER_FROM_CHAT
      | EventType.REVOKE_ADD_USER_FROM_CHAT,
    fn: (data: EventUserInAndOutChat) => void
  ): this
}
