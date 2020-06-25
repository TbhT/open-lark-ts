[lark-sdk](../README.md) › [Globals](../globals.md) › [](../modules/reflection-1716.md) › [](../modules/reflection-1716.reflection-437.md) › [Sayable](reflection-1716.reflection-437.sayable.md)

# Interface: Sayable

## Hierarchy

* **Sayable**

## Implemented by

* [Bot](../classes/reflection-1716.reflection-437.bot.md)
* [Botable](../classes/reflection-1716.reflection-437.botable.md)

## Index

### Properties

* [instance](reflection-1716.reflection-437.sayable.md#instance)
* [tenantAccessToken](reflection-1716.reflection-437.sayable.md#tenantaccesstoken)

### Methods

* [readMessage](reflection-1716.reflection-437.sayable.md#readmessage)
* [recallMessage](reflection-1716.reflection-437.sayable.md#recallmessage)
* [sayCardMessage](reflection-1716.reflection-437.sayable.md#saycardmessage)
* [sayChatCard](reflection-1716.reflection-437.sayable.md#saychatcard)
* [sayImageMessage](reflection-1716.reflection-437.sayable.md#sayimagemessage)
* [sayRichTextMessage](reflection-1716.reflection-437.sayable.md#sayrichtextmessage)
* [sayTextMessage](reflection-1716.reflection-437.sayable.md#saytextmessage)
* [sayUrgentMessage](reflection-1716.reflection-437.sayable.md#sayurgentmessage)

## Properties

###  instance

• **instance**: *AxiosInstance | undefined*

*Defined in [src/Sayable.ts:59](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L59)*

___

###  tenantAccessToken

• **tenantAccessToken**: *string | undefined*

*Defined in [src/Sayable.ts:58](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L58)*

## Methods

###  readMessage

▸ **readMessage**(`params`: object): *Promise‹[ReadMessageResponse](types.readmessageresponse.md)›*

*Defined in [src/Sayable.ts:67](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L67)*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`messageId` | string |

**Returns:** *Promise‹[ReadMessageResponse](types.readmessageresponse.md)›*

___

###  recallMessage

▸ **recallMessage**(`params`: object): *Promise‹[CommonResponse](types.commonresponse.md)›*

*Defined in [src/Sayable.ts:66](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L66)*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`messageId` | string |

**Returns:** *Promise‹[CommonResponse](types.commonresponse.md)›*

___

###  sayCardMessage

▸ **sayCardMessage**(`params`: [CardMessageParams](../modules/reflection-1716.reflection-437.md#cardmessageparams)): *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

*Defined in [src/Sayable.ts:73](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [CardMessageParams](../modules/reflection-1716.reflection-437.md#cardmessageparams) |

**Returns:** *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

___

###  sayChatCard

▸ **sayChatCard**(`params`: [ShareChatCardParams](../modules/reflection-1716.reflection-437.md#sharechatcardparams)): *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

*Defined in [src/Sayable.ts:65](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ShareChatCardParams](../modules/reflection-1716.reflection-437.md#sharechatcardparams) |

**Returns:** *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

___

###  sayImageMessage

▸ **sayImageMessage**(`params`: [ImageMessageParams](../modules/reflection-1716.reflection-437.md#imagemessageparams)): *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

*Defined in [src/Sayable.ts:61](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ImageMessageParams](../modules/reflection-1716.reflection-437.md#imagemessageparams) |

**Returns:** *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

___

###  sayRichTextMessage

▸ **sayRichTextMessage**(`params`: [RichTextMessageParams](../modules/reflection-1716.reflection-437.md#richtextmessageparams)): *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

*Defined in [src/Sayable.ts:62](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [RichTextMessageParams](../modules/reflection-1716.reflection-437.md#richtextmessageparams) |

**Returns:** *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

___

###  sayTextMessage

▸ **sayTextMessage**(`params`: [TextMessageParams](../modules/reflection-1716.reflection-437.md#textmessageparams)): *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

*Defined in [src/Sayable.ts:60](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TextMessageParams](../modules/reflection-1716.reflection-437.md#textmessageparams) |

**Returns:** *Promise‹[SendMessageResponse](types.sendmessageresponse.md)›*

___

###  sayUrgentMessage

▸ **sayUrgentMessage**(`params`: object): *Promise‹[UrgentMessageResponse](types.urgentmessageresponse.md)›*

*Defined in [src/Sayable.ts:68](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Sayable.ts#L68)*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`messageId` | string |
`openIds` | string[] |
`urgentType` | [UrgentType](../enums/types.urgenttype.md) |

**Returns:** *Promise‹[UrgentMessageResponse](types.urgentmessageresponse.md)›*
