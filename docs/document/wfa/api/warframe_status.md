---
title: Warframe 游戏信息
lang: zh-CN
---

# Warframe 游戏信息API

:::tip
API数据来源：[WFCD/warframe-worldstate-parser](https://github.com/WFCD/warframe-worldstate-parser)    
国外API<small>（缺点是不能跨域，优点是速度快，适合本地应用）</small>：[WarframeStat.us API](https://docs.warframestat.us/)
:::

## 请求路由前缀

/wfa/basic/{platform}

- `platform` : 平台代码，可选值参照[游戏平台可选值](/document/wfa/api#游戏平台可选值)

## 希图斯信息

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**cetusStatus**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "id":"cetusCycle1542633780000",
    "expiry":"2018-11-19T13:23:00.000Z",
    "isDay":false,
    "timeLeft":"1m 16s",
    "isCetus":true,
    "shortString":"1m to Day"
}
```

### 数据说明

- `expiry` : 过期时间戳，UTC时间字符串，请自行转换为本地时间

- `isDay` : 指示当前是否为白天的字段

---

## 希图斯赏金任务

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**ostron**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
[
    {
        "name":"TierATableB",
        "minLevel":5,
        "maxLevel":15,
        "rewards":[
            {
                "id":0,
                "type":"common",
                "zh":"1500 现金匣",
                "en":"1500 Credit Cache"
            }
            ...
        ]
    }
    ...
]
```

### 数据说明

- `name` : 赏金任务标识，`Tier`指其序列，如TierA代指赏金一；`Table`指其轮次，如TableB代指第二轮

- `rewards` : 当前赏金任务的奖励列表

- `type` : 奖励的稀有度；`common`指常见，`uncommon`指罕见，`rare`指稀有

---

## 地球信息

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**earthStatus**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "id":"earthCycle1542643200000",
    "expiry":"2018-11-19T16:00:00.457Z",
    "isDay":false,
    "timeLeft":"2h 6m 16s"
}
```

### 数据说明

- `expiry` : 过期时间戳，UTC时间字符串，请自行转换为本地时间

- `isDay` : 指示当前是否为白天的字段

---

## 福尔图娜信息

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**vallisStatus**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "id":"vallisCycle1542634800000",
    "expiry":"2018-11-19T14:00:28.000Z",
    "isWarm":false,
    "timeLeft":"4m 43s",
    "shortString":"4m to Warm"
}
```

### 数据说明

- `expiry` : 过期时间戳，UTC时间字符串，请自行转换为本地时间

- `isWarm` : 指示当前是否温暖的字段

---

## 福尔图娜赏金任务

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**solaris**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
[
    {
        "name":"TierATableB",
        "minLevel":5,
        "maxLevel":15,
        "rewards":[
            {
                "id":0,
                "type":"common",
                "zh":"1500 现金匣",
                "en":"1500 Credit Cache"
            }
            ...
        ]
    }
    ...
]
```

### 数据说明

- `name` : 赏金任务标识，`Tier`指其序列，如TierA代指赏金一；`Table`指其轮次，如TableB代指第二轮

- `rewards` : 当前赏金任务的奖励列表

- `type` : 奖励的稀有度；`common`指常见，`uncommon`指罕见，`rare`指稀有

---

## 入侵建造进度

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**constructionProgress**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "id": "154272211720241.50863797886",
    "fomorianProgress": "41.51",
    "razorbackProgress": "44.32",
    "unknownProgress": "0.00"
}
```

### 数据说明

- `fomorianProgress` : 巨人战舰的建造进度，百分比

- `razorbackProgress` : 利刃豺狼的建造进度，百分比

---

## 新闻

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**news**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
[
    {
        "id": "5b918a9757904a1a5421dfd2",
        "message": "La Máscara de Revenant: Actualización 23.7.0",
        "link": "https://forums.warframe.com/topic/1006322-la-m%C3%A1scara-de-revenant-actualizaci%C3%B3n-2370/",
        "imageLink": "https://content.invisioncic.com/Mwarframe/monthly_2018_09/imageproxy.jpg.86df11d2fae5ea80ca8dce1ef3c53ce1.jpg",
        "priority": false,
        "date": "2018-09-06T20:13:57Z",
        "eta": "74d 17h 43m 19s ago",
        "update": false,
        "primeAccess": false,
        "stream": false,
        "translations": {
            "es": "La Máscara de Revenant: Actualización 23.7.0"
        },
        "asString": "[74d 17h 43m 19s ago] [La Máscara de Revenant: Actualización 23.7.0](https://forums.warframe.com/topic/1006322-la-m%C3%A1scara-de-revenant-actualizaci%C3%B3n-2370/)"
    },
    ...
]
```

### 数据说明

- `link` : 新闻的指向链接

- `imageLink` : 新闻配图的图片地址

- `date` : 新闻的发布日期，UTC时间字符串，请自行转换为本地时间

- `translations` : 这里有多种语言可选，其中`en`和`zh`用的会比较多，有时会出现连`en`都没有的情况，这时就需要显示`message`的信息

---

## 虚空商人

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**voidTrader**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "id": "5b3f70c1be87e4524f04d5ec",
    "activation": "2018-11-30T14:00:00Z",
    "startString": "9d 23h 55m 43s",
    "expiry": "2018-12-02T14:00:00Z",
    "active": true,
    "character": "Baro Ki'Teer",
    "location": "Kronia Relay (Saturn)",
    "inventory": [
        {
            "item":"something...",
            "ducats": 200,
            "credits": 500000
        }
        ...
    ],
    "psId": "5b3f70c1be87e4524f04d5ec0",
    "endString": "11d 23h 55m 43s"
}
```

### 数据说明

- `activation` : 当前状态的起始时间

- `expiry` : 当前状态的结束时间

- `active` : 用以标识当前虚空商人是否抵达中继站。但由于货物数据往往会提前3-5分钟显示，所以判断`inventory`是否为空将更为有效

- `location` : 虚空商人即将或已经抵达的中继站

- `inventory` : 虚空商人的货物列表，包含物品名、杜卡德金币及现金的信息

---

## Darvo每日特惠

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**darvo**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "item": "Dual Cleavers",
    "expiry": "2018-11-20T18:59:00Z",
    "originalPrice": 225,
    "salePrice": 90,
    "total": 125,
    "sold": 102,
    "id": "DualCleaverWeapon1542740340000",
    "eta": "4h 48m 42s",
    "discount": 60
}
```

### 数据说明

- `item` : 特价物品名

- `expiry` : 特惠结束的时间

- `originalPrice` : 物品在游戏商店的初始价格（白金）

- `salePrice` : 打折后的价格（白金）

- `total`/`sold` : 全部数量/已经售出的数量

- `discount` : 折扣（百分比）

---

## 警报

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**alert**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
[
    {
        "id": "5bf40dc2ccc630ea66f73c5e",
        "activation": "2018-11-20T13:40:04.374Z",
        "expiry": "2018-11-20T14:24:38.872Z",
        "mission": {
            "node": "Abaddon (Europa)",
            "type": "Hijack",
            "faction": "Corpus",
            "reward": {
                "items": [],
                "countedItems": [],
                "credits": 9200,
                "asString": "9200cr",
                "itemString": "",
                "thumbnail": "https://i.imgur.com/JCKyUXJ.png",
                "color": 15844367
            },
            "minEnemyLevel": 24,
            "maxEnemyLevel": 26,
            "maxWaveNum": 0,
            "nightmare": false,
            "archwingRequired": false
        },
        "expired": false,
        "eta": "11m 21s",
        "rewardTypes": [
            "credits"
        ]
    },
    ...
]
```

