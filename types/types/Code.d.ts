export declare enum I18NTitle {
    en_us = "en_us",
    zh_cn = "zh_cn",
    ja_jp = "ja_jp"
}
export interface BaseUser {
    name: string;
    open_id: string;
    user_id: string;
}
export interface User extends BaseUser {
    avatar: string;
    email?: string;
    employee_id: string;
    status: number;
}
export interface UserInfo {
    name: string;
    avatar_url: string;
    email?: string;
    user_id: string;
    mobile: string;
}
export interface BotInfo {
    activate_status: number;
    app_name: string;
    avatar_url: string;
    ip_white_list: string[];
    open_id: string;
}
export interface Chat {
    avatar: string;
    description: string;
    open_chat_id?: string;
    chat_id: string;
    i18n_names: I18NTitle;
    members: User[];
    name: string;
    type: string;
    owner_user_id: string;
    owner_open_id: string;
}
export interface MinaCodeToSessionResp {
    open_id: string;
    union_id: string;
    session_key: string;
    tenant_key: string;
    employee_id?: string;
    token_type: string;
    access_token: string;
    expires_in: number;
    refresh_token: number;
}
export interface UserAccessTokenData {
    access_token: string;
    avatar_url: string;
    expires_in: number;
    name: string;
    en_name: string;
    open_id: string;
    tenant_key: string;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
}
