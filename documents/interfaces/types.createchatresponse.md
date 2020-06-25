[lark-sdk](../README.md) › [Globals](../globals.md) › [types](../modules/types.md) › [CreateChatResponse](types.createchatresponse.md)

# Interface: CreateChatResponse

## Hierarchy

* [CommonResponse](types.commonresponse.md)

  ↳ **CreateChatResponse**

## Index

### Properties

* [code](types.createchatresponse.md#code)
* [data](types.createchatresponse.md#data)
* [msg](types.createchatresponse.md#msg)

## Properties

###  code

• **code**: *[ErrorCode](../modules/types.md#errorcode)*

*Inherited from [CommonResponse](types.commonresponse.md).[code](types.commonresponse.md#code)*

*Defined in [src/types/Response.ts:4](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/Response.ts#L4)*

___

###  data

• **data**: *object*

*Defined in [src/types/Response.ts:86](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/Response.ts#L86)*

#### Type declaration:

* **chat_id**: *string*

* **invalid_open_ids**: *string[]*

* **invalid_user_ids**: *string[]*

___

###  msg

• **msg**: *string*

*Inherited from [CommonResponse](types.commonresponse.md).[msg](types.commonresponse.md#msg)*

*Defined in [src/types/Response.ts:5](https://github.com/TbhT/lark-sdk/blob/e3605bb/src/types/Response.ts#L5)*
