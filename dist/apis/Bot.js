"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Constants_1 = require("../Constants");
const headers_1 = require("../utils/headers");
async function getBotInfo({ tenantAccessToken, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${tenantAccessToken}`
            }
        });
    }
    const { data } = await $instance.get(Constants_1.GET_BOT_INFO);
    return data;
}
exports.getBotInfo = getBotInfo;
async function addBotToChat({ chatId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ADD_BOT_TO_CHAT, {
        chat_id: chatId
    });
    return data;
}
exports.addBotToChat = addBotToChat;
async function removeBotFromChat({ chatId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.REMOVE_BOT_FROM_CHAT, {
        chat_id: chatId
    });
    return data;
}
exports.removeBotFromChat = removeBotFromChat;
