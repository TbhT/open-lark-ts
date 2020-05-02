import { AxiosInstance } from 'axios';
import { CreateChatResponse, ChatListResponse, ChatInfoResponse, UpdateChatResponse, ModifyUserToChatResponse, CommonResponse } from '../types/Response';
declare type createChatParams = {
    name?: string;
    description?: string;
    i18nNames?: {
        [key: string]: string;
    };
    onlyOwnerAdd?: boolean;
    shareAllowed?: boolean;
    onlyOwnerAtAll?: boolean;
    onlyOwnerEdit?: boolean;
    instance?: AxiosInstance;
    tenantAccessToken: string;
    userIds?: string[];
    openIds?: string[];
};
export declare function createChat(params: createChatParams): Promise<CreateChatResponse>;
export declare function getChatList({ pageSize, pageToken, instance, tenantAccessToken }: {
    pageSize?: number;
    pageToken?: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<ChatListResponse>;
export declare function getChatInfo({ chatId, instance, tenantAccessToken }: {
    chatId: string;
    tenantAccessToken: string;
    instance?: AxiosInstance;
}): Promise<ChatInfoResponse>;
export declare function updateChatInfo(params: {
    chatId: string;
    ownerOpenId?: string;
    ownerUserId?: string;
    name?: string;
    i18nNames?: {
        [key: string]: string;
    };
    onlyOwnerAdd?: boolean;
    shareAllowed?: boolean;
    onlyOwnerAtAll?: boolean;
    onlyOwnerEdit?: boolean;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<UpdateChatResponse>;
declare type ModifyUserInChat = {
    chatId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
    userIds?: string[];
    openIds?: string[];
};
export declare function addUserToChat({ chatId, instance, tenantAccessToken, openIds, userIds }: ModifyUserInChat): Promise<ModifyUserToChatResponse>;
export declare function removeUserFromChat({ chatId, instance, tenantAccessToken, openIds, userIds }: ModifyUserInChat): Promise<ModifyUserToChatResponse>;
export declare function discardChat({ chatId, instance, tenantAccessToken }: {
    chatId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<CommonResponse>;
export {};
