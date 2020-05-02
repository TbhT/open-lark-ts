"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const headers_1 = require("../utils/headers");
const Constants_1 = require("../Constants");
/**
 * 给多个用户或者多个部门发送消息。
 * @param param0
 */
async function sendMessageBatch({ departmentIds, openIds, userIds, msgType, content, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.SEND_MESSAGE_BATCH, {
        department_ids: departmentIds,
        open_ids: openIds,
        user_ids: userIds,
        msg_type: msgType,
        content: {
            text: content
        }
    });
    return data;
}
exports.sendMessageBatch = sendMessageBatch;
/**
 * 给指定用户或者会话发送文本消息，其中会话包括私聊会话和群会话。
 * @param param0
 */
async function sendMessage({ openId, userId, email, chatId, rootId, content, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.SEND_MESSAGE, {
        open_id: openId,
        user_id: userId,
        email,
        chat_id: chatId,
        root_id: rootId,
        content: {
            text: content
        },
        msg_type: 'text'
    });
    return data;
}
exports.sendMessage = sendMessage;
/**
 * 用于转发 订阅事件 - 接收富文本消息 中的内容
 */
async function forwardRichTextMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, content, title, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.SEND_MESSAGE, {
        open_id: openId,
        user_id: userId,
        root_id: rootId,
        chat_id: chatId,
        email,
        msg_type: 'forward',
        content: {
            title,
            text: content
        }
    });
    return data;
}
exports.forwardRichTextMessage = forwardRichTextMessage;
/**
 * 给指定用户或者会话发送图片消息，其中会话包括私聊会话和群会话。
 */
async function sendImageMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, imageKey, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.SEND_MESSAGE, {
        open_id: openId,
        user_id: userId,
        root_id: rootId,
        chat_id: chatId,
        email,
        msg_type: 'image',
        content: {
            image_key: imageKey
        }
    });
    return data;
}
exports.sendImageMessage = sendImageMessage;
/**
 * 给指定用户或者会话发送富文本消息，其中会话包括私聊会话和群会话。
 */
async function sendRichTextMessage({ tenantAccessToken, openId, userId, email, chatId, rootId, post, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.SEND_MESSAGE, {
        open_id: openId,
        user_id: userId,
        root_id: rootId,
        chat_id: chatId,
        email,
        msg_type: 'post',
        content: {
            post
        }
    });
    return data;
}
exports.sendRichTextMessage = sendRichTextMessage;
/**
 * 给指定用户或者会话发送群名片，其中会话包括私聊会话和群会话。
 */
async function shareChatCard({ tenantAccessToken, openId, userId, email, chatId, rootId, instance, shareChatId }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.SEND_MESSAGE, {
        open_id: openId,
        user_id: userId,
        root_id: rootId,
        chat_id: chatId,
        email,
        msg_type: 'share_chat',
        content: {
            share_chat_id: shareChatId
        }
    });
    return data;
}
exports.shareChatCard = shareChatCard;
/**
 * 撤回指定消息。仅能撤回机器人消息
 */
async function recallMessage({ messageId, tenantAccessToken, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.RECALL_MESSAGE, {
        message_id: messageId
    });
    return data;
}
exports.recallMessage = recallMessage;
/**
 * 查询消息已读信息,仅能查看机器人自己发的消息
 */
async function readMessage({ messageId, tenantAccessToken, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.READ_MESSAGE, {
        message_id: messageId
    });
    return data;
}
exports.readMessage = readMessage;
/**
 * 对指定消息进行加急。
 */
async function urgentMessage({ messageId, urgentType, openIds, tenantAccessToken, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.URGENT_MESSAGE, {
        message_id: messageId,
        urgent_type: urgentType,
        open_ids: openIds
    });
    return data;
}
exports.urgentMessage = urgentMessage;
/**
 * 发送消息卡片
 */
async function sendCardMessage({ tenantAccessToken, instance, openId, userId, email, chatId, rootId, updateMulti = false, card }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.default(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.SEND_MESSAGE, {
        open_id: openId,
        user_id: userId,
        email,
        chat_id: chatId,
        msg_type: 'interactive',
        root_id: rootId,
        update_multi: updateMulti,
        card
    });
    return data;
}
exports.sendCardMessage = sendCardMessage;