### 数据说明

- `expiry` : 任务结束的时间

- `node` : 警报所处的节点，括号内是星球名

- `type` : 任务类型

- `faction` : 阵营

- `reward` : 警报的奖励；由于每个警报都有现金奖励，所以reward内的`credits`将单独标明现金数目，关于对奖励的条目的翻译，可见[附录1](#附录1)

- `items`/`countedItems` : 两者都是针对非现金奖励的，如果不存在则为空数组，如果有非数目标识的，如噩梦MOD，将会在`items`中以字符串形式显示条目名，反之，如铁氧体这类需要标明数目的奖励则会出现在`countedItems`中，会以`count`字段表明数目，`type`字段标明奖励条目

- `thumbnail` : 奖励的图片

- `nightmare`/`archwingRequired` : 分别表示噩梦和空战

---

## 入侵

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**invasion**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
[
    {
        "id": "5bf31641c0c978dc7963c05d",
        "activation": "2018-11-19T20:00:01.57Z",
        "startString": "-18h 24m 15s",
        "node": "Psamathe (Neptune)",
        "desc": "Phorid Manifestation",
        "attackerReward": {
            "items": [],
            "countedItems": [],
            "credits": 0,
            "asString": "",
            "itemString": "",
            "thumbnail": "https://i.imgur.com/JCKyUXJ.png",
            "color": 15844367
        },
        "attackingFaction": "Infested",
        "defenderReward": {
            "items": [],
            "countedItems": [
                {
                    "count": 3,
                    "type": "Fieldron"
                }
            ],
            "credits": 0,
            "asString": "3 Fieldron",
            "itemString": "3 Fieldron",
            "thumbnail": "https://i.imgur.com/qlrlfft.png",
            "color": 5068118
        },
        "defendingFaction": "Corpus",
        "vsInfestation": true,
        "count": -30115,
        "requiredRuns": 30000,
        "completion": -0.38333333333333552,
        "completed": true,
        "eta": "-4m 13s",
        "rewardTypes": [
            "fieldron"
        ]
    },
    ...
]
```

### 数据说明

一些重复的东西在[警报](#警报)中有，就不介绍了。

同时需要注意的是，通过API获取的数据有一些是无效信息，通过`completed`字段甄别，凡是已完成的，则不予显示

- `vsInfestation` : 是否跟I佬对抗，如果是的话，则入侵方必然为I系，同时无入侵奖励

- `completion` : 进度，小数，转换成百分比自行X100

---

## 裂缝

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**fissure**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
[
    {
        "id": "5bf403ea132f6c2537a3a98e",
        "activation": "2018-11-20T12:54:01.934Z",
        "startString": "-1h 38m 14s",
        "expiry": "2018-11-20T14:53:24.227Z",
        "active": true,
        "node": "Nimus (Eris)",
        "missionType": "Survival",
        "enemy": "Infested",
        "tier": "Axi",
        "tierNum": 4,
        "expired": false,
        "eta": "21m 7s"
    },
    ...
]
```

### 数据说明

- `expiry` : 裂缝结束的时间

- `node` : 裂缝所处的节点，括号内是星球名

- `missionType` : 任务类型

- `tier`/`tierNum` : 纪元的不同表示，`tier`是纪元的英文表示，`tierNum`则是数字表示，比如4就表示后纪

---

## 突击

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**sortie**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "id": "5bf2ec1172d956a758834397",
    "activation": "2018-11-19T17:00:01.182Z",
    "startString": "-21h 38m 15s",
    "expiry": "2018-11-20T16:59:00Z",
    "active": true,
    "rewardPool": "Sortie Rewards",
    "variants": [
        {
            "boss": "Deprecated",
            "planet": "Deprecated",
            "missionType": "Spy",
            "modifier": "Eximus Stronghold",
            "modifierDescription": "Eximus units have a much higher spawn rate in this mission. Some of their auras stack.",
            "node": "Palus (Pluto)"
        },
        ...
    ],
    "boss": "Ambulas",
    "faction": "Corpus",
    "expired": false,
    "eta": "2h 20m 43s"
}
```

### 数据说明

- `boss` : 突击的BOSS

- `faction` : 阵营

- `variants` : 里面是三个突击任务

- `modifier`/`modifierDescription` : 分别表示任务的强化类型和对强化类型的说明，关于对强化类型的翻译，可见[附录2](appendix_2.html)

---

## 活动/战术警报/突发事件

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**event**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
[
    {
        "id": "string",
        "expiry": "string",
        "faction": "string",
        "description": "string",
        "node": "string",
        "health": "string",
        ...
    },
    ...
]
```

