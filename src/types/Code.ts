export enum I18NTitle {
  en_us = 'en_us',
  zh_cn = 'zh_cn',
  ja_jp = 'ja_jp'
}

export interface BaseUser {
  name: string

  open_id: string

  // 用户的user_id
  user_id: string
}

export interface User extends BaseUser {
  avatar: string

  // 需要申请获取email权限才有
  email?: string

  // 用户的employee_id
  employee_id: string

  status: number
}

export interface UserInfo {
  // 用户姓名
  name: string

  // 用户头像
  avatar_url: string

  // 用户邮箱，拥有"获取用户邮箱"权限时返回
  email?: string

  // 用户的 user_id，企业自建应用返回
  user_id: string

  // 用户手机号，已申请"获取用户手机号"权限的企业自建应用返回该字段
  mobile: string
}

// *机器人信息
export interface BotInfo {
  // app 当前状态
  activate_status: number

  // app 名称
  app_name: string

  // app 图像地址
  avatar_url: string

  // app 的 IP 白名单地址
  ip_white_list: string[]

  // 机器人的open_id
  open_id: string
}

// *会话信息，包括和机器人的私聊 + 群聊
export interface Chat {
  // 群头像
  avatar: string

  // 群描述
  description: string

  open_chat_id?: string

  chat_id: string

  // 国际化名称
  i18n_names: I18NTitle

  members: User[]

  // 群聊的名字，如果是p2p就是空
  name: string

  // 群类型，group表示群聊，p2p表示单聊
  type: string

  // 群主的user_id，机器人是群主的时候没有这个字段
  owner_user_id: string

  // 群主的open_id，机器人是群主的时候没有这个字段
  owner_open_id: string
}

// *小程序 code 换取 session 对象
export interface MinaCodeToSessionResp {
  // 用户唯一标识,openid 用于在同一个应用中对用户进行标识，用户和应用可以确定一个唯一的 openid
  open_id: string

  // 用户在同一个开发者所属的多个应用中唯一标识,一个用户在同一个开发者所属的多个应用中，unionid 唯一
  union_id: string

  //  会话密钥
  session_key: string

  // 用户所在租户唯一标识
  tenant_key: string

  // 用户在同一个租户下的唯一标识（可选）
  employee_id?: string

  // 此处为Bearer
  token_type: string

  // user_access_token，用于获取用户资源
  access_token: string

  // user_access_token 过期时间
  expires_in: number

  // 刷新用户 access_token 时使用的 token
  refresh_token: number
}

// *获取登录用户身份，OAuth code 换取 session 对象
export interface UserAccessTokenData {
  // user_access_token，用于获取用户资源
  access_token: string

  // 用户头像
  avatar_url: string

  // user_access_token 过期时间
  expires_in: number

  // 用户姓名
  name: string

  // 用户英文姓名
  en_name: string

  // 用户唯一标识,openid 用于在同一个应用中对用户进行标识，用户和应用可以确定一个唯一的 openid
  open_id: string

  // 当前企业标识
  tenant_key: string

  // refresh_token 的有效期，单位: 秒
  refresh_expires_in: number

  // 刷新用户 access_token 时使用的 token
  refresh_token: string

  // 此处为Bearer
  token_type: string
}
