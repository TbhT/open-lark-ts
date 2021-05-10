# open-lark-sdk for Nodejs 
![open-lark-sdk CI](https://github.com/TbhT/lark-sdk/workflows/open-lark-sdk%20CI/badge.svg?branch=master)
![](./coverage/badge-branches.svg)
![](./coverage/badge-functions.svg)
![](./coverage/badge-lines.svg)
![](./coverage/badge-statements.svg)

>  lark sdk有两种使用方式，一种是直接使用api，也即简单的http请求；另一种是使用sdk分装好的bot。

## document
 - [api详细文档](documents/modules/api.md)

## 功能介绍

### 机器人相关

- [x] 发送文本消息
- [x] 获取机器人信息
- [x] 创建群聊
- [x] 添加机器人入群 （owner所在群）
- [x] 删除群里机器人 （owner所拥有的机器人）

### 消息相关（机器人）

- [x] 发送单条文本消息
- [x] 批量发送文本消息
- [x] 发送图片消息
- [x] 撤回机器人发送的消息
- [x] 查询消息已读状态 
- [ ] 转发监听的富文本消息
- [x] 发送富文本消息
- [x] 发送群名片
- [x] 加急消息
- [x] 发送消息卡片

#### 图片相关 (机器人)

- [x] 上传本地图片
- [x] 获取上传的图片

#### OAuth相关

- [x] 获取 app_access_token
- [x] 获取 tenant_access_token
- [x] 获取 app ticket
- [x] 请求身份验证
- [x] 获取登录用户身份
- [x] 刷新access_token

#### 用户相关

- [x] 获取用户基本信息
- [x] 获取用户chat_id

#### 群相关(机器人)

- [x] 获取群列表
- [x] 创建群
- [x] 获取群信息
- [x] 更新群信息
- [x] 解散群
- [x] 邀请用户进群
- [x] 踢出在群中的用户

