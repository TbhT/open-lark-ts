[lark-sdk](../README.md) › [Globals](../globals.md) › [Api](api.md) › [Id2Id](api.id2id.md)

# Module: Id2Id

Id2Id模块的api有以下功能：
- open_id -> lark_id
- lark_id -> open_id
- message_id -> open_message_id
- open_message_id -> message_id
- department_id -> open_department_id
- open_department_id -> department_id
- chat_id -> open_chat_id
- open_chat_id -> chat_id
- lark_id -> employeeId
- employeeId -> lark_id

## Index

### Functions

* [Headers](api.id2id.md#const-headers)
* [chatId2OpenChatId](api.id2id.md#chatid2openchatid)
* [departmentId2OpenDepartmentId](api.id2id.md#departmentid2opendepartmentid)
* [employeeId2LarkId](api.id2id.md#employeeid2larkid)
* [larkId2EmployeeId](api.id2id.md#larkid2employeeid)
* [larkId2OpenId](api.id2id.md#larkid2openid)
* [messageId2OpenMessageId](api.id2id.md#messageid2openmessageid)
* [openChatId2ChatId](api.id2id.md#openchatid2chatid)
* [openDepartmentId2DepartmentId](api.id2id.md#opendepartmentid2departmentid)
* [openId2LarkId](api.id2id.md#openid2larkid)
* [openMessageId2MessageId](api.id2id.md#openmessageid2messageid)

## Functions

### `Const` Headers

▸ **Headers**(`tenantAccessToken`: string): *object*

*Defined in [src/apis/Id2Id.ts:45](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`tenantAccessToken` | string |

**Returns:** *object*

___

###  chatId2OpenChatId

▸ **chatId2OpenChatId**(`__namedParameters`: object): *Promise‹[ChatId2OpenIdResponse](../interfaces/types.chatid2openidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:243](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L243)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chatId` | string |
`instance` | undefined &#124; AxiosInstance |
`tenantAccessToken` | string |

**Returns:** *Promise‹[ChatId2OpenIdResponse](../interfaces/types.chatid2openidresponse.md)›*

___

###  departmentId2OpenDepartmentId

▸ **departmentId2OpenDepartmentId**(`__namedParameters`: object): *Promise‹[DepartmentId2OpenIdResponse](../interfaces/types.departmentid2openidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:193](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L193)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`departmentId` | string |
`instance` | undefined &#124; AxiosInstance |
`tenantAccessToken` | string |

**Returns:** *Promise‹[DepartmentId2OpenIdResponse](../interfaces/types.departmentid2openidresponse.md)›*

___

###  employeeId2LarkId

▸ **employeeId2LarkId**(`__namedParameters`: object): *Promise‹[EmployeeId2LarkIdResponse](../interfaces/types.employeeid2larkidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:318](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L318)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`employeeId` | string |
`instance` | undefined &#124; AxiosInstance |
`tenantAccessToken` | string |

**Returns:** *Promise‹[EmployeeId2LarkIdResponse](../interfaces/types.employeeid2larkidresponse.md)›*

___

###  larkId2EmployeeId

▸ **larkId2EmployeeId**(`__namedParameters`: object): *Promise‹[LarkId2EmployeeIdResponse](../interfaces/types.larkid2employeeidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:293](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L293)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`larkId` | string |
`tenantAccessToken` | string |

**Returns:** *Promise‹[LarkId2EmployeeIdResponse](../interfaces/types.larkid2employeeidresponse.md)›*

___

###  larkId2OpenId

▸ **larkId2OpenId**(`__namedParameters`: object): *Promise‹[LarkId2OpenIdResponse](../interfaces/types.larkid2openidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:118](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L118)*

lark_id 转 open_id

```typescript
 import { Api: { getTenantAccessToken, openId2LarkId  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

 const { code, msg, open_id } = await larkId2OpenId({
   tenantAccessToken,
   larkId: Config.development.lark_id
 })

```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`instance` | undefined &#124; AxiosInstance | - |
`larkId` | string | - |
`tenantAccessToken` | string |   |

**Returns:** *Promise‹[LarkId2OpenIdResponse](../interfaces/types.larkid2openidresponse.md)›*

___

###  messageId2OpenMessageId

▸ **messageId2OpenMessageId**(`__namedParameters`: object): *Promise‹[MessageId2OpenIdResponse](../interfaces/types.messageid2openidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:143](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L143)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`messageId` | string |
`tenantAccessToken` | string |

**Returns:** *Promise‹[MessageId2OpenIdResponse](../interfaces/types.messageid2openidresponse.md)›*

___

###  openChatId2ChatId

▸ **openChatId2ChatId**(`__namedParameters`: object): *Promise‹[OpenId2ChatIdResponse](../interfaces/types.openid2chatidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:268](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L268)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`openChatId` | string |
`tenantAccessToken` | string |

**Returns:** *Promise‹[OpenId2ChatIdResponse](../interfaces/types.openid2chatidresponse.md)›*

___

###  openDepartmentId2DepartmentId

▸ **openDepartmentId2DepartmentId**(`__namedParameters`: object): *Promise‹[OpenId2DepartmentIdResponse](../interfaces/types.openid2departmentidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:218](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L218)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`openDepartmentId` | string |
`tenantAccessToken` | string |

**Returns:** *Promise‹[OpenId2DepartmentIdResponse](../interfaces/types.openid2departmentidresponse.md)›*

___

###  openId2LarkId

▸ **openId2LarkId**(`__namedParameters`: object): *Promise‹[OpenId2LarkIdResponse](../interfaces/types.openid2larkidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:72](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L72)*

open_id 转 lark_id

```typescript
 import { Api: { getTenantAccessToken, openId2LarkId  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

const { code, user_id, msg } = await openId2LarkId({
 tenantAccessToken,
 openId: Config.development.open_id
})
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`instance` | undefined &#124; AxiosInstance | - |
`openId` | string | - |
`tenantAccessToken` | string |   |

**Returns:** *Promise‹[OpenId2LarkIdResponse](../interfaces/types.openid2larkidresponse.md)›*

___

###  openMessageId2MessageId

▸ **openMessageId2MessageId**(`__namedParameters`: object): *Promise‹[OpenId2MessageIdResponse](../interfaces/types.openid2messageidresponse.md)›*

*Defined in [src/apis/Id2Id.ts:168](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Id2Id.ts#L168)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`openMessageId` | string |
`tenantAccessToken` | string |

**Returns:** *Promise‹[OpenId2MessageIdResponse](../interfaces/types.openid2messageidresponse.md)›*
