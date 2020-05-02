"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 消息的类型
// *支持：文本、图片、富文本、分享群聊卡片、卡片消息
var MessageType;
(function (MessageType) {
    // 文本
    MessageType["TEXT"] = "text";
    // 图片
    MessageType["IMAGE"] = "image";
    // 富文本
    MessageType["POST"] = "post";
    // 分享群名片
    MessageType["SHARE_CHAT"] = "share_chat";
    // 卡片消息
    MessageType["CARD"] = "interactive";
    // 转发消息
    MessageType["FORWARD"] = "forward";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var UrgentType;
(function (UrgentType) {
    UrgentType["APP"] = "app";
    UrgentType["SMS"] = "sms";
    UrgentType["PHONE"] = "phone";
})(UrgentType = exports.UrgentType || (exports.UrgentType = {}));
// 国际化消息的类型
// *支持：中文、英文、日文
var I18NType;
(function (I18NType) {
    I18NType["ZH_CN"] = "zh_cn";
    I18NType["JA_JP"] = "ja_jp";
    I18NType["EN_US"] = "en_us";
})(I18NType = exports.I18NType || (exports.I18NType = {}));
// 卡片消息头部的颜色
var ImageColor;
(function (ImageColor) {
    ImageColor["ORANGE"] = "orange";
    ImageColor["RED"] = "red";
    ImageColor["YELLOW"] = "yellow";
    ImageColor["GRAY"] = "gray";
    ImageColor["BLUE"] = "blue";
    ImageColor["GREEN"] = "green";
})(ImageColor = exports.ImageColor || (exports.ImageColor = {}));
// 卡片消息按钮的请求类型
var MethodType;
(function (MethodType) {
    MethodType["GET"] = "get";
    MethodType["POST"] = "post";
    // 跳转链接
    MethodType["JUMP"] = "jump";
})(MethodType = exports.MethodType || (exports.MethodType = {}));
var CalendarRole;
(function (CalendarRole) {
    // 订阅者，可查看日程详情
    CalendarRole["READER"] = "reader";
    //   游客，只能看到"忙碌/空闲"
    CalendarRole["FREE_BUSY_READER"] = "free_busy_reader";
})(CalendarRole = exports.CalendarRole || (exports.CalendarRole = {}));
// 日历的日程的可见性
// * 支持：仅向他人显示是否“忙碌”；公开，显示日程详情；仅自己可见
var CalendarEventVisibility;
(function (CalendarEventVisibility) {
    CalendarEventVisibility["DEFAULT"] = "default";
    CalendarEventVisibility["PUBLIC"] = "public";
    CalendarEventVisibility["PRIVATE"] = "private";
})(CalendarEventVisibility = exports.CalendarEventVisibility || (exports.CalendarEventVisibility = {}));
var ApprovalUploadFileType;
(function (ApprovalUploadFileType) {
    ApprovalUploadFileType["IMAGE"] = "image";
    ApprovalUploadFileType["ATTACHMENT"] = "attachment";
})(ApprovalUploadFileType = exports.ApprovalUploadFileType || (exports.ApprovalUploadFileType = {}));
// ? @doc https://open.feishu.cn/document/uYjL24iN/uUTNz4SN1MjL1UzM
// * 事件类型
var EventType;
(function (EventType) {
    // 验证请求
    EventType["URL_VERIFICATION"] = "url_verification";
    //   租户管理员开通 ISV 应用后，会定时发送 app_ticket 事件到监听地址
    EventType["APP_TICKET"] = "app_ticket";
    // 当企业管理员在管理员后台开通应用时推送事件
    EventType["APP_OPEN"] = "app_open";
    // 当企业管理员在管理员后台启用、停用应用，或应用被平台停用时
    EventType["APP_STATUS_CHANGE"] = "app_status_change";
    // 消息类型，不同类型消息字段有差异
    EventType["MESSAGE"] = "message";
    // 机器人单聊消息已读
    EventType["MESSAGE_READ"] = "message_read";
    // 通讯录变更
    EventType["USER_ADD"] = "user_add";
    EventType["USER_UPDATE"] = "user_update";
    EventType["USER_LEAVE"] = "user_leave";
    EventType["DEPT_ADD"] = "dept_add";
    EventType["DEPT_UPDATE"] = "dept_update";
    EventType["DEPT_DELETE"] = "dept_delete";
    EventType["CONTACT_SCOPE_CHANGE"] = "contact_scope_change";
    // 用户相关状态
    EventType["USER_STATUS_CHANGE"] = "user_status_change";
    // 审批通过
    EventType["APPROVAL"] = "approval";
    // 请假审批
    EventType["LEAVE_APPROVAL"] = "leave_approval";
    // 加班审批
    EventType["WORK_APPROVAL"] = "work_approval";
    // 换班审批
    EventType["SHIFT_APPROVAL"] = "shift_approval";
    // 补卡审批
    EventType["REMEDY_APPROVAL"] = "remedy_approval";
    // 出差审批
    EventType["TRIP_APPROVAL"] = "trip_approval";
    // 移除机器人
    EventType["REMOVE_BOT"] = "remove_bot";
    // 添加机器人
    EventType["ADD_BOT"] = "add_bot";
    // 用户第一次打开这个机器人的会话界面
    EventType["P2P_CHAT_CREATE"] = "p2p_chat_create";
    // 用户进群
    EventType["ADD_USER_TO_CHAT"] = "add_user_to_chat";
    // 用户出群
    EventType["REMOVE_USER_FROM_CHAT"] = "remove_user_from_chat";
    // 撤销加人
    EventType["REVOKE_ADD_USER_FROM_CHAT"] = "revoke_add_user_from_chat";
    // 解散群通知
    EventType["CHAT_DISBAND"] = "chat_disband";
    // 群配置修改事件
    EventType["GROUP_SETTING_UPDATE"] = "group_setting_update";
    // 创建小组件实例事件
    EventType["CREATE_WIDGET_INSTANCE"] = "create_widget_instance";
    // 删除小组件实例事件
    EventType["DELETE_WIDGET_INSTANCE"] = "delete_widget_instance";
    EventType["UNKNOWN"] = "unknown";
})(EventType = exports.EventType || (exports.EventType = {}));
var ApprovalInstanceStatus;
(function (ApprovalInstanceStatus) {
    // 待审核
    ApprovalInstanceStatus[ApprovalInstanceStatus["PENDING"] = 1] = "PENDING";
    // 已通过
    ApprovalInstanceStatus[ApprovalInstanceStatus["APPROVED"] = 2] = "APPROVED";
    // 已拒绝
    ApprovalInstanceStatus[ApprovalInstanceStatus["REJECTED"] = 3] = "REJECTED";
    //   已取消
    ApprovalInstanceStatus[ApprovalInstanceStatus["CANCELED"] = 4] = "CANCELED";
    //   已取消
    ApprovalInstanceStatus[ApprovalInstanceStatus["DELETED"] = 5] = "DELETED";
})(ApprovalInstanceStatus = exports.ApprovalInstanceStatus || (exports.ApprovalInstanceStatus = {}));
var ApprovalInstanceStatusV2;
(function (ApprovalInstanceStatusV2) {
    ApprovalInstanceStatusV2["PENDING"] = "PENDING";
    ApprovalInstanceStatusV2["APPROVED"] = "APPROVED";
    ApprovalInstanceStatusV2["REJECTED"] = "REJECTED";
    ApprovalInstanceStatusV2["CANCELED"] = "CANCELED";
    ApprovalInstanceStatusV2["DELETED"] = "DELETED";
})(ApprovalInstanceStatusV2 = exports.ApprovalInstanceStatusV2 || (exports.ApprovalInstanceStatusV2 = {}));
var ApprovalTaskStatus;
(function (ApprovalTaskStatus) {
    // 待审核
    ApprovalTaskStatus[ApprovalTaskStatus["PENDING"] = 1] = "PENDING";
    // 已通过
    ApprovalTaskStatus[ApprovalTaskStatus["APPROVED"] = 2] = "APPROVED";
    // 已拒绝
    ApprovalTaskStatus[ApprovalTaskStatus["REJECTED"] = 3] = "REJECTED";
    // 已转交
    ApprovalTaskStatus[ApprovalTaskStatus["TRANSFERED"] = 4] = "TRANSFERED";
    // 已取消
    ApprovalTaskStatus[ApprovalTaskStatus["CANCELED"] = 5] = "CANCELED";
})(ApprovalTaskStatus = exports.ApprovalTaskStatus || (exports.ApprovalTaskStatus = {}));
var ApprovalTaskStatusV2;
(function (ApprovalTaskStatusV2) {
    ApprovalTaskStatusV2["PENDING"] = "PENDING";
    ApprovalTaskStatusV2["APPROVED"] = "APPROVED";
    ApprovalTaskStatusV2["REJECTED"] = "REJECTED";
    ApprovalTaskStatusV2["TRANSFERED"] = "TRANSFERRED";
    ApprovalTaskStatusV2["CANCELED"] = "DONE";
})(ApprovalTaskStatusV2 = exports.ApprovalTaskStatusV2 || (exports.ApprovalTaskStatusV2 = {}));
var ApprovalTaskTypeStatus;
(function (ApprovalTaskTypeStatus) {
    // 一名负责人通过即可通过审批节点
    ApprovalTaskTypeStatus[ApprovalTaskTypeStatus["OR_SIGN"] = 1] = "OR_SIGN";
    // 需所有负责人通过才能通过审批节点
    ApprovalTaskTypeStatus[ApprovalTaskTypeStatus["AND_SIGN"] = 2] = "AND_SIGN";
})(ApprovalTaskTypeStatus = exports.ApprovalTaskTypeStatus || (exports.ApprovalTaskTypeStatus = {}));
var ApprovalTaskTypeStatusV2;
(function (ApprovalTaskTypeStatusV2) {
    // 一名负责人通过即可通过审批节点
    ApprovalTaskTypeStatusV2["OR_SIGN"] = "OR";
    // 需所有负责人通过才能通过审批节点
    ApprovalTaskTypeStatusV2["AND_SIGN"] = "AND";
    // 自动通过
    ApprovalTaskTypeStatusV2["AUTO_PASS"] = "AUTO_PASS";
    // 自动拒绝
    ApprovalTaskTypeStatusV2["AUTO_REJECT"] = "AUTO_REJECT";
    // 按照顺序
    ApprovalTaskTypeStatusV2["SEQUENTIAL"] = "SEQUENTIAL";
})(ApprovalTaskTypeStatusV2 = exports.ApprovalTaskTypeStatusV2 || (exports.ApprovalTaskTypeStatusV2 = {}));
