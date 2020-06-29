[lark-sdk](../README.md) › [Globals](../globals.md) › [apis](../modules/apis.md) › [AES256](apis.aes256.md)

# Class: AES256

## Hierarchy

* **AES256**

## Index

### Constructors

* [constructor](apis.aes256.md#constructor)

### Properties

* [key](apis.aes256.md#private-readonly-key)

### Methods

* [decrypt](apis.aes256.md#decrypt)
* [encrypt](apis.aes256.md#encrypt)

## Constructors

###  constructor

\+ **new AES256**(`key`: string): *[AES256](apis.aes256.md)*

*Defined in [src/apis/Callback.ts:11](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Callback.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[AES256](apis.aes256.md)*

## Properties

### `Private` `Readonly` key

• **key**: *Buffer*

*Defined in [src/apis/Callback.ts:11](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Callback.ts#L11)*

## Methods

###  decrypt

▸ **decrypt**(`encrypt`: string): *string*

*Defined in [src/apis/Callback.ts:18](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Callback.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`encrypt` | string |

**Returns:** *string*

___

###  encrypt

▸ **encrypt**(`data`: string): *string*

*Defined in [src/apis/Callback.ts:29](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/apis/Callback.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *string*
