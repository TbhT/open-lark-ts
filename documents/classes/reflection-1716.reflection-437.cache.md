[lark-sdk](../README.md) › [Globals](../globals.md) › [](../modules/reflection-1716.md) › [](../modules/reflection-1716.reflection-437.md) › [Cache](reflection-1716.reflection-437.cache.md)

# Class: Cache

## Hierarchy

* **Cache**

## Index

### Constructors

* [constructor](reflection-1716.reflection-437.cache.md#constructor)

### Properties

* [cache](reflection-1716.reflection-437.cache.md#private-cache)
* [expiredTime](reflection-1716.reflection-437.cache.md#private-expiredtime)
* [maxSize](reflection-1716.reflection-437.cache.md#readonly-maxsize)
* [ttl](reflection-1716.reflection-437.cache.md#readonly-ttl)

### Accessors

* [full](reflection-1716.reflection-437.cache.md#full)
* [length](reflection-1716.reflection-437.cache.md#length)

### Methods

* [[Symbol.iterator]](reflection-1716.reflection-437.cache.md#[symbol.iterator])
* [add](reflection-1716.reflection-437.cache.md#add)
* [delete](reflection-1716.reflection-437.cache.md#delete)
* [deleteExpired](reflection-1716.reflection-437.cache.md#private-deleteexpired)
* [evict](reflection-1716.reflection-437.cache.md#evict)
* [expired](reflection-1716.reflection-437.cache.md#expired)
* [get](reflection-1716.reflection-437.cache.md#get)
* [has](reflection-1716.reflection-437.cache.md#has)
* [keys](reflection-1716.reflection-437.cache.md#keys)
* [pop](reflection-1716.reflection-437.cache.md#pop)
* [set](reflection-1716.reflection-437.cache.md#set)

## Constructors

###  constructor

\+ **new Cache**(`maxSize`: number, `ttl`: number): *[Cache](reflection-1716.reflection-437.cache.md)*

*Defined in [src/Cache.ts:11](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L11)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxSize` | number | 256 |
`ttl` | number | 0 |

**Returns:** *[Cache](reflection-1716.reflection-437.cache.md)*

## Properties

### `Private` cache

• **cache**: *Map‹string, unknown›*

*Defined in [src/Cache.ts:9](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L9)*

___

### `Private` expiredTime

• **expiredTime**: *Map‹string, number›*

*Defined in [src/Cache.ts:11](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L11)*

___

### `Readonly` maxSize

• **maxSize**: *number*

*Defined in [src/Cache.ts:5](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L5)*

___

### `Readonly` ttl

• **ttl**: *number*

*Defined in [src/Cache.ts:7](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L7)*

## Accessors

###  full

• **get full**(): *boolean*

*Defined in [src/Cache.ts:39](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L39)*

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Defined in [src/Cache.ts:20](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L20)*

**Returns:** *number*

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator*

*Defined in [src/Cache.ts:28](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L28)*

**Returns:** *Generator*

___

###  add

▸ **add**(`key`: string, `value`: unknown, `ttl?`: undefined | number): *void*

*Defined in [src/Cache.ts:56](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | unknown |
`ttl?` | undefined &#124; number |

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: string): *boolean*

*Defined in [src/Cache.ts:79](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

### `Private` deleteExpired

▸ **deleteExpired**(): *number*

*Defined in [src/Cache.ts:119](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L119)*

**Returns:** *number*

___

###  evict

▸ **evict**(): *number*

*Defined in [src/Cache.ts:93](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L93)*

**Returns:** *number*

___

###  expired

▸ **expired**(`key`: string, `expiredOn?`: undefined | number): *boolean*

*Defined in [src/Cache.ts:138](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`expiredOn?` | undefined &#124; number |

**Returns:** *boolean*

___

###  get

▸ **get**(`key`: string): *unknown*

*Defined in [src/Cache.ts:43](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *unknown*

___

###  has

▸ **has**(`key`: string): *boolean*

*Defined in [src/Cache.ts:24](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹string›*

*Defined in [src/Cache.ts:35](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L35)*

**Returns:** *IterableIterator‹string›*

___

###  pop

▸ **pop**(): *[string, unknown] | []*

*Defined in [src/Cache.ts:106](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L106)*

**Returns:** *[string, unknown] | []*

___

###  set

▸ **set**(`key`: string, `value`: unknown, `ttl?`: undefined | number): *void*

*Defined in [src/Cache.ts:62](https://github.com/TbhT/lark-sdk/blob/5ecb791/src/Cache.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | unknown |
`ttl?` | undefined &#124; number |

**Returns:** *void*
