import { AxiosInstance } from 'axios';
import { ContactScopeResponse } from '../types/Response';
export declare function getContactScope({ tenantAccessToken, instance }: {
    tenantAccessToken: string;
    instance?: AxiosInstance;
}): Promise<ContactScopeResponse>;
