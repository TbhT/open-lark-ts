"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Constants_1 = require("../Constants");
/**
 * 获取用户和机器人的 ChatID
 * @param param0
 */
async function getUserChatId({ tenantAccessToken, instance, userId, openId }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${tenantAccessToken}`,
                'content-type': 'application/json'
            }
        });
    }
    const { data } = await $instance.get(Constants_1.GET_USER_CHAT_ID, {
        params: {
            open_id: openId,
            user_id: userId
        }
    });
    return data;
}
exports.getUserChatId = getUserChatId;
/**
 * 根据用户邮箱获取用户 open_id 和 user_id。
 * @param param0
 */
async function getUserId({ tenantAccessToken, instance, email }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${tenantAccessToken}`,
                'content-type': 'application/json'
            }
        });
    }
    const { data } = await $instance.post(Constants_1.GET_USER_ID, {
        email
    });
    return data;
}
exports.getUserId = getUserId;
/**
 * 获取用户基础信息
 * @param param0
 */
async function getBasicUserInfo({ tenantAccessToken, openId, userId, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${tenantAccessToken}`,
                'content-type': 'application/json'
            }
        });
    }
    const { data } = await $instance.get(Constants_1.GET_USER_BASE_INFO, {
        params: {
            open_id: openId,
            user_id: userId
        }
    });
    return data;
}
exports.getBasicUserInfo = getBasicUserInfo;
