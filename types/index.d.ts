import * as MessageApi from './apis/Message';
import * as $Botable from './Botable';
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
    sendMessage({ openId, userId, email, chatId, rootId, content, instance, tenantAccessToken }: MessageApi.MessageParamCommon & {
        content: string;
    }): Promise<import("./types/Response").SendMessageResponse>;
    forwardRichTextMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, content, title, instance }: MessageApi.MessageParamCommon & {
        content: string;
        title: string;
    }): Promise<import("./types/Response").SendMessageResponse>;
    sendImageMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, imageKey, instance }: MessageApi.MessageParamCommon & {
        imageKey: string;
    }): Promise<import("./types/Response").SendMessageResponse>;
    sendRichTextMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, post, instance }: MessageApi.MessageParamCommon & {
        post: MessageApi.RichTextMessage;
    }): Promise<import("./types/Response").SendMessageResponse>;
    shareChatCard({ tenantAccessToken, openId, userId, email, chatId, rootId, instance, shareChatId }: MessageApi.MessageParamCommon & {
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
export declare const Bot: {
    default: typeof $Botable.default;
};
