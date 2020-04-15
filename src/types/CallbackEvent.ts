import { BaseUser } from './Code'

export interface EventMessageMergeForward {
  root_id: string
  parent_id: string
  open_chat_id: string
  msg_type: string
  open_id: string
  open_message_id: string
  is_mention: boolean
  image_key: string
  image_url: string
  create_time: number
}

// 消息事件
export interface EventMessage {
  app_id: string
  tenant_key: string
  type: string

  // *消息事件公共
  root_id: string
  parent_id: string
  open_chat_id: string
  chat_type: string
  msg_type: string
  open_id: string
  open_message_id: string
  is_mention: boolean

  //   *文本消息、富文本消息含有的
  text: string
  text_without_at_bot: string

  //   *富文本消息
  image_keys: string[]
  title: string

  // *图片消息独有的
  image_height: string
  image_width: string
  image_url: string
  image_key: string

  //   *合并转发消息，（日历卡片、投票消息、会话记录等不支持合并转发）
  msg_list: EventMessageMergeForward[]
}

// *请假审批
// *请假审批通过后， 开放平台推送 leave_approval 事件到请求网址。
export interface EventLeaveApproval {
  app_id: string
  tenant_key: string
  type: string
  // 审批实例Code
  instance_code: string
  // 用户id
  employee_id: string
  // 审批发起时间，10位秒级
  start_time: number
  // 审批结束时间，10位秒级
  end_time: number
  // 请假类型
  leave_type: string
  // 请假单位：1：半天，2：一天
  leave_unit: 1 | 2
  // 请假开始时间 "2018-12-01 12:00:00"
  leave_start_time: string
  // 请假结束时间
  leave_end_time: string
  // 请假时长，单位（秒）
  leave_interval: number
  // 请假事由
  leave_reason: string
}

// *审批通过
// *订阅审批定义后，该定义产生的审批实例在结束时，会推送事件消息。
export interface EventApproval {
  app_id: string
  tenant_key: string
  type: string
  // 审批定义Code
  definition_code: string
  // 审批定义名称
  definition_name: string
  // 审批实例Code
  instance_code: string
  // 审批发起时间，10位秒级
  start_time: number
  //   审批结束时间，10位秒级
  end_time: number
  // 审批结束时间，10位秒级
  event: 'approve' | 'reject' | 'cancel'
}

// *加班审批
// *加班审批通过后推送消息，开放平台推送 work_approval 事件到请求网址。
export interface EventWorkApproval {
  app_id: string
  tenant_key: string
  type: string
  instance_code: string
  employee_id: string
  start_time: number
  end_time: number
  work_type: string
  work_start_time: string
  work_end_time: string
  work_interval: string
  work_reason: string
}

// *换班审批
// *换班审批通过后推送消息，开放平台推送 shift_approval 事件到请求网址。
export interface EventShiftApproval {
  app_id: string
  tenant_key: string
  type: string
  instance_code: string
  employee_id: string
  start_time: number
  end_time: number
  shift_time: string
  return_time: string
  shift_reason: string
}

// *补卡审批
// *补卡审批通过后， 开放平台推送 remedy_approval 事件到请求网址。
export interface EventRemedyApproval {
  app_id: string
  tenant_key: string
  type: string
  instance_code: string
  employee_id: string
  start_time: number
  end_time: number
  remedy_time: string
  remedy_reason: string
}

export interface EventTripApprovalSchedule {
  // 行程开始时间，"2018-12-01 12:00:00"
  trip_start_time: string
  // 行程结束时间，"2018-12-01 12:00:00"
  trip_end_time: string
  // 行程时长（秒）
  trip_interval: number
  // 出发地
  departure: string
  // 目的地
  destination: string
  // 目的地
  transportation: string
  // 单程/往返
  trip_type: string
  // 备注
  remark: string
}

