"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const fs_1 = require("fs");
/**
 * @doc https://github.com/jdalrymple/gitbeaker/issues/417
 */
const FormData = require("form-data");
const Constants_1 = require("../Constants");
async function uploadImage({ instance, file, imageType, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${tenantAccessToken}`
            }
        });
    }
    const formData = new FormData();
    formData.append('image', file);
    formData.append('image_type', imageType);
    const { data } = await $instance.post(Constants_1.UPLOAD_PATH, formData, {
        headers: formData.getHeaders()
    });
    return data;
}
exports.uploadImage = uploadImage;
async function getImage({ imageKey, instance, tenantAccessToken }) {
    let $instance = instance;
    if (!$instance) {
        $instance = axios_1.default.create({
            headers: {
                Authorization: `Bearer ${tenantAccessToken}`
            }
        });
    }
    const { data } = await $instance.get(Constants_1.GET_IMAGE_PATH, {
        params: {
            image_key: imageKey
        }
    });
    return data;
}
exports.getImage = getImage;
/**
 * 图片类型只能为 message
 * @param param0
 */
async function uploadLocalImage({ filePath, imageType, instance, tenantAccessToken }) {
    let file;
    if (Array.isArray(filePath)) {
        file = filePath.map(f => fs_1.createReadStream(f));
    }
    else {
        file = [fs_1.createReadStream(filePath)];
    }
    const fileArray = [];
    for (const iterator of file) {
        fileArray.push(uploadImage({
            file: iterator,
            imageType,
            instance,
            tenantAccessToken
        }));
    }
    const res = await Promise.all(fileArray);
    return res;
}
exports.uploadLocalImage = uploadLocalImage;
