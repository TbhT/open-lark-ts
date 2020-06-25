[lark-sdk](../README.md) › [Globals](../globals.md) › [Api](api.md) › [Chat](api.chat.md)

# Module: Chat

Chat模块的api有以下功能：
- 机器人创建群并拉指定用户进群
- 获取机器人所在的群列表
- 获取群名称、群主 ID、成员列表 ID 等群基本信息
- 更新群名称、群配置、转让群主等
- 机器人拉用户进群，机器人必须在群里
- 机器人移除用户出群
- 机器人解散群

## Index

### Type aliases

* [ModifyUserInChat](api.chat.md#modifyuserinchat)
* [createChatParams](api.chat.md#createchatparams)

### Functions

* [addUserToChat](api.chat.md#addusertochat)
* [createChat](api.chat.md#createchat)
* [discardChat](api.chat.md#discardchat)
* [getChatInfo](api.chat.md#getchatinfo)
* [getChatList](api.chat.md#getchatlist)
* [removeUserFromChat](api.chat.md#removeuserfromchat)
* [updateChatInfo](api.chat.md#updatechatinfo)

## Type aliases

###  ModifyUserInChat

Ƭ **ModifyUserInChat**: *object*

*Defined in [src/apis/Chat.ts:274](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L274)*

#### Type declaration:

* **chatId**: *string*

* **instance**? : *AxiosInstance*

* **openIds**? : *string[]*

* **tenantAccessToken**: *string*

* **userIds**? : *string[]*

___

###  createChatParams

Ƭ **createChatParams**: *object*

*Defined in [src/apis/Chat.ts:35](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L35)*

#### Type declaration:

* **description**? : *undefined | string*

* **i18nNames**? : *undefined | object*

* **instance**? : *AxiosInstance*

* **name**? : *undefined | string*

* **onlyOwnerAdd**? : *undefined | false | true*

* **onlyOwnerAtAll**? : *undefined | false | true*

* **onlyOwnerEdit**? : *undefined | false | true*

* **openIds**? : *string[]*

* **shareAllowed**? : *undefined | false | true*

* **tenantAccessToken**: *string*

* **userIds**? : *string[]*

## Functions

###  addUserToChat

▸ **addUserToChat**(`__namedParameters`: object): *Promise‹[ModifyUserToChatResponse](../interfaces/types.modifyusertochatresponse.md)›*

*Defined in [src/apis/Chat.ts:309](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L309)*

机器人拉用户进群，机器人必须在群里
**权限说明 ：** 需要启用机器人能力；机器人必须在群里

```typescript
 import { Api: { getTenantAccessToken, addUserToChat  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

 const { data } = await addUserToChat({
   tenantAccessToken,
   userIds: [userId],
   chatId
 })

```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`chatId` | string | 群 ID |
`instance` | undefined &#124; AxiosInstance | - |
`openIds` | undefined &#124; string[] | 需要加入群的用户的 user_id 列表，最多可以传200个 (open_ids 和 user_ids 参数不能同时为空) |
`tenantAccessToken` | string | - |
`userIds` | undefined &#124; string[] | 需要加入群的用户的 open_id 列表，最多可以传200个 (open_ids 和 user_ids 参数不能同时为空)  |

**Returns:** *Promise‹[ModifyUserToChatResponse](../interfaces/types.modifyusertochatresponse.md)›*

___

###  createChat

▸ **createChat**(`params`: [createChatParams](api.chat.md#createchatparams)): *Promise‹[CreateChatResponse](../interfaces/types.createchatresponse.md)›*

*Defined in [src/apis/Chat.ts:69](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L69)*

机器人创建群并拉指定用户进群
> **权限说明 ：** 需要启用机器人能力

```typescript
 import { Api: { getTenantAccessToken, createChat  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

 const { data } = await createChat({
   tenantAccessToken,
   name: 'jest unit test',
   openIds: [open_id]
 })
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`params` | [createChatParams](api.chat.md#createchatparams) |   |

**Returns:** *Promise‹[CreateChatResponse](../interfaces/types.createchatresponse.md)›*

___

###  discardChat

▸ **discardChat**(`__namedParameters`: object): *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

*Defined in [src/apis/Chat.ts:407](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L407)*

机器人解散群
**权限说明 ：** 需要启用机器人能力；机器人必须是群主（机器人创建的群，机器人默认是群主。）

```typescript
 import { Api: { getTenantAccessToken, updateChatInfo  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

 await discardChat({
   tenantAccessToken,
   chatId: data.chat_id
 })

```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`chatId` | string | - |
`instance` | undefined &#124; AxiosInstance | - |
`tenantAccessToken` | string |   |

**Returns:** *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

___

###  getChatInfo

▸ **getChatInfo**(`__namedParameters`: object): *Promise‹[ChatInfoResponse](../interfaces/types.chatinforesponse.md)›*

*Defined in [src/apis/Chat.ts:173](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L173)*

获取群名称、群主 ID、成员列表 ID 等群基本信息
> **权限说明 ：** 需要启用机器人能力

```typescript
 import { Api: { getTenantAccessToken, getChatInfo  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

 const { data } = await getChatInfo({
   chatId: chatId,
   tenantAccessToken
 })
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`chatId` | string | 群 ID |
`instance` | undefined &#124; AxiosInstance | - |
`tenantAccessToken` | string |   |

**Returns:** *Promise‹[ChatInfoResponse](../interfaces/types.chatinforesponse.md)›*

___

###  getChatList

▸ **getChatList**(`__namedParameters`: object): *Promise‹[ChatListResponse](../interfaces/types.chatlistresponse.md)›*

*Defined in [src/apis/Chat.ts:120](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L120)*

获取机器人所在的群列表
> **权限说明 ：** 需要启用机器人能力

```typescript
 import { Api: { getTenantAccessToken, getChatList  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

const { data } = await getChatList({
   tenantAccessToken
})
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`instance` | undefined &#124; AxiosInstance | - |
`pageSize` | undefined &#124; number | 分页大小，最大支持 200；默认为 100 |
`pageToken` | undefined &#124; string | 分页标记，第一次请求不填，表示从头开始遍历；分 页查询还有更多群时会同时返回新的 page_token, 下次遍历可采用该 page_token 获取更多群 |
`tenantAccessToken` | string |   |

**Returns:** *Promise‹[ChatListResponse](../interfaces/types.chatlistresponse.md)›*

___

###  removeUserFromChat

▸ **removeUserFromChat**(`__namedParameters`: object): *Promise‹[ModifyUserToChatResponse](../interfaces/types.modifyusertochatresponse.md)›*

*Defined in [src/apis/Chat.ts:359](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L359)*

机器人移除用户出群
**权限说明 ：** 需要启用机器人能力；机器人必须在群里

```typescript
 import { Api: { getTenantAccessToken, removeUserFromChat  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

 const { data: removeData } = await removeUserFromChat({
   tenantAccessToken,
   userIds: [userId],
   chatId: data.chat_id
 })
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`chatId` | string | - |
`instance` | undefined &#124; AxiosInstance | - |
`openIds` | undefined &#124; string[] | - |
`tenantAccessToken` | string | - |
`userIds` | undefined &#124; string[] |   |

**Returns:** *Promise‹[ModifyUserToChatResponse](../interfaces/types.modifyusertochatresponse.md)›*

___

###  updateChatInfo

▸ **updateChatInfo**(`params`: object): *Promise‹[UpdateChatResponse](../interfaces/types.updatechatresponse.md)›*

*Defined in [src/apis/Chat.ts:226](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Chat.ts#L226)*

更新群名称、群配置、转让群主等
> **权限说明 ：** 需要启用机器人能力

```typescript
 import { Api: { getTenantAccessToken, updateChatInfo  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

const { data } = await updateChatInfo({
   chatId: chatId,
   tenantAccessToken,
   i18nNames: {
     zh_cn: 'jest测试群',
     en_us: 'jestGroup',
     ja_jp: 'jestJapan'
   }
})
```

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`chatId` | string |
`i18nNames?` | undefined &#124; object |
`instance?` | AxiosInstance |
`name?` | undefined &#124; string |
`onlyOwnerAdd?` | undefined &#124; false &#124; true |
`onlyOwnerAtAll?` | undefined &#124; false &#124; true |
`onlyOwnerEdit?` | undefined &#124; false &#124; true |
`ownerOpenId?` | undefined &#124; string |
`ownerUserId?` | undefined &#124; string |
`shareAllowed?` | undefined &#124; false &#124; true |
`tenantAccessToken` | string |

**Returns:** *Promise‹[UpdateChatResponse](../interfaces/types.updatechatresponse.md)›*
