"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Constants_1 = require("../Constants");
// * app_access_token ：访问App资源相关接口。
// * tenant_access_token ：访问企业资源相关接口。
// * user_access_token ：访问用户资源相关接口。
async function getAppAccessToken({ appId, appSecret, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    const { data } = await $instance.post(Constants_1.GET_APP_ACCESS_TOKEN, {
        app_id: appId,
        app_secret: appSecret
    });
    return data;
}
exports.getAppAccessToken = getAppAccessToken;
async function getTenantAccessToken({ appId, appSecret, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    const { data } = await $instance.post(Constants_1.GET_TENANT_ACCESS_TOKEN, {
        app_id: appId,
        app_secret: appSecret
    });
    return data;
}
exports.getTenantAccessToken = getTenantAccessToken;
async function getAppTicket({ appId, appSecret, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    const { data } = await $instance.post(Constants_1.GET_APP_TICKET, {
        app_id: appId,
        app_secret: appSecret
    });
    return data;
}
exports.getAppTicket = getAppTicket;
// * 请求身份验证
async function getAuth({ appId, redirectURI, state, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create();
    }
    const { data } = await $instance.get(Constants_1.GET_AUTH, {
        params: {
            app_id: appId,
            redirect_uri: redirectURI,
            state
        }
    });
    return data;
}
exports.getAuth = getAuth;
// * 获取登录用户身份
async function getUserAccessToken({ appAccessToken, code, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    const { data } = await $instance.post(Constants_1.GET_USER_ACCESS_TOKEN, {
        app_access_token: appAccessToken,
        code,
        grant_type: 'authorization_code'
    });
    return data;
}
exports.getUserAccessToken = getUserAccessToken;
// 刷新 access_token
async function refreshUserAccessToken({ appAccessToken, refreshToken, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    const { data } = await $instance.post(Constants_1.REFRESH_USER_ACCESS_TOKEN, {
        app_access_token: appAccessToken,
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
    });
    return data;
}
exports.refreshUserAccessToken = refreshUserAccessToken;
// 需要设置 Authorization 请求头
async function getUserInfo({ userAccessToken, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userAccessToken}`
            }
        });
    }
    const { data } = await $instance.get(Constants_1.GET_USER_INFO, {
        params: {
            user_access_token: userAccessToken
        }
    });
    return data;
}
exports.getUserInfo = getUserInfo;
