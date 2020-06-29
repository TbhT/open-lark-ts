[lark-sdk](../README.md) › [Globals](../globals.md) › [types](../modules/types.md) › [SendMessageBatchResponse](types.sendmessagebatchresponse.md)

# Interface: SendMessageBatchResponse

## Hierarchy

* [CommonResponse](types.commonresponse.md)

  ↳ **SendMessageBatchResponse**

## Index

### Properties

* [code](types.sendmessagebatchresponse.md#code)
* [data](types.sendmessagebatchresponse.md#data)
* [msg](types.sendmessagebatchresponse.md#msg)

## Properties

###  code

• **code**: *[ErrorCode](../modules/types.md#errorcode)*

*Inherited from [CommonResponse](types.commonresponse.md).[code](types.commonresponse.md#code)*

*Defined in [src/types/Response.ts:4](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/Response.ts#L4)*

___

###  data

• **data**: *object*

*Defined in [src/types/Response.ts:168](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/Response.ts#L168)*

#### Type declaration:

* **invalid_department_ids**: *string[]*

* **invalid_open_ids**: *string[]*

* **invalid_user_ids**: *string[]*

* **message_id**: *string*

___

###  msg

• **msg**: *string*

*Inherited from [CommonResponse](types.commonresponse.md).[msg](types.commonresponse.md#msg)*

*Defined in [src/types/Response.ts:5](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/Response.ts#L5)*
