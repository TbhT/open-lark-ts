import { AxiosInstance } from 'axios';
import { UserChatIdResponse, UserIdResponse, BasicUserInfoResponse } from '../types/Response';
/**
 * 获取用户和机器人的 ChatID
 * @param param0
 */
export declare function getUserChatId({ tenantAccessToken, instance, userId, openId }: {
    tenantAccessToken: string;
    instance?: AxiosInstance;
    userId?: string;
    openId?: string;
}): Promise<UserChatIdResponse>;
/**
 * 根据用户邮箱获取用户 open_id 和 user_id。
 * @param param0
 */
export declare function getUserId({ tenantAccessToken, instance, email }: {
    tenantAccessToken: string;
    instance?: AxiosInstance;
    email: string;
}): Promise<UserIdResponse>;
/**
 * 获取用户基础信息
 * @param param0
 */
export declare function getBasicUserInfo({ tenantAccessToken, openId, userId, instance }: {
    tenantAccessToken: string;
    openId?: string;
    userId?: string;
    instance?: AxiosInstance;
}): Promise<BasicUserInfoResponse>;
