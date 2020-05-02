"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Constants_1 = require("../Constants");
const headers_1 = require("../utils/headers");
async function createChat(params) {
    let $instance = params.instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.Headers(params.tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.CREATE_CHAT, {
        name: params.name || '',
        description: params.description || '',
        i18n_names: params.i18nNames,
        only_owner_add: params.onlyOwnerAdd === undefined ? false : params.onlyOwnerAdd,
        share_allowed: params.shareAllowed === undefined ? true : params.shareAllowed,
        only_owner_at_all: params.onlyOwnerAtAll === undefined ? false : params.onlyOwnerAtAll,
        only_owner_edit: params.onlyOwnerEdit === undefined ? false : params.onlyOwnerEdit,
        user_ids: params.userIds,
        open_ids: params.openIds
    });
    return data;
}
exports.createChat = createChat;
async function getChatList({ pageSize, pageToken, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${tenantAccessToken}`
            }
        });
    }
    const { data } = await $instance.get(Constants_1.CHAT_LIST, {
        params: {
            page_size: pageSize,
            page_token: pageToken
        }
    });
    return data;
}
exports.getChatList = getChatList;
async function getChatInfo({ chatId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${tenantAccessToken}`
            }
        });
    }
    const { data } = await $instance.get(Constants_1.CHAT_INFO, {
        params: {
            chat_id: chatId
        }
    });
    return data;
}
exports.getChatInfo = getChatInfo;
async function updateChatInfo(params) {
    const { tenantAccessToken, instance, chatId, ownerOpenId, ownerUserId, name, i18nNames, onlyOwnerAdd = false, shareAllowed = true, onlyOwnerAtAll = false, onlyOwnerEdit = false } = params;
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.UPDATE_CHAT, {
        chat_id: chatId,
        owner_open_id: ownerOpenId,
        owner_user_id: ownerUserId,
        name,
        i18n_names: i18nNames,
        only_owner_add: onlyOwnerAdd,
        only_owner_at_all: onlyOwnerAtAll,
        share_allowed: shareAllowed,
        only_owner_edit: onlyOwnerEdit
    });
    return data;
}
exports.updateChatInfo = updateChatInfo;
async function addUserToChat({ chatId, instance, tenantAccessToken, openIds, userIds }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ADD_USER_TO_CHAT, {
        chat_id: chatId,
        user_ids: userIds,
        open_ids: openIds
    });
    return data;
}
exports.addUserToChat = addUserToChat;
async function removeUserFromChat({ chatId, instance, tenantAccessToken, openIds, userIds }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.REMOVE_USER_FROM_CHAT, {
        chat_id: chatId,
        user_ids: userIds,
        open_ids: openIds
    });
    return data;
}
exports.removeUserFromChat = removeUserFromChat;
async function discardChat({ chatId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(headers_1.Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.DISCARD_CHAT, {
        chat_id: chatId
    });
    return data;
}
exports.discardChat = discardChat;
