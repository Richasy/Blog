---
title: 获取授权令牌
lang: zh-CN
sidebarDepth: 2
---



# 获取授权

:::tip
在此已假定你通过了审核，拿到了你的**通行证**。    
如果你还未申请，请查看[申请权限](/how_to_apply.html)
:::

当你通过审核后，你将获取专属于你的`ClientId`以及`ClientSecret`，请牢牢记住它们，并妥善保管，一旦丢失，不予补办。

## 授权API

|    请求地址   |请求方式|      请求类型        |返回数据|
|:-------------|:----:|:--------------------|:----:|
|**/connect/token**| POST |x-www-form-urlencoded| JSON |

### 请求结构

```javascript
Body : {
    client_id : 'xxxxxxxxxx',
    client_secret : 'xxxxxxxxxx',
    grant_type : 'client_credentials'
}
```

### 返回结构

```json
{
    "access_token" : "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "expires_in" : 1209600,
    "token_type": "Bearer"
}
```

### 数据说明

- `client_id`/`client_secret` : 这是你在申请通过后我给你的身份识别码，仅属于你

- `scope` : 这是你的权限范围，目前对外仅开放`basicProfile`与`happyTest`两种权限类型

- `access_token` : 这是你的令牌，在之后的请求中都必须在`Header`中携带该令牌，关于如何携带令牌进行请求，请参照[使用带验证的请求](/code/web/others/use_request_with_authorize.html)

- `expires_in` : 令牌有效时间，以秒为单位，通常为2周，过期则令牌失效，重新请求则旧令牌失效

- `token_type` : 令牌类型，这是一个请求前缀，需要写在`Header`之中