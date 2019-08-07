---
title: ListView 和 GridView (上)
lang: zh
type: post
date: 2019/8/7 22:00:00
---

# ListView 和 GridView (上)

:::tip
本章涉及知识点：
- ListView/GridView 的用法
- 与集合的绑定
- ObservableCollection的用法
:::

通过本章的学习，你将接触UWP最重要的集合控件：ListView和GridView。它们虽然是两种控件，但原理相通，最大的区别也不过在于排版方式的不同，故而将这两者合在一起讲。

ListView和GridView控件本身并不难，不足以让我分成上下两章来说，但其背后的数据绑定、数据模板等，却是制作UWP应用时必须要具备的知识，值得大书特书。


## 从 ListView 开始

为什么说ListView和GridView是最重要的集合控件？

因为几乎所有的软件都属于“信息展示”应用，而信息展示应用对于相同数据结构的展示大多都依赖于集合控件。

举个例子，QQ的聊天列表。

![d61eb78d-3a26-4944-b8bc-5f2a76d2c09d.png](https://storage.live.com/items/51816931BAB0F7A8!13558?authkey=AO7QXpgYo7-5DUU "图片来自Dribbble")

这就是典型的ListView。

我有一个数据集合，比如`List<string>`，通过ListView，我只需要创建单一条目的UI样式，ListView就会根据集合将所有条目的UI都创建好。

所以你可以看到，每条聊天记录的头像、名字、信息等都不相同，但布局一致，这就是ListView的能力。

回顾一下，这种类似ListView的控件你见的可不少吧，几乎所有的软件都有涉及，说它重要，应该毋庸置疑