---
title: API介绍
lang: zh-CN
---

# API介绍

在此公开的WFA相关数据的API遵循[REST](https://baike.baidu.com/item/rest/6330506?fr=aladdin)设计模式，采用`GET`,`PUT`等方式区分请求。

所以当你碰到请求地址相同时，请留意请求方式。

在你请求资源之前，你必须要连接服务器获取授权的令牌，以后你每次请求API时，都必须在请求头中携带该令牌，否则服务器将返回`401`的未授权错误

对于如聊天机器人一类的即时应用，开发者可以在本机先行请求一次令牌，并将令牌保存下来，定期更换即可。

:::tip
值得一提的是，令牌的有效期通常是自请求之时起的2周内，所以定期重新发起请求获取新的令牌是很有必要的哟~
:::

在API构建之初，本意是按照[OAuth2](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)的模式，使用OIDC进行鉴权，但那样太过严格，对于小型应用并不算友好，所以改为了较为宽松的<abbr title="Client Credentials">`客户端授权`</abbr>模式

## API根域名

`https://api.richasy.cn`

## 游戏平台可选值

- `pc` (Windows平台/Steam)

- `ps4` (PS4平台)

- `xb1` （Xbox平台）

- `ns`（Nintendo Switch 平台）