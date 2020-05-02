"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Constants_1 = require("../Constants");
const Headers = (tenantAccessToken) => ({
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${tenantAccessToken}`
    }
});
async function openId2LarkId({ openId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_OPEN_TO_LARK, {
        open_id: openId
    });
    return data;
}
exports.openId2LarkId = openId2LarkId;
async function larkId2OpenId({ larkId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_LARK_TO_OPEN, {
        user_id: larkId
    });
    return data;
}
exports.larkId2OpenId = larkId2OpenId;
async function messageId2OpenMessageId({ messageId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_MESSAGE_TO_OPEN, {
        message_id: messageId
    });
    return data;
}
exports.messageId2OpenMessageId = messageId2OpenMessageId;
async function openMessageId2MessageId({ openMessageId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_OPEN_TO_MESSAGE, {
        open_message_id: openMessageId
    });
    return data;
}
exports.openMessageId2MessageId = openMessageId2MessageId;
async function departmentId2OpenDepartmentId({ departmentId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_DEPARTMENT_TO_OPEN, {
        department_id: departmentId
    });
    return data;
}
exports.departmentId2OpenDepartmentId = departmentId2OpenDepartmentId;
async function openDepartmentId2DepartmentId({ openDepartmentId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_OPEN_TO_DEPARTMENT, {
        open_department_id: openDepartmentId
    });
    return data;
}
exports.openDepartmentId2DepartmentId = openDepartmentId2DepartmentId;
async function chatId2OpenChatId({ chatId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_CHAT_TO_OPEN, {
        chat_id: chatId
    });
    return data;
}
exports.chatId2OpenChatId = chatId2OpenChatId;
async function openChatId2ChatId({ openChatId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_OPEN_TO_CHAT, {
        open_chat_id: openChatId
    });
    return data;
}
exports.openChatId2ChatId = openChatId2ChatId;
async function larkId2EmployeeId({ larkId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_LARK_TO_EMPLOYEE, {
        user_id: larkId
    });
    return data;
}
exports.larkId2EmployeeId = larkId2EmployeeId;
async function employeeId2LarkId({ employeeId, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create(Headers(tenantAccessToken));
    }
    const { data } = await $instance.post(Constants_1.ID_EMPLOYEE_TO_LARK, {
        employee_id: employeeId
    });
    return data;
}
exports.employeeId2LarkId = employeeId2LarkId;
