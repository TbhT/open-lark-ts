"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale('zh-cn');
class Cache {
    constructor(maxSize = 256, ttl = 0) {
        this.maxSize = maxSize;
        this.ttl = ttl;
        this.cache = new Map();
        this.expiredTime = new Map();
    }
    get length() {
        return this.cache.size;
    }
    has(key) {
        return this.cache.has(key);
    }
    *[Symbol.iterator]() {
        const values = this.cache.values();
        for (const v of values) {
            yield v;
        }
    }
    keys() {
        return this.cache.keys();
    }
    get full() {
        return this.cache.size > this.maxSize;
    }
    get(key) {
        if (this.has(key)) {
            const value = this.cache.get(key);
            if (this.expired(key)) {
                this.delete(key);
            }
            return value;
        }
        return null;
    }
    add(key, value, ttl) {
        if (!this.cache.has(key)) {
            this.set(key, value, ttl);
        }
    }
    set(key, value, ttl) {
        if (!ttl) {
            ttl = this.ttl;
        }
        if (this.cache.has(key) === false) {
            this.evict();
        }
        this.delete(key);
        this.cache.set(key, value);
        if (ttl) {
            this.expiredTime.set(key, moment().unix() + ttl);
        }
    }
    delete(key) {
        let flag = false;
        if (this.cache.has(key)) {
            flag = this.cache.delete(key);
        }
        if (this.expiredTime.has(key)) {
            flag = flag || this.expiredTime.delete(key);
        }
        return flag;
    }
    evict() {
        let count = this.deleteExpired();
        if (!this.full) {
            return count;
        }
        this.pop();
        count++;
        return count;
    }
    pop() {
        const keys = [...this.keys()];
        const popKey = keys.pop();
        if (popKey) {
            const popValue = this.cache.get(popKey);
            this.delete(popKey);
            return [popKey, popValue];
        }
        return [];
    }
    deleteExpired() {
        let count = 0;
        if (this.expiredTime.size === 0) {
            return count;
        }
        const expiredOn = moment().unix();
        for (const [key, expire] of this.expiredTime.entries()) {
            if (expire <= expiredOn) {
                this.delete(key);
                count++;
            }
        }
        return count;
    }
    expired(key, expiredOn) {
        if (!expiredOn) {
            expiredOn = moment().unix();
        }
        if (this.expiredTime.has(key)) {
            return this.expiredTime.get(key) <= expiredOn;
        }
        return this.cache.has(key);
    }
}
exports.default = Cache;
