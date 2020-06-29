[lark-sdk](../README.md) › [Globals](../globals.md) › [Api](api.md) › [Image](api.image.md)

# Module: Image

Image 模块有以下功能：
- 上传本地图片
- 获取上传的图片流

## Index

### Functions

* [getImage](api.image.md#getimage)
* [uploadImage](api.image.md#uploadimage)
* [uploadLocalImage](api.image.md#uploadlocalimage)

## Functions

###  getImage

▸ **getImage**(`__namedParameters`: object): *Promise‹any›*

*Defined in [src/apis/Image.ts:56](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Image.ts#L56)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`imageKey` | string |
`instance` | undefined &#124; AxiosInstance |
`tenantAccessToken` | string |

**Returns:** *Promise‹any›*

___

###  uploadImage

▸ **uploadImage**(`__namedParameters`: object): *Promise‹[UploadImageResponse](../interfaces/types.uploadimageresponse.md)›*

*Defined in [src/apis/Image.ts:21](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Image.ts#L21)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`file` | Stream‹› |
`imageType` | "message" &#124; "avatar" |
`instance` | undefined &#124; AxiosInstance |
`tenantAccessToken` | string |

**Returns:** *Promise‹[UploadImageResponse](../interfaces/types.uploadimageresponse.md)›*

___

###  uploadLocalImage

▸ **uploadLocalImage**(`__namedParameters`: object): *Promise‹[UploadImageResponse](../interfaces/types.uploadimageresponse.md)[]›*

*Defined in [src/apis/Image.ts:106](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Image.ts#L106)*

```typescript
 import { Api: { getTenantAccessToken, uploadImage  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

 const res = await uploadLocalImage({
   tenantAccessToken,
   filePath: resolve('tests/images/avatar.png'),
   imageType: 'message'
 })
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`filePath` | string &#124; string[] | - |
`imageType` | "message" &#124; "avatar" | 图片类型只能为 'message' |
`instance` | undefined &#124; AxiosInstance | - |
`tenantAccessToken` | string |   |

**Returns:** *Promise‹[UploadImageResponse](../interfaces/types.uploadimageresponse.md)[]›*
