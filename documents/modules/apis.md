[lark-sdk](../README.md) › [Globals](../globals.md) › [apis](apis.md)

# Module: apis

## Index

### Classes

* [AES256](../classes/apis.aes256.md)

### Interfaces

* [ATag](../interfaces/apis.atag.md)
* [AtTag](../interfaces/apis.attag.md)
* [ImgTag](../interfaces/apis.imgtag.md)
* [MessageParamCommon](../interfaces/apis.messageparamcommon.md)
* [RichTextMessage](../interfaces/apis.richtextmessage.md)
* [RichTextMessageInner](../interfaces/apis.richtextmessageinner.md)
* [TextTag](../interfaces/apis.texttag.md)

### Variables

* [ALGORITHM](apis.md#const-algorithm)

### Functions

* [forwardRichTextMessage](apis.md#forwardrichtextmessage)
* [getAppAccessToken](apis.md#getappaccesstoken)
* [getAppTicket](apis.md#getappticket)
* [getAuth](apis.md#getauth)
* [getBasicUserInfo](apis.md#getbasicuserinfo)
* [getContactScope](apis.md#getcontactscope)
* [getTenantAccessToken](apis.md#gettenantaccesstoken)
* [getUserAccessToken](apis.md#getuseraccesstoken)
* [getUserChatId](apis.md#getuserchatid)
* [getUserId](apis.md#getuserid)
* [getUserInfo](apis.md#getuserinfo)
* [readMessage](apis.md#readmessage)
* [recallMessage](apis.md#recallmessage)
* [refreshCardMessage](apis.md#refreshcardmessage)
* [refreshUserAccessToken](apis.md#refreshuseraccesstoken)
* [sendCardMessage](apis.md#sendcardmessage)
* [sendImageMessage](apis.md#sendimagemessage)
* [sendMessage](apis.md#sendmessage)
* [sendMessageBatch](apis.md#sendmessagebatch)
* [sendRichTextMessage](apis.md#sendrichtextmessage)
* [shareChatCard](apis.md#sharechatcard)
* [urgentMessage](apis.md#urgentmessage)

## Variables

### `Const` ALGORITHM

• **ALGORITHM**: *"aes-256-cbc"* = "aes-256-cbc"

*Defined in [src/apis/Callback.ts:8](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Callback.ts#L8)*

## Functions

###  forwardRichTextMessage

▸ **forwardRichTextMessage**(`__namedParameters`: object): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Defined in [src/apis/Message.ts:114](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L114)*

用于转发 订阅事件 - 接收富文本消息 中的内容

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chatId` | undefined &#124; string |
`content` | string |
`email` | undefined &#124; string |
`instance` | undefined &#124; AxiosInstance |
`openId` | undefined &#124; string |
`rootId` | undefined &#124; string |
`tenantAccessToken` | string |
`title` | string |
`userId` | undefined &#124; string |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  getAppAccessToken

▸ **getAppAccessToken**(`__namedParameters`: object): *Promise‹[AppAccessTokenResponse](../interfaces/types.appaccesstokenresponse.md)›*

*Defined in [src/apis/OAuth.ts:24](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/OAuth.ts#L24)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`appId` | string |
`appSecret` | string |
`instance` | undefined &#124; AxiosInstance |

**Returns:** *Promise‹[AppAccessTokenResponse](../interfaces/types.appaccesstokenresponse.md)›*

___

###  getAppTicket

▸ **getAppTicket**(`__namedParameters`: object): *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

*Defined in [src/apis/OAuth.ts:84](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/OAuth.ts#L84)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`appId` | string |
`appSecret` | string |
`instance` | undefined &#124; AxiosInstance |

**Returns:** *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

___

###  getAuth

▸ **getAuth**(`__namedParameters`: object): *Promise‹[AuthResponse](../interfaces/types.authresponse.md)›*

*Defined in [src/apis/OAuth.ts:112](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/OAuth.ts#L112)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`appId` | string |
`instance` | undefined &#124; AxiosInstance |
`redirectURI` | string |
`state` | undefined &#124; string |

**Returns:** *Promise‹[AuthResponse](../interfaces/types.authresponse.md)›*

___

###  getBasicUserInfo

▸ **getBasicUserInfo**(`__namedParameters`: object): *Promise‹[BasicUserInfoResponse](../interfaces/types.basicuserinforesponse.md)›*

*Defined in [src/apis/User.ts:80](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/User.ts#L80)*

获取用户基础信息

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`openId` | undefined &#124; string |
`tenantAccessToken` | string |
`userId` | undefined &#124; string |

**Returns:** *Promise‹[BasicUserInfoResponse](../interfaces/types.basicuserinforesponse.md)›*

___

###  getContactScope

▸ **getContactScope**(`__namedParameters`: object): *Promise‹[ContactScopeResponse](../interfaces/types.contactscoperesponse.md)›*

*Defined in [src/apis/Contact.ts:6](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Contact.ts#L6)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`tenantAccessToken` | string |

**Returns:** *Promise‹[ContactScopeResponse](../interfaces/types.contactscoperesponse.md)›*

___

###  getTenantAccessToken

▸ **getTenantAccessToken**(`__namedParameters`: object): *Promise‹[TenantAccessTokenResponse](../interfaces/types.tenantaccesstokenresponse.md)›*

*Defined in [src/apis/OAuth.ts:54](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/OAuth.ts#L54)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`appId` | string |
`appSecret` | string |
`instance` | undefined &#124; AxiosInstance |

**Returns:** *Promise‹[TenantAccessTokenResponse](../interfaces/types.tenantaccesstokenresponse.md)›*

___

###  getUserAccessToken

▸ **getUserAccessToken**(`__namedParameters`: object): *Promise‹[UserAccessTokenResponse](../interfaces/types.useraccesstokenresponse.md)›*

*Defined in [src/apis/OAuth.ts:141](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/OAuth.ts#L141)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`appAccessToken` | string |
`code` | string |
`instance` | undefined &#124; AxiosInstance |

**Returns:** *Promise‹[UserAccessTokenResponse](../interfaces/types.useraccesstokenresponse.md)›*

___

###  getUserChatId

▸ **getUserChatId**(`__namedParameters`: object): *Promise‹[UserChatIdResponse](../interfaces/types.userchatidresponse.md)›*

*Defined in [src/apis/User.ts:13](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/User.ts#L13)*

获取用户和机器人的 ChatID

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`openId` | undefined &#124; string |
`tenantAccessToken` | string |
`userId` | undefined &#124; string |

**Returns:** *Promise‹[UserChatIdResponse](../interfaces/types.userchatidresponse.md)›*

___

###  getUserId

▸ **getUserId**(`__namedParameters`: object): *Promise‹[UserIdResponse](../interfaces/types.useridresponse.md)›*

*Defined in [src/apis/User.ts:49](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/User.ts#L49)*

根据用户邮箱获取用户 open_id 和 user_id。

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`email` | string |
`instance` | undefined &#124; AxiosInstance |
`tenantAccessToken` | string |

**Returns:** *Promise‹[UserIdResponse](../interfaces/types.useridresponse.md)›*

___

###  getUserInfo

▸ **getUserInfo**(`__namedParameters`: object): *Promise‹[UserInfoResponse](../interfaces/types.userinforesponse.md)›*

*Defined in [src/apis/OAuth.ts:205](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/OAuth.ts#L205)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`userAccessToken` | string |

**Returns:** *Promise‹[UserInfoResponse](../interfaces/types.userinforesponse.md)›*

___

###  readMessage

▸ **readMessage**(`__namedParameters`: object): *Promise‹[ReadMessageResponse](../interfaces/types.readmessageresponse.md)›*

*Defined in [src/apis/Message.ts:323](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L323)*

查询消息已读信息,仅能查看机器人自己发的消息

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`messageId` | string |
`tenantAccessToken` | string |

**Returns:** *Promise‹[ReadMessageResponse](../interfaces/types.readmessageresponse.md)›*

___

###  recallMessage

▸ **recallMessage**(`__namedParameters`: object): *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

*Defined in [src/apis/Message.ts:298](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L298)*

撤回指定消息。仅能撤回机器人消息

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`messageId` | string |
`tenantAccessToken` | string |

**Returns:** *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

___

###  refreshCardMessage

▸ **refreshCardMessage**(`__namedParameters`: object): *Promise‹any›*

*Defined in [src/apis/Message.ts:423](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L423)*

刷新卡片

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`cardContent` | [CardContentElements](../interfaces/types.cardcontentelements.md) |
`instance` | undefined &#124; AxiosInstance |
`openIds` | string[] |
`tenantAccessToken` | string |
`token` | string |

**Returns:** *Promise‹any›*

___

###  refreshUserAccessToken

▸ **refreshUserAccessToken**(`__namedParameters`: object): *Promise‹[UserAccessTokenResponse](../interfaces/types.useraccesstokenresponse.md)›*

*Defined in [src/apis/OAuth.ts:173](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/OAuth.ts#L173)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`appAccessToken` | string |
`instance` | undefined &#124; AxiosInstance |
`refreshToken` | string |

**Returns:** *Promise‹[UserAccessTokenResponse](../interfaces/types.useraccesstokenresponse.md)›*

___

###  sendCardMessage

▸ **sendCardMessage**(`__namedParameters`: object): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Defined in [src/apis/Message.ts:379](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L379)*

发送消息卡片

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`card` | [CardMessage](../interfaces/types.cardmessage.md) | - |
`chatId` | undefined &#124; string | - |
`email` | undefined &#124; string | - |
`instance` | undefined &#124; AxiosInstance | - |
`openId` | undefined &#124; string | - |
`rootId` | undefined &#124; string | - |
`tenantAccessToken` | string | - |
`updateMulti` | boolean | false |
`userId` | undefined &#124; string | - |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  sendImageMessage

▸ **sendImageMessage**(`__namedParameters`: object): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Defined in [src/apis/Message.ts:153](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L153)*

给指定用户或者会话发送图片消息，其中会话包括私聊会话和群会话。

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chatId` | undefined &#124; string |
`email` | undefined &#124; string |
`imageKey` | string |
`instance` | undefined &#124; AxiosInstance |
`openId` | undefined &#124; string |
`rootId` | undefined &#124; string |
`tenantAccessToken` | string |
`userId` | undefined &#124; string |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  sendMessage

▸ **sendMessage**(`__namedParameters`: object): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Defined in [src/apis/Message.ts:78](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L78)*

给指定用户或者会话发送文本消息，其中会话包括私聊会话和群会话。

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chatId` | undefined &#124; string |
`content` | string |
`email` | undefined &#124; string |
`instance` | undefined &#124; AxiosInstance |
`openId` | undefined &#124; string |
`rootId` | undefined &#124; string |
`tenantAccessToken` | string |
`userId` | undefined &#124; string |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  sendMessageBatch

▸ **sendMessageBatch**(`__namedParameters`: object): *Promise‹[SendMessageBatchResponse](../interfaces/types.sendmessagebatchresponse.md)›*

*Defined in [src/apis/Message.ts:35](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L35)*

给多个用户或者多个部门发送消息。

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`content` | string |
`departmentIds` | undefined &#124; string[] |
`instance` | undefined &#124; AxiosInstance |
`msgType` | string |
`openIds` | undefined &#124; string[] |
`tenantAccessToken` | string |
`userIds` | undefined &#124; string[] |

**Returns:** *Promise‹[SendMessageBatchResponse](../interfaces/types.sendmessagebatchresponse.md)›*

___

###  sendRichTextMessage

▸ **sendRichTextMessage**(`__namedParameters`: object): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Defined in [src/apis/Message.ts:226](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L226)*

给指定用户或者会话发送富文本消息，其中会话包括私聊会话和群会话。

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chatId` | undefined &#124; string |
`email` | undefined &#124; string |
`instance` | undefined &#124; AxiosInstance |
`openId` | undefined &#124; string |
`post` | [RichTextMessage](../interfaces/apis.richtextmessage.md) |
`rootId` | undefined &#124; string |
`tenantAccessToken` | string |
`userId` | undefined &#124; string |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  shareChatCard

▸ **shareChatCard**(`__namedParameters`: object): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Defined in [src/apis/Message.ts:262](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L262)*

给指定用户或者会话发送群名片，其中会话包括私聊会话和群会话。

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chatId` | undefined &#124; string |
`email` | undefined &#124; string |
`instance` | undefined &#124; AxiosInstance |
`openId` | undefined &#124; string |
`rootId` | undefined &#124; string |
`shareChatId` | string |
`tenantAccessToken` | string |
`userId` | undefined &#124; string |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  urgentMessage

▸ **urgentMessage**(`__namedParameters`: object): *Promise‹[UrgentMessageResponse](../interfaces/types.urgentmessageresponse.md)›*

*Defined in [src/apis/Message.ts:348](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/apis/Message.ts#L348)*

对指定消息进行加急。

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | undefined &#124; AxiosInstance |
`messageId` | string |
`openIds` | string[] |
`tenantAccessToken` | string |
`urgentType` | [UrgentType](../enums/types.urgenttype.md) |

**Returns:** *Promise‹[UrgentMessageResponse](../interfaces/types.urgentmessageresponse.md)›*
