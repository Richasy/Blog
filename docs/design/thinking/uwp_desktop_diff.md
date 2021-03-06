---
title: UWP应用和传统桌面应用的核心差异
lang: zh
date: 2019/4/1 18:45:12
type: post
---

# UWP应用和传统桌面应用的差异

:::tip
本文中所指的UWP应用，是秉承通用应用理念的微软商店应用。Win32转制或PWA不在此列。
:::

:::warning
本文是作者的一点粗陋浅见，没有高深理论，也没有明确的数据支持，全凭感觉而已，不喜勿喷。
:::

![uwp_logo.png](https://storage.live.com/items/51816931BAB0F7A8!12353?authkey=AO7QXpgYo7-5DUU)

**UWP**，全称 Universal Windows Platform。如其所述，这是一个通用平台，其所谓通用，虽然如今看来已是名不副实，但不可否认，这的确是未来的发展方向，至少是其中之一。

如果你有兴趣设计一款UWP应用，那么你就需要有所留意，UWP应用的设计方向已经悄然异于传统桌面应用了。

尽管现在的UWP应用做出来几乎只能在桌面使用，但设计者的目光却不能仅局限于标准桌面（1080P）。或许你不必考虑手机上如何显示及布局，但却不得不顾及当今纷繁的桌面分辨率。你必须要保证自己的应用有着足够的能力应对这诸多分辨率的挑战。

除此之外，通用应用还需要对触摸操作进行优化。从指针到指尖，交互面积被成倍放大，设计者必须考虑这一点，如果交互区域再仅针对指针而设计，那么毫无疑问，触屏使用者的误操作几率将大大增加。

![uwp_finger_pointer.png](https://storage.live.com/items/51816931BAB0F7A8!12352?authkey=AO7QXpgYo7-5DUU)

==这就是通用应用平台对应用设计提出的新要求==

举个例子：

**Adobe PhotoShop**，功能强大而全面，但也正因如此，它在大屏上的操作体验优秀，而在小屏上则是灾难。

![big_small_screen.png](https://storage.live.com/items/51816931BAB0F7A8!12351?authkey=AO7QXpgYo7-5DUU)

大屏移到小屏已然如此，你能想象把完整的PhotoShop移植到手机上吗？

为何PhotoShop无法应对这种挑战呢？除开历史原因，更重要的是这款软件的信息密度太大了。

**信息密度**，这便是我想说明的UWP应用与传统桌面应用的核心差异。

如果你是PS的设计师，现在要你加一个按钮。你优先考虑的估计不是 “这个按钮放在哪里更好看”，而是 “这个按钮哪里能放得下”。

这就与之前提的两点要求相悖了。

==密度过大致使低分屏无法显示全部内容，而功能过多致使每个交互控件的交互区域都压到了最低。==

由此可见，并不是所有应用都适合做成通用应用。这也是通用应用区别于传统桌面应用的地方。从自适应这个角度来看，它甚至和网页有些相似，只是它面对的挑战，可能比网页还要困难。

纵观微软应用商店内的应用，得差评的原因除了闪退外，最多的便是功能不全。

这其实很尴尬。我们都知道，UWP推出的时候，主打就是让开发者一次编写，“到处”运行。这个“到处”，就包含了手机端，虽然现在手机端被砍了，但诸如Surface Go这样的设备，又何尝不算是个大号手机呢？

若以此作为“短板”，则一款跨设备的应用，信息密度必然不高，这带来的影响就是功能上的阉割。再加之UWP API与Win32 API在功能上的差距，导致了UWP应用几乎只适合功能少而专的轻型应用。

---

不得不说，在框架定位上，UWP有些不合时宜。

截至目前，安卓应用也主要集中于手机端，安卓平板的生态完全无法与之相比。即使是应用生态完备的苹果，手机和平板的应用生态也有着较大的差距。

苹果曾明确表明不会合并桌面端与移动端的应用，尽管时至今日，苹果也在考虑让iOS的开发者能更顺利地将他们的应用搬到Mac OS的屏幕上，但为移动端设计的应用和为桌面端设计的应用从设计思路上就有着分歧，二者的信息密度都有着自己的范围，只有处在两者交集内的应用（如之前提及的轻型应用）才有可能顺利地跨设备而保留全部功能，否则就是一次惨绝人寰的阉割。

尽管 **一次编写，到处运行** 的口号颇为响亮，但落到实处，依然要针对设备进行适配，除非有新的计算设备超越这所谓桌面端、移动端，否则随着应用的成长，分化几乎不可避免。

微软的UWP应用这些年一直不温不火、发展缓慢。是编程语言不够好吗？是框架不够优秀吗？是背书的企业不够强大吗？UWP自一出生就有了足够的底蕴，阻碍其发展的根本原因，或许就是其模糊不清的定位吧。