### 数据说明

事件下的数据结构比较散漫，但共有的字段如上所示。

- `expiry` : 理论过期事件，之所以说是理论，是因为在很多战术警报中，`health`才是决定因素

- `health` : 任务的剩余点数，不过有些事件并没有该字段，这时就要利用`expiry`进行综合判断

---

## 追随者

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**stalker**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
[
    {
        "id": "5c4a15a223e62b6c12aafcf6",
        "agentType": "Angst",
        "locationTag": "Angst",
        "rank": 35,
        "healthPercent": 0.899469922,
        "fleeDamage": 50000,
        "lastDiscoveredTime": "2019-01-26T01:42:26.476Z",
        "lastDiscoveredAt": "Adaro (Sedna)",
        "isDiscovered": false,
        "isUsingTicketing": false,
        "pid": "5c4a15a223e62b6c12aafcf6false"
    }
]
```

### 数据说明

- `agentType` : 小小黑的名字

- `healthPercent` : 血量，乘100就是血量百分比

- `lastDiscoveredTime`/`lastDiscoveredAt` : 最近一次发现时间/最近一次发现地点

- `isDiscovered`: 是否出现

---

## 午夜电波

|        请求地址       |请求方式|请求类型|返回数据|
|:--------------------------------|:----:|:------|:----:|
|/**nightwave**|  GET |   无  | JSON |

### 请求结构

```javascript
Header : {
    Authorization: 'Bearer xxxxxxxxxxxxxxxxxx'
}
```

### 返回结构

```json
{
    "id": "nightwave1557100800000",
    "activation": "2019-02-25T00:00:00.000Z",
    "startString": "-7d 2h 46m 12s",
    "expiry": "2019-05-06T00:00:00.000Z",
    "active": true,
    "season": 0,
    "tag": "Radio Legion Syndicate",
    "phase": 0,
    "params": {
        "wgsc": 2,
        "wsr": 0.01
    },
    "possibleChallenges": [],
    "activeChallenges": [{
        "id": "000100000000000000000016",
        "activation": "2019-03-02T00:00:00.000Z",
        "startString": "-2d 2h 46m 12s",
        "expiry": "2019-03-05T00:00:00.000Z",
        "active": true,
        "isDaily": true,
        "isElite": false,
        "desc": "Pick up 8 Mods",
        "title": "Shiny",
        "reputation": 1000
    }
	...],
    "rewardTypes": ["credits"]
}

```

### 数据说明

- `activeChallenges` : 当前的午夜电波任务

- `activeChallenges.active` : 指示该任务是否正在进行

- `activeChallenges.isDaily` : 是否为日常任务（倘若该任务为周常任务，则不存在该字段）

- `activeChallenges.isElite`: 是否为精英任务

- `activeChallenges.reputation`: 该任务的声望值

- `activeChallenges.title`/`activeChallenges.desc`:该任务的标题/描述。关于标题/描述的翻译，参见[附录1](./appendix_1)内的`WF_NightWave`表

---