// * 出差审批
// * 出差审批通过后推送消息，开放平台推送 trip_approval 事件到请求网址。
export interface EventTripApproval {
  app_id: string
  tenant_key: string
  type: string
  // 审批实例Code
  instance_code: string
  // 用户id
  employee_id: string
  // 审批发起时间
  start_time: number
  // 审批结束时间
  end_time: number
  // 行程总时长（秒）
  trip_interval: number
  // 出差事由
  trip_reason: string
  // 同行人
  trip_peers: string[]
  schedules: EventTripApprovalSchedule[]
}

export interface EventAppOpenUser {
  // 申请者的open_id
  open_id: string
  // 申请者的user_id
  user_id: string
}

// 开通应用
// 当企业管理员在管理员后台开通应用时，开放平台推送 app_open 事件到请求网址。
export interface EventAppOpen {
  // 应用ID
  app_id: string
  // 企业ID
  tenant_key: string
  // 事件类型
  type: string
  // 申请者的open_id
  applicants: EventAppOpenUser[]
  // 申请者的user_id
  installer: EventAppOpenUser
}

// 通讯录变更
// 应用申请通讯录读权限，平台会自动给相应应用订阅通讯录变更事件。
// 通讯录用户相关变更事件，包括 user_add, user_update 和 user_leave 事件类型
export interface EventContactUser {
  // 事件类型，包括 user_add, user_update, user_leave
  type: string
  app_id: string
  // 企业标识
  tenant_key: string
  open_id: string
  // 企业自建应用返回
  employee_id: string
}

// 通讯录变更
// 应用申请通讯录读权限，平台会自动给相应应用订阅通讯录变更事件。
// 通讯录部门相关变更事件，包括 dept_add, dept_update 和 dept_delete
export interface EventContactDepartment {
  // 事件类型，包括 dept_add,dept_update,dept_delete
  type: string
  app_id: string
  // 企业标识
  tenant_key: string
  // 部门的Id
  open_department_id: string
}

export interface EventContactScope {
  // 事件类型
  type: string
  app_id: string
  // 企业标识
  tenant_key: string
}

export interface EventRemoveAddBotI18NTitle {
  en_us: string
  zh_cn: string
}

// *app_ticket 事件
// *对于应用商店应用，开放平台会定时发送 app_ticket 事件到请求网址，应用通过该 app_ticket 获取 app_access_token。
export interface EventAppTicket {
  app_id: string
  app_ticket: string
  type: string
}

// *机器人被移出群聊/机器人被邀请进入群聊
// *机器人被邀请进入群聊时/被从群聊中移除时，平台推送 add_bot/remove_bot 通知事件到请求网址。
export interface EventRemoveAddBot {
  app_id: string
  tenant_key: string
  type: string
  chat_name: string
  chat_owner_employee_id: string
  chat_owner_name: string
  chat_owner_open_id: string
  open_chat_id: string
  operator_employee_id: string
  operator_name: string
  operator_open_id: string
  owner_is_bot: boolean
  chat_i18n_names: string
}

export interface EventP2PCreateChatUser {
  open_id: string
  user_id?: string
  name: string
}

// *会话第一次创建的事件
// *机器人和用户的会话第一次创建的时候会发送通知。
export interface EventP2PCreateChat {
  app_id: string
  tenant_key: string
  type: string
  // 机器人和用户的会话id
  chat_id: string
  // 如果是机器人发起的，operator里面是机器人的open_id。如果是用户发起operator里面是用户的open_id和user_id
  operator: EventP2PCreateChatUser
  user: EventP2PCreateChatUser
}

// *用户进出群聊
export interface EventUserInAndOutChat {
  //  ISV 应用没有 “user_id” 字段
  app_id: string

  tenant_key: string
  // 用户进群 add_user_to_chat
  // 用户出群 remove_user_from_chat
  // 撤销加人 revoke_add_user_from_chat
  type: string
  chat_id: string
  // 用户主动退群的话，operator 就是user自己
  operator: BaseUser
  users: BaseUser[]
}
