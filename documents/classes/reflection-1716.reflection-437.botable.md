[lark-sdk](../README.md) › [Globals](../globals.md) › [](../modules/reflection-1716.md) › [](../modules/reflection-1716.reflection-437.md) › [Botable](reflection-1716.reflection-437.botable.md)

# Class: Botable

## Hierarchy

* EventEmitter

  ↳ **Botable**

  ↳ [Bot](reflection-1716.reflection-437.bot.md)

## Implements

* [Sayable](../interfaces/reflection-1716.reflection-437.sayable.md)

## Index

### Constructors

* [constructor](reflection-1716.reflection-437.botable.md#constructor)

### Properties

* [appId](reflection-1716.reflection-437.botable.md#protected-readonly-appid)
* [appSecret](reflection-1716.reflection-437.botable.md#protected-readonly-appsecret)
* [initFlag](reflection-1716.reflection-437.botable.md#protected-initflag)
* [instance](reflection-1716.reflection-437.botable.md#instance)
* [tenantAccessToken](reflection-1716.reflection-437.botable.md#tenantaccesstoken)
* [defaultMaxListeners](reflection-1716.reflection-437.botable.md#static-defaultmaxlisteners)

### Methods

* [addListener](reflection-1716.reflection-437.botable.md#addlistener)
* [beforeSay](reflection-1716.reflection-437.botable.md#protected-beforesay)
* [emit](reflection-1716.reflection-437.botable.md#emit)
* [eventNames](reflection-1716.reflection-437.botable.md#eventnames)
* [getMaxListeners](reflection-1716.reflection-437.botable.md#getmaxlisteners)
* [init](reflection-1716.reflection-437.botable.md#abstract-init)
* [listenerCount](reflection-1716.reflection-437.botable.md#listenercount)
* [listeners](reflection-1716.reflection-437.botable.md#listeners)
* [off](reflection-1716.reflection-437.botable.md#off)
* [on](reflection-1716.reflection-437.botable.md#on)
* [once](reflection-1716.reflection-437.botable.md#once)
* [prependListener](reflection-1716.reflection-437.botable.md#prependlistener)
* [prependOnceListener](reflection-1716.reflection-437.botable.md#prependoncelistener)
* [rawListeners](reflection-1716.reflection-437.botable.md#rawlisteners)
* [readMessage](reflection-1716.reflection-437.botable.md#readmessage)
* [recallMessage](reflection-1716.reflection-437.botable.md#recallmessage)
* [removeAllListeners](reflection-1716.reflection-437.botable.md#removealllisteners)
* [removeListener](reflection-1716.reflection-437.botable.md#removelistener)
* [sayCardMessage](reflection-1716.reflection-437.botable.md#saycardmessage)
* [sayChatCard](reflection-1716.reflection-437.botable.md#saychatcard)
* [sayImageMessage](reflection-1716.reflection-437.botable.md#sayimagemessage)
* [sayRichTextMessage](reflection-1716.reflection-437.botable.md#sayrichtextmessage)
* [sayTextMessage](reflection-1716.reflection-437.botable.md#saytextmessage)
* [sayUrgentMessage](reflection-1716.reflection-437.botable.md#sayurgentmessage)
* [setMaxListeners](reflection-1716.reflection-437.botable.md#setmaxlisteners)
* [listenerCount](reflection-1716.reflection-437.botable.md#static-listenercount)

## Constructors

###  constructor

\+ **new Botable**(`__namedParameters`: object): *[Botable](reflection-1716.reflection-437.botable.md)*

*Overrides void*

*Defined in [src/Botable.ts:55](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L55)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`appId` | string |
`appSecret` | string |

**Returns:** *[Botable](reflection-1716.reflection-437.botable.md)*

## Properties

### `Protected` `Readonly` appId

• **appId**: *string*

*Defined in [src/Botable.ts:51](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L51)*

___

### `Protected` `Readonly` appSecret

• **appSecret**: *string*

*Defined in [src/Botable.ts:53](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L53)*

___

### `Protected` initFlag

• **initFlag**: *boolean* = false

*Defined in [src/Botable.ts:55](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L55)*

___

###  instance

• **instance**: *AxiosInstance | undefined*

*Implementation of [Sayable](../interfaces/reflection-1716.reflection-437.sayable.md).[instance](../interfaces/reflection-1716.reflection-437.sayable.md#instance)*

*Defined in [src/Botable.ts:49](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L49)*

___

###  tenantAccessToken

• **tenantAccessToken**: *string | undefined*

*Implementation of [Sayable](../interfaces/reflection-1716.reflection-437.sayable.md).[tenantAccessToken](../interfaces/reflection-1716.reflection-437.sayable.md#tenantaccesstoken)*

*Defined in [src/Botable.ts:47](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L47)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[defaultMaxListeners](reflection-1716.reflection-437.botable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:45

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[addListener](reflection-1716.reflection-437.botable.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:547

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Protected` beforeSay

▸ **beforeSay**(): *void*

*Defined in [src/Botable.ts:65](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L65)*

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[emit](reflection-1716.reflection-437.botable.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:557

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[eventNames](reflection-1716.reflection-437.botable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:562

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[getMaxListeners](reflection-1716.reflection-437.botable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:554

**Returns:** *number*

___

### `Abstract` init

▸ **init**(): *Promise‹unknown›*

*Defined in [src/Botable.ts:63](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L63)*

**Returns:** *Promise‹unknown›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[listenerCount](reflection-1716.reflection-437.botable.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[listeners](reflection-1716.reflection-437.botable.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[off](reflection-1716.reflection-437.botable.md#off)*

Defined in node_modules/@types/node/globals.d.ts:551

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: [APP_OPEN](../enums/types.eventtype.md#app_open), `fn`: function): *this*

*Overrides void*

*Defined in [src/Botable.ts:170](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L170)*

回调事件

**Parameters:**

▪ **event**: *[APP_OPEN](../enums/types.eventtype.md#app_open)*

▪ **fn**: *function*

▸ (`data`: [EventAppOpen](../interfaces/types.eventappopen.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [EventAppOpen](../interfaces/types.eventappopen.md) |

**Returns:** *this*

▸ **on**(`event`: [MESSAGE](../enums/types.eventtype.md#message), `fn`: function): *this*

*Overrides void*

*Defined in [src/Botable.ts:171](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L171)*

**Parameters:**

▪ **event**: *[MESSAGE](../enums/types.eventtype.md#message)*

▪ **fn**: *function*

▸ (`data`: [EventMessage](../interfaces/types.eventmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [EventMessage](../interfaces/types.eventmessage.md) |

**Returns:** *this*

▸ **on**(`event`: [REMOVE_BOT](../enums/types.eventtype.md#remove_bot) | [ADD_BOT](../enums/types.eventtype.md#add_bot), `fn`: function): *this*

*Overrides void*

*Defined in [src/Botable.ts:172](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L172)*

**Parameters:**

▪ **event**: *[REMOVE_BOT](../enums/types.eventtype.md#remove_bot) | [ADD_BOT](../enums/types.eventtype.md#add_bot)*

▪ **fn**: *function*

▸ (`data`: [EventRemoveAddBot](../interfaces/types.eventremoveaddbot.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [EventRemoveAddBot](../interfaces/types.eventremoveaddbot.md) |

**Returns:** *this*

▸ **on**(`event`: [P2P_CHAT_CREATE](../enums/types.eventtype.md#p2p_chat_create), `fn`: function): *this*

*Overrides void*

*Defined in [src/Botable.ts:176](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L176)*

**Parameters:**

▪ **event**: *[P2P_CHAT_CREATE](../enums/types.eventtype.md#p2p_chat_create)*

▪ **fn**: *function*

▸ (`data`: [EventP2PCreateChat](../interfaces/types.eventp2pcreatechat.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [EventP2PCreateChat](../interfaces/types.eventp2pcreatechat.md) |

**Returns:** *this*

▸ **on**(`event`: [ADD_USER_TO_CHAT](../enums/types.eventtype.md#add_user_to_chat) | [REMOVE_USER_FROM_CHAT](../enums/types.eventtype.md#remove_user_from_chat) | [REVOKE_ADD_USER_FROM_CHAT](../enums/types.eventtype.md#revoke_add_user_from_chat), `fn`: function): *this*

*Overrides void*

*Defined in [src/Botable.ts:180](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L180)*

**Parameters:**

▪ **event**: *[ADD_USER_TO_CHAT](../enums/types.eventtype.md#add_user_to_chat) | [REMOVE_USER_FROM_CHAT](../enums/types.eventtype.md#remove_user_from_chat) | [REVOKE_ADD_USER_FROM_CHAT](../enums/types.eventtype.md#revoke_add_user_from_chat)*

▪ **fn**: *function*

▸ (`data`: [EventUserInAndOutChat](../interfaces/types.eventuserinandoutchat.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [EventUserInAndOutChat](../interfaces/types.eventuserinandoutchat.md) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[once](reflection-1716.reflection-437.botable.md#once)*

Defined in node_modules/@types/node/globals.d.ts:549

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[prependListener](reflection-1716.reflection-437.botable.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[prependOnceListener](reflection-1716.reflection-437.botable.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:561

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[rawListeners](reflection-1716.reflection-437.botable.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  readMessage

▸ **readMessage**(`params`: object): *Promise‹[ReadMessageResponse](../interfaces/types.readmessageresponse.md)›*

*Defined in [src/Botable.ts:127](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L127)*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`messageId` | string |

**Returns:** *Promise‹[ReadMessageResponse](../interfaces/types.readmessageresponse.md)›*

___

###  recallMessage

▸ **recallMessage**(`params`: object): *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

*Defined in [src/Botable.ts:117](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L117)*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`messageId` | string |

**Returns:** *Promise‹[CommonResponse](../interfaces/types.commonresponse.md)›*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[removeAllListeners](reflection-1716.reflection-437.botable.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:552

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[removeListener](reflection-1716.reflection-437.botable.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:550

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  sayCardMessage

▸ **sayCardMessage**(`params`: [CardMessageParams](../modules/reflection-1716.reflection-437.md#cardmessageparams)): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Implementation of [Sayable](../interfaces/reflection-1716.reflection-437.sayable.md)*

*Defined in [src/Botable.ts:153](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [CardMessageParams](../modules/reflection-1716.reflection-437.md#cardmessageparams) |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  sayChatCard

▸ **sayChatCard**(`params`: [ShareChatCardParams](../modules/reflection-1716.reflection-437.md#sharechatcardparams)): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Implementation of [Sayable](../interfaces/reflection-1716.reflection-437.sayable.md)*

*Defined in [src/Botable.ts:107](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ShareChatCardParams](../modules/reflection-1716.reflection-437.md#sharechatcardparams) |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  sayImageMessage

▸ **sayImageMessage**(`params`: [ImageMessageParams](../modules/reflection-1716.reflection-437.md#imagemessageparams)): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Implementation of [Sayable](../interfaces/reflection-1716.reflection-437.sayable.md)*

*Defined in [src/Botable.ts:83](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ImageMessageParams](../modules/reflection-1716.reflection-437.md#imagemessageparams) |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  sayRichTextMessage

▸ **sayRichTextMessage**(`params`: [RichTextMessageParams](../modules/reflection-1716.reflection-437.md#richtextmessageparams)): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Implementation of [Sayable](../interfaces/reflection-1716.reflection-437.sayable.md)*

*Defined in [src/Botable.ts:95](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [RichTextMessageParams](../modules/reflection-1716.reflection-437.md#richtextmessageparams) |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  sayTextMessage

▸ **sayTextMessage**(`params`: [TextMessageParams](../modules/reflection-1716.reflection-437.md#textmessageparams)): *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

*Implementation of [Sayable](../interfaces/reflection-1716.reflection-437.sayable.md)*

*Defined in [src/Botable.ts:71](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | [TextMessageParams](../modules/reflection-1716.reflection-437.md#textmessageparams) |

**Returns:** *Promise‹[SendMessageResponse](../interfaces/types.sendmessageresponse.md)›*

___

###  sayUrgentMessage

▸ **sayUrgentMessage**(`params`: object): *Promise‹[UrgentMessageResponse](../interfaces/types.urgentmessageresponse.md)›*

*Defined in [src/Botable.ts:139](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/Botable.ts#L139)*

**Parameters:**

▪ **params**: *object*

Name | Type |
------ | ------ |
`messageId` | string |
`openIds` | string[] |
`urgentType` | [UrgentType](../enums/types.urgenttype.md) |

**Returns:** *Promise‹[UrgentMessageResponse](../interfaces/types.urgentmessageresponse.md)›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[setMaxListeners](reflection-1716.reflection-437.botable.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:553

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Botable](reflection-1716.reflection-437.botable.md).[listenerCount](reflection-1716.reflection-437.botable.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:44

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
