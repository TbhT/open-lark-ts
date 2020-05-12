"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Botable_1 = require("./Botable");
const Cache_1 = require("./Cache");
const OAuth_1 = require("./apis/OAuth");
const headers_1 = require("./utils/headers");
const tokenCache = new Cache_1.Cache(10, 3600 * 1.9);
class Bot extends Botable_1.Botable {
    constructor({ appId, appSecret }) {
        super({ appId, appSecret });
    }
    async init() {
        try {
            const { tenant_access_token } = await OAuth_1.getTenantAccessToken({
                appSecret: this.appSecret,
                appId: this.appId
            });
            this.instance = axios_1.default.create(headers_1.default(tenant_access_token));
            this.tenantAccessToken = tenant_access_token;
            Bot.cacheToken('tenantAK', this.tenantAccessToken);
            this.initFlag = true;
        }
        catch (error) {
            // todo:
            console.log('init error', error);
        }
        finally {
            return this.initFlag;
        }
    }
    static cacheToken(key, value, ttl) {
        return tokenCache.add(key, value, ttl);
    }
}
exports.Bot = Bot;
