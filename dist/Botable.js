"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const Enum_1 = require("./types/Enum");
const Message_1 = require("./apis/Message");
class Botable extends events_1.EventEmitter {
    constructor({ appId, appSecret }) {
        super();
        this.initFlag = false;
        this.appId = appId;
        this.appSecret = appSecret;
    }
    checkParamsBefore() {
        if (!this.initFlag) {
            throw new Error('Bot init failed, please re-init');
        }
    }
    async sayTextMessage(params) {
        this.checkParamsBefore();
        return await Message_1.sendMessage(Object.assign(Object.assign({}, params), { tenantAccessToken: this.tenantAccessToken, instance: this.instance }));
    }
    async sayImageMessage(params) {
        this.checkParamsBefore();
        return await Message_1.sendImageMessage(Object.assign(Object.assign({}, params), { tenantAccessToken: this.tenantAccessToken, instance: this.instance }));
    }
    async sayRichTextMessage(params) {
        this.checkParamsBefore();
        return await Message_1.sendRichTextMessage(Object.assign(Object.assign({}, params), { tenantAccessToken: this.tenantAccessToken, instance: this.instance }));
    }
    async sayChatCard(params) {
        this.checkParamsBefore();
        return await Message_1.shareChatCard(Object.assign(Object.assign({}, params), { tenantAccessToken: this.tenantAccessToken, instance: this.instance }));
    }
    async recallMessage(params) {
        this.checkParamsBefore();
        return await Message_1.recallMessage(Object.assign(Object.assign({}, params), { tenantAccessToken: this.tenantAccessToken, instance: this.instance }));
    }
    async readMessage(params) {
        this.checkParamsBefore();
        return await Message_1.readMessage(Object.assign(Object.assign({}, params), { tenantAccessToken: this.tenantAccessToken, instance: this.instance }));
    }
    async sayUrgentMessage(params) {
        this.checkParamsBefore();
        return await Message_1.urgentMessage(Object.assign(Object.assign({}, params), { tenantAccessToken: this.tenantAccessToken, instance: this.instance }));
    }
    async sayCardMessage(params) {
        this.checkParamsBefore();
        return await Message_1.sendCardMessage(Object.assign(Object.assign({}, params), { tenantAccessToken: this.tenantAccessToken, instance: this.instance }));
    }
    on(event, fn) {
        switch (event) {
            case Enum_1.EventType.APP_OPEN:
                this.addListener(event, fn);
                break;
            case Enum_1.EventType.MESSAGE:
                this.addListener(event, fn);
                break;
            case Enum_1.EventType.REMOVE_BOT:
            case Enum_1.EventType.ADD_BOT:
                this.addListener(event, fn);
                break;
            case Enum_1.EventType.P2P_CHAT_CREATE:
                this.addListener(event, fn);
                break;
            case Enum_1.EventType.ADD_USER_TO_CHAT:
            case Enum_1.EventType.REMOVE_USER_FROM_CHAT:
            case Enum_1.EventType.REVOKE_ADD_USER_FROM_CHAT:
                this.addListener(event, fn);
                break;
            default:
                throw Error(`event : ${event} is not supported now`);
        }
        return this;
    }
}
exports.default = Botable;
