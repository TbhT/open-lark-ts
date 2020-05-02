import { AxiosInstance } from 'axios';
import { BotInfoResponse, CommonResponse } from '../types/Response';
export declare function getBotInfo({ tenantAccessToken, instance }: {
    tenantAccessToken: string;
    instance?: AxiosInstance;
}): Promise<BotInfoResponse>;
export declare function addBotToChat({ chatId, instance, tenantAccessToken }: {
    chatId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<CommonResponse>;
export declare function removeBotFromChat({ chatId, instance, tenantAccessToken }: {
    chatId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<CommonResponse>;
