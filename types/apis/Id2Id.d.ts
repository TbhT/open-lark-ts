import { AxiosInstance } from 'axios';
import { OpenId2LarkIdResponse, LarkId2OpenIdResponse, MessageId2OpenIdResponse, OpenId2MessageIdResponse, DepartmentId2OpenIdResponse, OpenId2DepartmentIdResponse, ChatId2OpenIdResponse, OpenId2ChatIdResponse, LarkId2EmployeeIdResponse, EmployeeId2LarkIdResponse } from '../types/Response';
export declare function openId2LarkId({ openId, instance, tenantAccessToken }: {
    openId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<OpenId2LarkIdResponse>;
export declare function larkId2OpenId({ larkId, instance, tenantAccessToken }: {
    larkId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<LarkId2OpenIdResponse>;
export declare function messageId2OpenMessageId({ messageId, instance, tenantAccessToken }: {
    messageId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<MessageId2OpenIdResponse>;
export declare function openMessageId2MessageId({ openMessageId, instance, tenantAccessToken }: {
    openMessageId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<OpenId2MessageIdResponse>;
export declare function departmentId2OpenDepartmentId({ departmentId, instance, tenantAccessToken }: {
    departmentId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<DepartmentId2OpenIdResponse>;
export declare function openDepartmentId2DepartmentId({ openDepartmentId, instance, tenantAccessToken }: {
    openDepartmentId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<OpenId2DepartmentIdResponse>;
export declare function chatId2OpenChatId({ chatId, instance, tenantAccessToken }: {
    chatId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<ChatId2OpenIdResponse>;
export declare function openChatId2ChatId({ openChatId, instance, tenantAccessToken }: {
    openChatId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<OpenId2ChatIdResponse>;
export declare function larkId2EmployeeId({ larkId, instance, tenantAccessToken }: {
    larkId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<LarkId2EmployeeIdResponse>;
export declare function employeeId2LarkId({ employeeId, instance, tenantAccessToken }: {
    employeeId: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<EmployeeId2LarkIdResponse>;
