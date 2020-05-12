import { AxiosInstance } from 'axios';
import { Botable } from './Botable';
export declare class Bot extends Botable {
    tenantAccessToken: string | undefined;
    instance: AxiosInstance | undefined;
    constructor({ appId, appSecret }: {
        appId: string;
        appSecret: string;
    });
    init(): Promise<boolean>;
    static cacheToken(key: string, value: string, ttl?: number): void;
}
