/// <reference types="node" />
import { AxiosInstance } from 'axios';
import { UploadImageResponse } from '../types/Response';
import { Stream } from 'stream';
export declare function uploadImage({ instance, file, imageType, tenantAccessToken }: {
    file: Stream;
    imageType: 'message' | 'avatar';
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<UploadImageResponse>;
export declare function getImage({ imageKey, instance, tenantAccessToken }: {
    imageKey: string;
    instance?: AxiosInstance;
    tenantAccessToken: string;
}): Promise<any>;
/**
 * 图片类型只能为 message
 * @param param0
 */
export declare function uploadLocalImage({ filePath, imageType, instance, tenantAccessToken }: {
    filePath: string | string[];
    imageType: 'message' | 'avatar';
    tenantAccessToken: string;
    instance?: AxiosInstance;
}): Promise<UploadImageResponse[]>;
