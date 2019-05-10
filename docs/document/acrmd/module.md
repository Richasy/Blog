---
title: Acrylic Markdown功能介绍
lang: zh
date: 2019/3/7 18:45:12
type: post
---

# Acrylic Markdown功能介绍

## 管理结构

软件主要管理层级为：

**项目**-->**组**-->**笔记**

同时，你也可以直接`新建笔记`，或者`打开笔记`，通过这种方式打开的Markdown文件不被算入文件管理体系中，仅留存于`最近打开`列表

## 通过文件夹快速创建项目

在软件首页，有`从文件夹打开`的按钮，选择指定的文件夹后，软件会以所选文件夹为根目录进行遍历，将一级目录设定为组，将一级目录下所有Markdown文件收入该组中。如果根目录内有Markdown文件，则会新建一个`Root`的文件夹来存放这些文档。

![acrmd_project.png](https://storage.live.com/items/51816931BAB0F7A8!12107?authkey=AO7QXpgYo7-5DUU)

通过文件夹创建的项目默认为以下设置：

- 所有组名均为对应一级目录文件夹名
- 颜色默认为灰色（#eeeeee）
- 不论一级目录文件夹下是否还有子文件夹，均忽视文件夹仅提取其中文件
- 所有新建笔记均为对应文件名

## 模板管理

常写博客的人往往会在Markdown文档中引入YAML元数据，这些元数据重复度高，但手敲又颇为费事，故此引入模板。

模板旨在预先写好一些 ***范例***，在新建笔记的时候直接填充。在模板中也存在一些`变量`，用以动态生成指定的内容，具体的`变量`在模板页有介绍，此处不赘述。

## 样式管理

软件集成了CSS编辑器，并固定两栏对照，以便用户可以直观地感受CSS对渲染的影响。当然，这需要你具备相关的知识。倘若你对CSS不甚了解，也可在网上搜寻Markdown的渲染样式。

或者你可以到[Acrylic Markdown仓库](https://github.com/Richasy/Acrylic-Markdown-Resource)中的style文件夹内找寻自己感兴趣的样式

## 集成邮件

通过Markdown与CSS的有机组合，完全有可能实现非常漂亮的排版。利用这一点，可以让你的邮件非常好看！

![acrmd_mail.png](https://storage.live.com/items/51816931BAB0F7A8!12109?authkey=AO7QXpgYo7-5DUU)

软件集成了邮件功能，可以让你一键发送美观的邮件。但在使用之前，还需要与你已有的邮箱进行绑定。

*关于邮箱绑定的注意事项，以QQ邮箱举例。*

- **服务器**：QQ邮箱常用的是smtp.qq.com（具体服务器依选取服务而定），其它邮箱在各自的文档中自行查找，或者上网搜索
- **端口号**：smtp一般都为25，部分特殊情况（比如开启SSL）会使用其他端口号，请自行查找
- **邮箱地址**：你的邮箱地址，形如`example@qq.com`
- **邮箱密码**：这里填[授权码](https://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1001256&&id=28)，其它邮箱同此理，若有不适用授权码者，方可填写密码
- **显示名称**：这里的名称仅指在软件上显示的名称，便于识别与管理。
- **SSL**：加密传输，往往需要特殊端口的支持

## 集成WordPress

:::warning
本处特指[WordPress官方博客平台](https://wordpress.com/)，由各自服务器独立部署的WordPress分发包不在此列。    
<small>出此下策无非是因为版本不统一，插件配置复杂，API混乱等原因。</small>
:::

允许你将博文一键发送至你的WordPress博客中，同样的，需要事先做好配置。

这里的配置并不复杂，依托于官方平台的OAuth验证，便与平常的QQ快速登录无异。

## 项目、分组和笔记的修改与删除

### 项目

项目的修改与删除须在首页进行，键鼠时右键单击需要操作的条目，即可弹出浮动菜单。触屏时则请长按条目来唤出浮动菜单。

![acrmd_projecthandle.png](https://storage.live.com/items/51816931BAB0F7A8!12110?authkey=AO7QXpgYo7-5DUU)

### 组

进入项目详情后，你能在侧边栏上看到当前的分组，键鼠时右键单击会弹出浮动菜单，而触屏时请向左滑动条目，按钮隐藏在条目之下。这亦是对触屏所做的优化

![acrmd_groupchange.png](https://storage.live.com/items/51816931BAB0F7A8!12111?authkey=AO7QXpgYo7-5DUU)

### 笔记

在项目详情页，笔记是作为单张卡片出现的，卡片右上角有菜单按钮，点之即可，无论键鼠还是触屏都是如此。

![acrmd_notechange.png](https://storage.live.com/items/51816931BAB0F7A8!12112?authkey=AO7QXpgYo7-5DUU)

在编辑页面，笔记在侧边栏作为条目出现，操作方式如同分组：键鼠右键单击，触屏向左滑动。