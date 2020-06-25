[lark-sdk](../README.md) › [Globals](../globals.md) › [types](../modules/types.md) › [EventMessage](types.eventmessage.md)

# Interface: EventMessage

## Hierarchy

* **EventMessage**

## Index

### Properties

* [app_id](types.eventmessage.md#app_id)
* [chat_type](types.eventmessage.md#chat_type)
* [image_height](types.eventmessage.md#optional-image_height)
* [image_key](types.eventmessage.md#optional-image_key)
* [image_keys](types.eventmessage.md#optional-image_keys)
* [image_url](types.eventmessage.md#optional-image_url)
* [image_width](types.eventmessage.md#optional-image_width)
* [is_mention](types.eventmessage.md#is_mention)
* [msg_list](types.eventmessage.md#optional-msg_list)
* [msg_type](types.eventmessage.md#msg_type)
* [open_chat_id](types.eventmessage.md#open_chat_id)
* [open_id](types.eventmessage.md#open_id)
* [open_message_id](types.eventmessage.md#open_message_id)
* [parent_id](types.eventmessage.md#parent_id)
* [root_id](types.eventmessage.md#root_id)
* [tenant_key](types.eventmessage.md#tenant_key)
* [text](types.eventmessage.md#optional-text)
* [text_without_at_bot](types.eventmessage.md#optional-text_without_at_bot)
* [title](types.eventmessage.md#optional-title)
* [type](types.eventmessage.md#type)

## Properties

###  app_id

• **app_id**: *string*

*Defined in [src/types/CallbackEvent.ts:18](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L18)*

___

###  chat_type

• **chat_type**: *"private" | "group"*

*Defined in [src/types/CallbackEvent.ts:26](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L26)*

___

### `Optional` image_height

• **image_height**? : *undefined | string*

*Defined in [src/types/CallbackEvent.ts:41](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L41)*

___

### `Optional` image_key

• **image_key**? : *undefined | string*

*Defined in [src/types/CallbackEvent.ts:44](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L44)*

___

### `Optional` image_keys

• **image_keys**? : *string[]*

*Defined in [src/types/CallbackEvent.ts:37](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L37)*

___

### `Optional` image_url

• **image_url**? : *undefined | string*

*Defined in [src/types/CallbackEvent.ts:43](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L43)*

___

### `Optional` image_width

• **image_width**? : *undefined | string*

*Defined in [src/types/CallbackEvent.ts:42](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L42)*

___

###  is_mention

• **is_mention**: *boolean*

*Defined in [src/types/CallbackEvent.ts:30](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L30)*

___

### `Optional` msg_list

• **msg_list**? : *[EventMessageMergeForward](types.eventmessagemergeforward.md)[]*

*Defined in [src/types/CallbackEvent.ts:47](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L47)*

___

###  msg_type

• **msg_type**: *"text" | "post" | "image" | "file" | "merge_forward"*

*Defined in [src/types/CallbackEvent.ts:27](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L27)*

___

###  open_chat_id

• **open_chat_id**: *string*

*Defined in [src/types/CallbackEvent.ts:25](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L25)*

___

###  open_id

• **open_id**: *string*

*Defined in [src/types/CallbackEvent.ts:28](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L28)*

___

###  open_message_id

• **open_message_id**: *string*

*Defined in [src/types/CallbackEvent.ts:29](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L29)*

___

###  parent_id

• **parent_id**: *string*

*Defined in [src/types/CallbackEvent.ts:24](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L24)*

___

###  root_id

• **root_id**: *string*

*Defined in [src/types/CallbackEvent.ts:23](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L23)*

___

###  tenant_key

• **tenant_key**: *string*

*Defined in [src/types/CallbackEvent.ts:19](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L19)*

___

### `Optional` text

• **text**? : *undefined | string*

*Defined in [src/types/CallbackEvent.ts:33](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L33)*

___

### `Optional` text_without_at_bot

• **text_without_at_bot**? : *undefined | string*

*Defined in [src/types/CallbackEvent.ts:34](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L34)*

___

### `Optional` title

• **title**? : *undefined | string*

*Defined in [src/types/CallbackEvent.ts:38](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L38)*

___

###  type

• **type**: *"message"*

*Defined in [src/types/CallbackEvent.ts:20](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/CallbackEvent.ts#L20)*
