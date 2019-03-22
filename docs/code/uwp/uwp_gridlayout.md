---
title: 网格布局
lang: zh
---

# 网格布局

:::tip
本章涉及知识点：
- XAML简介
- XAML的相关元素，如命名空间
- XAML与CS文件的关连原理
:::

从本章开始，我们开始接触布局控件，涉及布局控件主要有三个，分别是`Grid`、`StackPanel`和`RelativePanel`，其余诸多的高级布局控件，大多是在这三者的基础上建立起来的。

本章我们先讲`Grid`控件。

## Grid布局原理

Grid，中文称之为网格，实际上我们叫它表格也不无不可。就实际表现来看，它跟我们的Excel表，课程表这些表格几乎相同。所以用Grid来布局，我们就像是在玩填格子的游戏。

因此在Grid布局中，你可以让分处不同“格子”的两个元素无限逼近，但只要不设置Margin为负值，那么它们永远不会重叠。

借由此，你所见到的对得很齐的布局（比如计算器的按键区域），基本都是由Grid布局生成的。

## 如何创建Grid布局

既然Grid是表格，那么它就必然有两个属性：

- 行（Row）
- 列（Column）

设置行列，有了交叉，才会产生“格子”，有了格子，才有我们布局的基础。

本节课的第一个小目标，就让我们来画一个微软的LOGO吧，标准的田字格。

微软LOGO，两行两列，一个田字，我们可以按如下方式定义行列：

```xml
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition />
        <RowDefinition />
    </Grid.RowDefinitions>
    <Grid.ColumnDefinitions>
        <ColumnDefinition />
        <ColumnDefinition />
    </Grid.ColumnDefinitions>
</Grid>
```
这些标签都挺好懂的，直接翻译过来就能记住：

```xml
<网格>
    <网格的行定义集合>
        <行定义 />
        <行定义 />
    </网格的行定义集合>
    <网格的列定义集合>
        <列定义 />
        <列定义 />
    </网格的列定义集合>
</网格>
```

注意这里的`Grid.xxx`语法，这是上节课讲XAML时提到过的附加属性的一种。通过这种方式，在Grid内部定义行与列。这样，但凡在该Grid容器内的控件都可以通过行与列的坐标来定位自己的位置。

## 画一个微软LOGO

我们现在定义好了一个两行两列的网格，按照咱们的设想，接下来分别给这四个格子注入不同的颜色就可以了。

如何加上颜色呢？这里我们用一种控件，名为`Rectangle`，翻译一下就是**矩形**。

```xml
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition />
        <RowDefinition />
    </Grid.RowDefinitions>
    <Grid.ColumnDefinitions>
        <ColumnDefinition />
        <ColumnDefinition />
    </Grid.ColumnDefinitions>
    <Rectangle Fill="Red" Grid.Row="0" Grid.Column="0" Width="50" Height="50"/>
    <Rectangle Fill="LimeGreen" Grid.Row="0" Grid.Column="1" Width="50" Height="50"/>
    <Rectangle Fill="DodgerBlue" Grid.Row="1" Grid.Column="0" Width="50" Height="50"/>
    <Rectangle Fill="Orange" Grid.Row="1" Grid.Column="1" Width="50" Height="50"/>
</Grid>
```
:::tip
当你使用`Rectangle`时，你必须设定其宽高，即`Width`和`Height`属性，否则矩形无法显示，`Fill`表示其填充颜色，Rectangle控件是没有Background属性的。
:::

当你写好之后，运行应用，你可能会很惊讶的发现，这四个矩形天各一方了。

