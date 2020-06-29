[lark-sdk](../README.md) › [Globals](../globals.md) › [types](../modules/types.md) › [ButtonElement](types.buttonelement.md)

# Interface: ButtonElement

button 元素
```javascript
  {
"tag":"button",
"text":{
"tag":"lark_md",
"content":"default style"
},
"type":"default",
"value":{
"key":"value"
}
}
```

## Hierarchy

* **ButtonElement**

## Index

### Properties

* [confirm](types.buttonelement.md#optional-confirm)
* [multi_url](types.buttonelement.md#optional-multi_url)
* [tag](types.buttonelement.md#tag)
* [text](types.buttonelement.md#text)
* [type](types.buttonelement.md#optional-type)
* [url](types.buttonelement.md#optional-url)
* [value](types.buttonelement.md#optional-value)

## Properties

### `Optional` confirm

• **confirm**? : *[ConfirmObject](types.confirmobject.md)*

*Defined in [src/types/CardMessage.ts:165](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/CardMessage.ts#L165)*

___

### `Optional` multi_url

• **multi_url**? : *[UrlObject](types.urlobject.md)*

*Defined in [src/types/CardMessage.ts:162](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/CardMessage.ts#L162)*

___

###  tag

• **tag**: *"button"*

*Defined in [src/types/CardMessage.ts:159](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/CardMessage.ts#L159)*

___

###  text

• **text**: *[TextObject](../modules/types.md#textobject)*

*Defined in [src/types/CardMessage.ts:160](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/CardMessage.ts#L160)*

___

### `Optional` type

• **type**? : *"default" | "primary" | "danger"*

*Defined in [src/types/CardMessage.ts:163](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/CardMessage.ts#L163)*

___

### `Optional` url

• **url**? : *undefined | string*

*Defined in [src/types/CardMessage.ts:161](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/CardMessage.ts#L161)*

___

### `Optional` value

• **value**? : *Record‹string, string›*

*Defined in [src/types/CardMessage.ts:164](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/types/CardMessage.ts#L164)*
