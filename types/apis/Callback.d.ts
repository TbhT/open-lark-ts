export declare class AES256 {
    private key;
    constructor(key: string);
    decrypt(encrypt: string): string;
    encrypt(data: string): string;
}
