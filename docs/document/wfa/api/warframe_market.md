---
title: WM 价格查询
lang: zh-CN
date: 2019/2/3 18:45:12
type: post
---

# Warframe Market 价格查询API

:::tip
API的数据来源为[Warframe Market](https://warframe.market)，经由开发者进行了二次包装
:::


|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/wfa/basic/{platform}/wm/{query}|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "orders": [
        {
            "userName": "dragonquest",
            "platinum": 150,
            "quantity": 1,
            "status": "offline",
            "itemName": "Ash Prime Systems",
            "mod_Level": 0,
            "order_Type": "sell"
        },
        ...
    ],
    "info": {
        "ducats": 65,
        "tradingTax": 4000,
        "advicePrice": 87
    }
}
```

### 数据说明

- `platform` : 平台代码，可选值参照[游戏平台可选值](/document/wfa/api/api_doc.html#游戏平台可选值)

- `query` : 物品代码，物品的代码必须搭配[附录1](/document/wfa/api/appendix1.html#交易词典)中的交易词典使用

- `orders` : 该条目下的所有货品信息，其中具体字段已进行优化，简单直接，不再赘述

- `info` : 该条目的基础信息，其中`ducats`和`tradingTax`分别指杜卡德金币价值以及交易税，但有些时候它们并不准确。`advicePrice`是我添加的一个字段，是根据期望算法算出来的理想价格，所以越是热门的物品价格相对越精确。

---