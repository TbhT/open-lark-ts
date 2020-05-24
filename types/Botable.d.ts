/// <reference types="node" />
import { EventEmitter } from 'events';
import { AxiosInstance } from 'axios';
import { EventAppOpen, EventMessage, EventRemoveAddBot, EventP2PCreateChat, EventUserInAndOutChat } from './types/CallbackEvent';
import { TextMessageParams, ImageMessageParams, RichTextMessageParams, ShareChatCardParams, CardMessageParams, Sayable } from './Sayable';
import { UrgentType, EventType } from './types/Enum';
import { SendMessageResponse, CommonResponse, ReadMessageResponse, UrgentMessageResponse } from './types/Response';
export declare type EventTypeSupported = EventType.APP_OPEN | EventType.MESSAGE | EventType.REMOVE_BOT | EventType.ADD_BOT | EventType.P2P_CHAT_CREATE | EventType.ADD_USER_TO_CHAT | EventType.REMOVE_USER_FROM_CHAT | EventType.REVOKE_ADD_USER_FROM_CHAT;
export declare abstract class Botable extends EventEmitter implements Sayable {
    tenantAccessToken: string | undefined;
    instance: AxiosInstance | undefined;
    protected readonly appId: string;
    protected readonly appSecret: string;
    protected initFlag: boolean;
    constructor({ appId, appSecret }: {
        appId: string;
        appSecret: string;
    });
    abstract init(): Promise<unknown>;
    protected beforeSay(): void;
    sayTextMessage(params: TextMessageParams): Promise<SendMessageResponse>;
    sayImageMessage(params: ImageMessageParams): Promise<SendMessageResponse>;
    sayRichTextMessage(params: RichTextMessageParams): Promise<SendMessageResponse>;
    sayChatCard(params: ShareChatCardParams): Promise<SendMessageResponse>;
    recallMessage(params: {
        messageId: string;
    }): Promise<CommonResponse>;
    readMessage(params: {
        messageId: string;
    }): Promise<ReadMessageResponse>;
    sayUrgentMessage(params: {
        messageId: string;
        urgentType: UrgentType;
        openIds: string[];
    }): Promise<UrgentMessageResponse>;
    sayCardMessage(params: CardMessageParams): Promise<SendMessageResponse>;
    /**
     * 回调事件
     * @param event
     * @param fn
     */
    on(event: EventType.APP_OPEN, fn: (data: EventAppOpen) => void): this;
    on(event: EventType.MESSAGE, fn: (data: EventMessage) => void): this;
    on(event: EventType.REMOVE_BOT | EventType.ADD_BOT, fn: (data: EventRemoveAddBot) => void): this;
    on(event: EventType.P2P_CHAT_CREATE, fn: (data: EventP2PCreateChat) => void): this;
    on(event: EventType.ADD_USER_TO_CHAT | EventType.REMOVE_USER_FROM_CHAT | EventType.REVOKE_ADD_USER_FROM_CHAT, fn: (data: EventUserInAndOutChat) => void): this;
}
