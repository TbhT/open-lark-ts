"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Constants_1 = require("../Constants");
// 获取通讯录授权范围
async function getContactScope({ tenantAccessToken, instance }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${tenantAccessToken}`
            }
        });
    }
    const { data } = await $instance.get(Constants_1.GET_CONTACT_SCOPE);
    return data;
}
exports.getContactScope = getContactScope;
// todo: 批量获取用户信息
// todo: 获取部门用户列表
// todo: 获取部门用户详情
// todo: 新增用户
// todo: 删除用户
// todo: 更新用户信息
// todo: 获取角色列表
// todo: 获取角色成员列表
// todo: 使用手机号或邮箱获取用户 ID
// todo: 使用统一 ID 获取用户 ID
// todo: 搜索用户
