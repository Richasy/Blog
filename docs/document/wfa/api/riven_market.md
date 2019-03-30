---
title: 紫卡市场信息查询
lang: zh-CN
---

# WFA紫卡市场API

:::tip
请使用者不要恶意疯狂地请求紫卡市场的API，体量小，经不起折腾。    
目前紫卡市场对外开放`获取最新列表`、`定向查询`和`价格建议`这三个功能。
:::

## API前缀

`/wfa/rm`

## 定向查询

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**riven**?Mode={mode}&Count={count}|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx',
    Weapon: 'xxxx', //详见下方的数据说明
    Class: 'xxxxx',
    Platform: 'xxx',
}
```

### 返回结构

```json
[
    {
        "item_Cate": "紫卡类别，如手枪",
        "item_Class": "武器名称，如卡拉克",
        "item_Id": "订单的唯一标识符",
        "item_Level": 8,
        "item_Property": "紫卡属性，其存列方式看数据说明",
        "item_Status": 0,
        "item_ResetNum": 0,
        "item_Dan": 10,
        "item_Polarity": "Madurai",
        "item_Platform": "pc",
        "user_Name": "用户的游戏名",
        "user_Status": 2,
        "user_Level": 1,
        "user_Mail": "用户的注册邮箱",
        "last_In": 1542779769,
        "last_Update": 1542779769,
        "lockingNum": 0,
        "lockingUser": "锁定用户的ID",
        "successUserId": "交易对象的ID",
        "isVeiled": 0,
        "isSell": 1 //是否为卖家
    }
    ...
]
```

### 数据说明

#### 请求头参数

`Weapon`与`Class`字段在发起请求之前，必须将值转化为base64字符串，切记切记！

- `Weapon`: 武器名，如果你需要查询武器，请将武器的全名写进该字段中，别忘了转base64字符串。

- `Class`: 类名，如果你要查找相关武器类别，如步枪、手枪等。共有四类`步枪`/`手枪`/`近战`/`霰弹枪`

- `Mode` : URL查询参数，如果要找未开紫卡，请在填写`Class`的同时，将`Mode`设置为`Veiled`，不是可不填

- `Count` : count字段表示你需要的条目数，如果需要某武器或分类下的全部条目，则可去掉该字段

- `Platform` : 平台代码，可选值参照[游戏平台可选值](/document/wfa/api/api_doc.html#游戏平台可选值)

#### 传回参数

- `item_Level` : 紫卡的强化等级

- `item_Property` : 紫卡属性或紫卡说明，卖家买家意义不同。卖家且非未开紫卡，其格式大致为 "属性1|+23% 属性2|+23%"，属性组内各属性以空格区隔，各属性内以'|'区分属性名和属性值；买家及未开MOD，该字段则用来存放买家或紫卡的说明

- `item_Status` : 订单目前状态，`0`表示在售，`1`表示已完成，`2`表示交易中，`3`表示暂时下架，`4`表示永久下架

- `item_ResetNum`/`item_Dan`/`item_Polarity` : 紫卡的洗卡次数/紫卡的最低段位要求/紫卡的极性

- `item_Platform` : 紫卡所属的游戏平台

- `user_Status` : 用户状态，`0`表示离线，`1`表示在线，`2`表示游戏中，

- `isVeiled`/`isSell` : 是否为未开紫卡/是否为卖家；二者均是`1`表示true，`2`表示false

---

## 获取最新列表

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**lastest**?count={count}|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx',
    Platform: 'xxx',
}
```

### 返回结构

```json
{
    "sell":[
        {
            "item_Cate": "紫卡类别，如手枪",
            "item_Class": "武器名称，如卡拉克",
            "item_Id": "订单的唯一标识符",
            "item_Level": 8,
            "item_Property": "紫卡属性，其存列方式看数据说明",
            "item_Status": 0,
            "item_ResetNum": 0,
            "item_Dan": 10,
            "item_Polarity": "Madurai",
            "item_Platform": "pc",
            "user_Name": "用户的游戏名",
            "user_Status": 2,
            "user_Level": 1,
            "user_Mail": "用户的注册邮箱",
            "last_In": 1542779769,
            "last_Update": 1542779769,
            "lockingNum": 0,
            "lockingUser": "锁定用户的ID",
            "successUserId": "交易对象的ID",
            "isVeiled": 0,
            "isSell": 1 //是否为卖家
        }
        ...
    ],
    "buy":[
        {
            //同上
        }
        ...
    ],
    "total":100
}

```

### 数据说明

该接口采取分页方式进行数据获取，一次回传12个紫卡条目，6个卖家，6个买家。

紫卡条目的详细数据结构在上个API已有说明，不做赘述。

- `count` : 分页器参数，从0开始计数，最高到10。

- `total` : 紫卡市场目前的总紫卡条目存量。

---

## 获取价格建议

:::tip
价格建议源自DE官方提供的数据，开发者对此进行了二次包装，并提供了定向查询的功能
:::

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**advice**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx',
    Platform: 'xxx',
    Weapon: 'xxx'
}
```

### 返回结构

```json
[
    {
        "id": 960,
        "platform": "pc",
        "weapon": "布莱顿",
        "isReRolled": false,
        "min": 10,
        "max": 295,
        "stdDev": 55.572270161335,
        "avg": 66.357142857143,
        "popular": 0.1265
    },
    {
        "id": 987,
        "platform": "pc",
        "weapon": "布莱顿",
        "isReRolled": true,
        "min": 22,
        "max": 750,
        "stdDev": 130.52587146519,
        "avg": 98.354838709677,
        "popular": 0.0934
    }
]
```

### 数据说明

#### 请求头参数

该接口允许调用者通过平台和武器来定向查询某一武器紫卡的价格数值。

- `Weapon`: 武器名，如果你需要查询武器，请将武器的全名写进该字段中，别忘了转base64字符串（武器的标准中文以[附录1](./appendix_1.html)中的WF_Dict词典为准）。

- `Platform` : 平台代码，可选值参照[游戏平台可选值](/document/wfa/api/api_doc.html#游戏平台可选值)

#### 传回参数

- `isReRolled` : 是否洗过

- `min`/`max`: 最低价/最高价

- `stdDev`: 标准差，一个较大的标准差，代表大部分数值和其平均值之间差异较大；一个较小的标准差，代表这些数值较接近平均值。用人话说就是标准差越大，代表这张卡的价格波动越大，其平均值就越难以作为参考依据

- `avg` : 该卡的平均价格

- `popular`: 当前紫卡在所有成交紫卡中的热度