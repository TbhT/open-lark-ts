import { AxiosInstance } from 'axios';
import { AppAccessTokenResponse, TenantAccessTokenResponse, CommonResponse, AuthResponse, UserAccessTokenResponse, UserInfoResponse } from '../types/Response';
export declare function getAppAccessToken({ appId, appSecret, instance }: {
    instance?: AxiosInstance;
    appId: string;
    appSecret: string;
}): Promise<AppAccessTokenResponse>;
export declare function getTenantAccessToken({ appId, appSecret, instance }: {
    appId: string;
    appSecret: string;
    instance?: AxiosInstance;
}): Promise<TenantAccessTokenResponse>;
export declare function getAppTicket({ appId, appSecret, instance }: {
    appId: string;
    appSecret: string;
    instance?: AxiosInstance;
}): Promise<CommonResponse>;
export declare function getAuth({ appId, redirectURI, state, instance }: {
    appId: string;
    redirectURI: string;
    state?: string;
    instance?: AxiosInstance;
}): Promise<AuthResponse>;
export declare function getUserAccessToken({ appAccessToken, code, instance }: {
    appAccessToken: string;
    code: string;
    instance?: AxiosInstance;
}): Promise<UserAccessTokenResponse>;
export declare function refreshUserAccessToken({ appAccessToken, refreshToken, instance }: {
    appAccessToken: string;
    refreshToken: string;
    instance?: AxiosInstance;
}): Promise<UserAccessTokenResponse>;
export declare function getUserInfo({ userAccessToken, instance }: {
    userAccessToken: string;
    instance?: AxiosInstance;
}): Promise<UserInfoResponse>;
