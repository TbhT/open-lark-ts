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
  trip_start_time: string
  trip_end_time: string
  trip_interval: number
  departure: string
  destination: string
  transportation: string
  trip_type: string
  remark: string
}

export interface EventTripApproval {
  app_id: string
  tenant_key: string
  type: string
  instance_code: string
  employee_id: string
  start_time: number
  end_time: number
  trip_interval: number
  trip_reason: string
  trip_peers: string[]
  schedules: EventTripApprovalSchedule[]
}

export interface EventAppOpenUser {
  open_id: string
  user_id: string
}

export interface EventAppOpen {
  app_id: string
  tenant_key: string
  type: string
  applicants: EventAppOpenUser[]
  installer: EventAppOpenUser
}

export interface EventContactUser {
  type: string
  app_id: string
  tenant_key: string
  open_id: string
  employee_id: string
}

export interface EventContactDepartment {
  type: string
  app_id: string
  tenant_key: string
  open_department_id: string
}

export interface EventContactScope {
  type: string
  app_id: string
  tenant_key: string
}

export interface EventRemoveAddBotI18NTitle {
  en_us: string
  zh_cn: string
}

export interface EventAppTicket {
  app_id: string
  app_ticket: string
  type: string
}

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

export interface EventP2PCreateChat {
  app_id: string
  tenant_key: string
  type: string
  chat_id: string
  operator: EventP2PCreateChatUser
  user: EventP2PCreateChatUser
}

export interface EventUserInAndOutChat {
  app_id: string
  tenant_key: string
  type: string
  chat_id: string
  operator: BaseUser
  users: BaseUser[]
}
