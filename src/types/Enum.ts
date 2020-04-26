// 消息的类型
// *支持：文本、图片、富文本、分享群聊卡片、卡片消息
export enum MessageType {
  // 文本
  TEXT = 'text',
  // 图片
  IMAGE = 'image',
  // 富文本
  POST = 'post',
  // 分享群名片
  SHARE_CHAT = 'share_chat',
  // 卡片消息
  CARD = 'interactive',
  // 转发消息
  FORWARD = 'forward'
}

// 消息加急类型
// *支持：飞书内部、短信、电话
export enum UrgentType {
  APP = 'app',
  SMS = 'sms',
  PHONE = 'phone'
}

// 国际化消息的类型
// *支持：中文、英文、日文
export enum I18NType {
  ZH_CN = 'zh_cn',
  JA_JP = 'ja_jp',
  EN_US = 'en_us'
}

// 卡片消息头部的颜色
export enum ImageColor {
  ORANGE = 'orange',
  RED = 'red',
  YELLOW = 'yellow',
  GRAY = 'gray',
  BLUE = 'blue',
  GREEN = 'green'
}

// 卡片消息按钮的请求类型
export enum MethodType {
  GET = 'get',
  POST = 'post',
  // 跳转链接
  JUMP = 'jump'
}

export enum CalendarRole {
  // 订阅者，可查看日程详情
  READER = 'reader',
  //   游客，只能看到"忙碌/空闲"
  FREE_BUSY_READER = 'free_busy_reader'
}

// 日历的日程的可见性
// * 支持：仅向他人显示是否“忙碌”；公开，显示日程详情；仅自己可见
export enum CalendarEventVisibility {
  DEFAULT = 'default',
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export enum ApprovalUploadFileType {
  IMAGE = 'image',
  ATTACHMENT = 'attachment'
}

// ? @doc https://open.feishu.cn/document/uYjL24iN/uUTNz4SN1MjL1UzM
// * 事件类型
export enum EventType {
  // 验证请求
  URL_VERIFICATION = 'url_verification',
  //   租户管理员开通 ISV 应用后，会定时发送 app_ticket 事件到监听地址
  APP_TICKET = 'app_ticket',
  // 当企业管理员在管理员后台开通应用时推送事件
  APP_OPEN = 'app_open',
  // 当企业管理员在管理员后台启用、停用应用，或应用被平台停用时
  APP_STATUS_CHANGE = 'app_status_change',
  // 消息类型，不同类型消息字段有差异
  MESSAGE = 'message',
  // 机器人单聊消息已读
  MESSAGE_READ = 'message_read',
  // 通讯录变更
  USER_ADD = 'user_add',
  USER_UPDATE = 'user_update',
  USER_LEAVE = 'user_leave',
  DEPT_ADD = 'dept_add',
  DEPT_UPDATE = 'dept_update',
  DEPT_DELETE = 'dept_delete',
  CONTACT_SCOPE_CHANGE = 'contact_scope_change',
  // 用户相关状态
  USER_STATUS_CHANGE = 'user_status_change',
  // 审批通过
  APPROVAL = 'approval',
  // 请假审批
  LEAVE_APPROVAL = 'leave_approval',
  // 加班审批
  WORK_APPROVAL = 'work_approval',
  // 换班审批
  SHIFT_APPROVAL = 'shift_approval',
  // 补卡审批
  REMEDY_APPROVAL = 'remedy_approval',
  // 出差审批
  TRIP_APPROVAL = 'trip_approval',
  // 移除机器人
  REMOVE_BOT = 'remove_bot',
  // 添加机器人
  ADD_BOT = 'add_bot',
  // 用户第一次打开这个机器人的会话界面
  P2P_CHAT_CREATE = 'p2p_chat_create',
  // 用户进群
  ADD_USER_TO_CHAT = 'add_user_to_chat',
  // 用户出群
  REMOVE_USER_FROM_CHAT = 'remove_user_from_chat',
  // 撤销加人
  REVOKE_ADD_USER_FROM_CHAT = 'revoke_add_user_from_chat',
  // 解散群通知
  CHAT_DISBAND = 'chat_disband',
  // 群配置修改事件
  GROUP_SETTING_UPDATE = 'group_setting_update',
  // 创建小组件实例事件
  CREATE_WIDGET_INSTANCE = 'create_widget_instance',
  // 删除小组件实例事件
  DELETE_WIDGET_INSTANCE = 'delete_widget_instance',
  UNKNOWN = 'unknown'
}

export enum ApprovalInstanceStatus {
  // 待审核
  PENDING = 1,
  // 已通过
  APPROVED,
  // 已拒绝
  REJECTED,
  //   已取消
  CANCELED,
  //   已取消
  DELETED
}

export enum ApprovalInstanceStatusV2 {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELED = 'CANCELED',
  DELETED = 'DELETED'
}

export enum ApprovalTaskStatus {
  // 待审核
  PENDING = 1,
  // 已通过
  APPROVED,
  // 已拒绝
  REJECTED,
  // 已转交
  TRANSFERED,
  // 已取消
  CANCELED
}

export enum ApprovalTaskStatusV2 {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  TRANSFERED = 'TRANSFERRED',
  CANCELED = 'DONE'
}

export enum ApprovalTaskTypeStatus {
  // 一名负责人通过即可通过审批节点
  OR_SIGN = 1,
  // 需所有负责人通过才能通过审批节点
  AND_SIGN
}

export enum ApprovalTaskTypeStatusV2 {
  // 一名负责人通过即可通过审批节点
  OR_SIGN = 'OR',
  // 需所有负责人通过才能通过审批节点
  AND_SIGN = 'AND',
  // 自动通过
  AUTO_PASS = 'AUTO_PASS',
  // 自动拒绝
  AUTO_REJECT = 'AUTO_REJECT',
  // 按照顺序
  SEQUENTIAL = 'SEQUENTIAL'
}
