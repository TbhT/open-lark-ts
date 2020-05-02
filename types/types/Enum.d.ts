export declare enum MessageType {
    TEXT = "text",
    IMAGE = "image",
    POST = "post",
    SHARE_CHAT = "share_chat",
    CARD = "interactive",
    FORWARD = "forward"
}
export declare enum UrgentType {
    APP = "app",
    SMS = "sms",
    PHONE = "phone"
}
export declare enum I18NType {
    ZH_CN = "zh_cn",
    JA_JP = "ja_jp",
    EN_US = "en_us"
}
export declare enum ImageColor {
    ORANGE = "orange",
    RED = "red",
    YELLOW = "yellow",
    GRAY = "gray",
    BLUE = "blue",
    GREEN = "green"
}
export declare enum MethodType {
    GET = "get",
    POST = "post",
    JUMP = "jump"
}
export declare enum CalendarRole {
    READER = "reader",
    FREE_BUSY_READER = "free_busy_reader"
}
export declare enum CalendarEventVisibility {
    DEFAULT = "default",
    PUBLIC = "public",
    PRIVATE = "private"
}
export declare enum ApprovalUploadFileType {
    IMAGE = "image",
    ATTACHMENT = "attachment"
}
export declare enum EventType {
    URL_VERIFICATION = "url_verification",
    APP_TICKET = "app_ticket",
    APP_OPEN = "app_open",
    APP_STATUS_CHANGE = "app_status_change",
    MESSAGE = "message",
    MESSAGE_READ = "message_read",
    USER_ADD = "user_add",
    USER_UPDATE = "user_update",
    USER_LEAVE = "user_leave",
    DEPT_ADD = "dept_add",
    DEPT_UPDATE = "dept_update",
    DEPT_DELETE = "dept_delete",
    CONTACT_SCOPE_CHANGE = "contact_scope_change",
    USER_STATUS_CHANGE = "user_status_change",
    APPROVAL = "approval",
    LEAVE_APPROVAL = "leave_approval",
    WORK_APPROVAL = "work_approval",
    SHIFT_APPROVAL = "shift_approval",
    REMEDY_APPROVAL = "remedy_approval",
    TRIP_APPROVAL = "trip_approval",
    REMOVE_BOT = "remove_bot",
    ADD_BOT = "add_bot",
    P2P_CHAT_CREATE = "p2p_chat_create",
    ADD_USER_TO_CHAT = "add_user_to_chat",
    REMOVE_USER_FROM_CHAT = "remove_user_from_chat",
    REVOKE_ADD_USER_FROM_CHAT = "revoke_add_user_from_chat",
    CHAT_DISBAND = "chat_disband",
    GROUP_SETTING_UPDATE = "group_setting_update",
    CREATE_WIDGET_INSTANCE = "create_widget_instance",
    DELETE_WIDGET_INSTANCE = "delete_widget_instance",
    UNKNOWN = "unknown"
}
export declare enum ApprovalInstanceStatus {
    PENDING = 1,
    APPROVED = 2,
    REJECTED = 3,
    CANCELED = 4,
    DELETED = 5
}
export declare enum ApprovalInstanceStatusV2 {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    CANCELED = "CANCELED",
    DELETED = "DELETED"
}
export declare enum ApprovalTaskStatus {
    PENDING = 1,
    APPROVED = 2,
    REJECTED = 3,
    TRANSFERED = 4,
    CANCELED = 5
}
export declare enum ApprovalTaskStatusV2 {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    TRANSFERED = "TRANSFERRED",
    CANCELED = "DONE"
}
export declare enum ApprovalTaskTypeStatus {
    OR_SIGN = 1,
    AND_SIGN = 2
}
export declare enum ApprovalTaskTypeStatusV2 {
    OR_SIGN = "OR",
    AND_SIGN = "AND",
    AUTO_PASS = "AUTO_PASS",
    AUTO_REJECT = "AUTO_REJECT",
    SEQUENTIAL = "SEQUENTIAL"
}
