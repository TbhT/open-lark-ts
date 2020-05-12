import * as $Api from './apis/Message';
export { Bot } from './Bot';
export { Botable } from './Botable';
export { Sayable } from './Sayable';
export { Cache } from './Cache';
export declare const Api: {
    sendMessageBatch({ departmentIds, openIds, userIds, msgType, content, instance, tenantAccessToken }: {
        departmentIds?: string[] | undefined;
        openIds?: string[] | undefined;
        userIds?: string[] | undefined;
        msgType: string;
        content: string;
        instance?: import("axios").AxiosInstance | undefined;
        tenantAccessToken: string;
    }): Promise<import("./types/Response").SendMessageBatchResponse>;
    sendMessage({ openId, userId, email, chatId, rootId, content, instance, tenantAccessToken }: $Api.MessageParamCommon & {
        content: string;
    }): Promise<import("./types/Response").SendMessageResponse>;
    forwardRichTextMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, content, title, instance }: $Api.MessageParamCommon & {
        content: string;
        title: string;
    }): Promise<import("./types/Response").SendMessageResponse>;
    sendImageMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, imageKey, instance }: $Api.MessageParamCommon & {
        imageKey: string;
    }): Promise<import("./types/Response").SendMessageResponse>;
    sendRichTextMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, post, instance }: $Api.MessageParamCommon & {
        post: $Api.RichTextMessage;
    }): Promise<import("./types/Response").SendMessageResponse>;
    shareChatCard({ tenantAccessToken, openId, userId, email, chatId, rootId, instance, shareChatId }: $Api.MessageParamCommon & {
        shareChatId: string;
    }): Promise<import("./types/Response").SendMessageResponse>;
    recallMessage({ messageId, tenantAccessToken, instance }: {
        messageId: string;
        tenantAccessToken: string;
        instance?: import("axios").AxiosInstance | undefined;
    }): Promise<import("./types/Response").CommonResponse>;
    readMessage({ messageId, tenantAccessToken, instance }: {
        messageId: string;
        tenantAccessToken: string;
        instance?: import("axios").AxiosInstance | undefined;
    }): Promise<import("./types/Response").ReadMessageResponse>;
    urgentMessage({ messageId, urgentType, openIds, tenantAccessToken, instance }: {
        messageId: string;
        urgentType: import("./types/Enum").UrgentType;
        openIds: string[];
        tenantAccessToken: string;
        instance?: import("axios").AxiosInstance | undefined;
    }): Promise<import("./types/Response").UrgentMessageResponse>;
    sendCardMessage({ tenantAccessToken, instance, openId, userId, email, chatId, rootId, updateMulti, card }: {
        tenantAccessToken: string;
        instance?: import("axios").AxiosInstance | undefined;
        openId?: string | undefined;
        userId?: string | undefined;
        email?: string | undefined;
        chatId?: string | undefined;
        rootId?: string | undefined;
        updateMulti?: boolean | undefined;
        card: import("./types/CardMessage").CardMessage;
    }): Promise<import("./types/Response").SendMessageResponse>;
};
