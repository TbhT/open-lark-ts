"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const ALGORITHM = 'aes-256-cbc';
class AES256 {
    constructor(key) {
        const HASH_SHA_256 = crypto_1.createHash('sha256');
        this.key = HASH_SHA_256.update(key).digest();
    }
    decrypt(encrypt) {
        const decodeString = Buffer.from(encrypt, 'base64');
        const iv = decodeString.slice(0, 16);
        const decipher = crypto_1.createDecipheriv(ALGORITHM, Buffer.from(this.key), iv);
        let decrypted = decipher.update(decodeString.slice(16), undefined, 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    encrypt(data) {
        const iv = crypto_1.randomBytes(16);
        const cipher = crypto_1.createCipheriv(ALGORITHM, Buffer.from(this.key), iv);
        cipher.update(data);
        const cipherText = cipher.final();
        const final = Buffer.concat([iv, cipherText]);
        return final.toString('base64');
    }
}
exports.AES256 = AES256;
