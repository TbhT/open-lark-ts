import { AxiosInstance } from 'axios';
import { SendMessageBatchResponse, SendMessageResponse, CommonResponse, ReadMessageResponse, UrgentMessageResponse } from '../types/Response';
import { UrgentType } from '../types/Enum';
import { CardMessage, CardContentElements } from '../types/CardMessage';
export interface MessageParamCommon {
    tenantAccessToken: string;
    openId?: string;
    userId?: string;
    email?: string;
    chatId?: string;
    rootId?: string;
    instance?: AxiosInstance;
}
/**
 * 给多个用户或者多个部门发送消息。
 * @param param0
 */
export declare function sendMessageBatch({ departmentIds, openIds, userIds, msgType, content, instance, tenantAccessToken }: {
    departmentIds?: string[];
    openIds?: string[];
    userIds?: string[];
    msgType: string;
    content: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<SendMessageBatchResponse>;
/**
 * 给指定用户或者会话发送文本消息，其中会话包括私聊会话和群会话。
 * @param param0
 */
export declare function sendMessage({ openId, userId, email, chatId, rootId, content, instance, tenantAccessToken }: MessageParamCommon & {
    content: string;
}): Promise<SendMessageResponse>;
/**
 * 用于转发 订阅事件 - 接收富文本消息 中的内容
 */
export declare function forwardRichTextMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, content, title, instance }: MessageParamCommon & {
    content: string;
    title: string;
}): Promise<SendMessageResponse>;
/**
 * 给指定用户或者会话发送图片消息，其中会话包括私聊会话和群会话。
 */
export declare function sendImageMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, imageKey, instance }: MessageParamCommon & {
    imageKey: string;
}): Promise<SendMessageResponse>;
interface TextTag {
    tag: 'text';
    text: string;
    un_escape?: boolean;
    lines?: number;
}
interface ATag {
    tag: 'a';
    text: string;
    un_escape?: boolean;
    href: string;
}
interface AtTag {
    tag: 'at';
    user_id: string;
}
interface ImgTag {
    tag: 'img';
    image_key: string;
    height: number;
    width: number;
}
interface RichTextMessageInner {
    title: string;
    content: (ATag | AtTag | TextTag | ImgTag)[][];
}
export interface RichTextMessage {
    zh_cn?: RichTextMessageInner;
    ja_jp?: RichTextMessageInner;
    en_us?: RichTextMessageInner;
}
/**
 * 给指定用户或者会话发送富文本消息，其中会话包括私聊会话和群会话。
 */
export declare function sendRichTextMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, post, instance }: MessageParamCommon & {
    post: RichTextMessage;
}): Promise<SendMessageResponse>;
/**
 * 给指定用户或者会话发送群名片，其中会话包括私聊会话和群会话。
 */
export declare function shareChatCard({ tenantAccessToken, openId, userId, email, chatId, rootId, instance, shareChatId }: MessageParamCommon & {
    shareChatId: string;
}): Promise<SendMessageResponse>;
/**
 * 撤回指定消息。仅能撤回机器人消息
 */
export declare function recallMessage({ messageId, tenantAccessToken, instance }: {
    messageId: string;
    tenantAccessToken: string;
    instance?: AxiosInstance;
}): Promise<CommonResponse>;
/**
 * 查询消息已读信息,仅能查看机器人自己发的消息
 */
export declare function readMessage({ messageId, tenantAccessToken, instance }: {
    messageId: string;
    tenantAccessToken: string;
    instance?: AxiosInstance;
}): Promise<ReadMessageResponse>;
/**
 * 对指定消息进行加急。
 */
export declare function urgentMessage({ messageId, urgentType, openIds, tenantAccessToken, instance }: {
    messageId: string;
    urgentType: UrgentType;
    openIds: string[];
    tenantAccessToken: string;
    instance?: AxiosInstance;
}): Promise<UrgentMessageResponse>;
/**
 * 发送消息卡片
 */
export declare function sendCardMessage({ tenantAccessToken, instance, openId, userId, email, chatId, rootId, updateMulti, card }: {
    tenantAccessToken: string;
    instance?: AxiosInstance;
    openId?: string;
    userId?: string;
    email?: string;
    chatId?: string;
    rootId?: string;
    updateMulti?: boolean;
    card: CardMessage;
}): Promise<SendMessageResponse>;
/**
 * 刷新卡片
 */
export declare function refreshCardMessage({ tenantAccessToken, instance, openIds, token, cardContent }: {
    tenantAccessToken: string;
    instance?: AxiosInstance;
    openIds: string[];
    token: string;
    cardContent: CardContentElements;
}): Promise<any>;
export {};
