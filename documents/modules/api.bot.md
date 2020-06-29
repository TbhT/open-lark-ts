[lark-sdk](../README.md) › [Globals](../globals.md) › [Api](api.md) › [Bot](api.bot.md)

# Module: Bot

Bot模块的api有以下功能：
- 获取机器人信息
- 拉机器人进群
- 将机器人移出群

## Index

### Bot Functions

* [addBotToChat](api.bot.md#addbottochat)
* [getBotInfo](api.bot.md#getbotinfo)
* [removeBotFromChat](api.bot.md#removebotfromchat)

## Bot Functions

###  addBotToChat

▸ **addBotToChat**(`__namedParameters`: object): *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

*Defined in [src/apis/Bot.ts:85](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Bot.ts#L85)*

拉机器人进群
> **权限说明:** 需要启用机器人能力；机器人的owner需要已经在群里

```typescript
 import { Api: { getTenantAccessToken, getBotInfo  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId,
   appSecret
 })

 const { code } = await addBotToChat({
    tenantAccessToken,
    chatId
 })
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`chatId` | string | 群的id |
`instance` | undefined &#124; AxiosInstance | - |
`tenantAccessToken` | string | 访问 token |

**Returns:** *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

___

###  getBotInfo

▸ **getBotInfo**(`__namedParameters`: object): *Promise‹[BotInfoResponse](../interfaces/types.botinforesponse.md)›*

*Defined in [src/apis/Bot.ts:41](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Bot.ts#L41)*

获取机器人信息
> **权限说明：** 需要启用机器人能力

```typescript
 import { Api: { getTenantAccessToken, getBotInfo  } } from "@lark-sdk";

 const { tenant_access_token } = await getTenantAccessToken({
   appId: Config.bot.appId,
   appSecret: Config.bot.appSecret
 })

 const { bot } = await getBotInfo({
   tenantAccessToken
 })
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`instance` | undefined &#124; AxiosInstance | - |
`tenantAccessToken` | string | 访问 token |

**Returns:** *Promise‹[BotInfoResponse](../interfaces/types.botinforesponse.md)›*

___

###  removeBotFromChat

▸ **removeBotFromChat**(`__namedParameters`: object): *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

*Defined in [src/apis/Bot.ts:130](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Bot.ts#L130)*

将机器人移出群
> **权限说明：** 需要启用机器人能力

```typescript
import { Api: { getTenantAccessToken, getBotInfo  } } from "@lark-sdk";

const { tenant_access_token } = await getTenantAccessToken({
  appId,
  appSecret
})

const { code } = await removeBotFromChat({
   tenantAccessToken,
   chatId
})
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`chatId` | string | 群的id |
`instance` | undefined &#124; AxiosInstance | - |
`tenantAccessToken` | string | 访问 token |

**Returns:** *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*