![uwp_grid_01.png](https://storage.live.com/items/51816931BAB0F7A8!12460?authkey=AO7QXpgYo7-5DUU)

这是什么原因呢？咱们来分析一波：

Grid控件有一个默认的特性，那就是占据父容器的全部剩余空间，由于我们的`Grid`是Page标签下的唯一元素，所以这个`Grid`控件是充满整个页面的，这一点，在`Grid`上添加一个Background即可知。

而Grid分割出来的单元格，其实也继承了它们老爹的特性，都会完全充满各自的一亩三分地。

所以，倘若你在屏幕中间画一个十字，你会发现我们定义的矩形都位于各自单元格的中央（矩形默认居中显示）。

这当然和我们预想的情况不符，而这不符的原因，就是因为控件的默认显示方式。这就为我们解决问题提供了不同的思路，我们可以改变矩形的显示方式，不让其居中显示。我们也可以改变Grid的显示方式，不让其充盈整个屏幕。

怎么做？让我们来试试：

### 改变矩形的显示方式

`Rectangle`默认居中显示，回想一下前面课程的内容，当我们要让一个控件居中显示时，我们做了什么？

我们更改了控件的`HorizontalAlignment`和`VerticalAlignment`。现在咱们不要矩形居中，那也就改回来。

根据不同矩形所处的位置，我们分别为其设置如下水平和垂直排布方式：

```xml
<Rectangle Fill="Red" Grid.Row="0" Grid.Column="0" Width="50" Height="50" HorizontalAlignment="Right" VerticalAlignment="Bottom"/>
<Rectangle Fill="LimeGreen" Grid.Row="0" Grid.Column="1" Width="50" Height="50" HorizontalAlignment="Left" VerticalAlignment="Bottom"/>
<Rectangle Fill="DodgerBlue" Grid.Row="1" Grid.Column="0" Width="50" Height="50" HorizontalAlignment="Right" VerticalAlignment="Top"/>
<Rectangle Fill="Orange" Grid.Row="1" Grid.Column="1" Width="50" Height="50" HorizontalAlignment="Left" VerticalAlignment="Top"/>
```

这时候再运行，你会发现它们都聚在一起了。

### 改变网格的显示方式

改变矩形的水平和垂直分布似乎有些繁琐了，每个矩形都设置了一次。如果能直接对容器进行设置，不让它占据整个页面，而只是包裹住其内容，那么四个矩形不久自然而然地聚在一起了吗？

改变`Grid`的显示方式也很简单，我们可以说，Grid的默认`HorizontalAlignment`和`VerticalAlignment`都是`Stretch`（可以理解为*充盈*），我们把它们都改成`Center`即可。

再运行应用，你会发现它们都聚在一起了。

### 改变行列属性

回头看看我们在Grid中定义的行和列，我们只定义了，但是什么都没写，现在我们可以给行和列分别设置宽高：

```xml
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="Auto"/>
        <RowDefinition Height="Auto"/>
    </Grid.RowDefinitions>
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="Auto"/>
        <ColumnDefinition Width="Auto"/>
    </Grid.ColumnDefinitions>
</Grid>
```

设置为Auto，则该行列的宽高取决于其中内容的宽高。这样，我们也可以达到目的，虽然LOGO会跑到左上角。

如果行或列定义没有设置范围，那么默认其宽或高为`*`，它的含义就是占据剩下的所有空间。但是，`*`的作用不仅于此，更多应用我们接下来会讲到。

## 有水平的网格布局

通过绘制一个微软LOGO，我们算是初步了解了Grid网格布局，至少知道了它的布局流程。

但在实际应用的制作过程中，我们当然不会做这么简单的田字格布局，我们常常会接触到网格嵌套、跨行（跨列）布局等，时不时地，咱们还会利用Grid的特性，进行控件的叠加操作。

听我说了这些，是不是才升起的信心又被打击了？无妨，相比起田字格，只不过是多加了几行l几列罢了。

接下来，咱们就来实现一个有水平的网格布局。先看效果图：

![uwp_grid_02.png](https://storage.live.com/items/51816931BAB0F7A8!12462?authkey=AO7QXpgYo7-5DUU)

不要觉得难度高，其实不难，而且还是我带着你做