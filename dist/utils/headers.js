"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headers = (tenantAccessToken, accessToken = true) => {
    const headers = {
        'content-type': 'application/json'
    };
    if (accessToken) {
        headers.Authorization = `Bearer ${tenantAccessToken}`;
        return { headers };
    }
    return { headers };
};
exports.default = exports.Headers;
