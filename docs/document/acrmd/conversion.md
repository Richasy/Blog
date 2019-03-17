---
title: 部署转换服务
lang: zh
---

# 部署转换服务

:::tip
将转换服务剥离出来单独部署实在是不得已的举措。其一是UWP的特殊API使得软件不能自如地访问文件，其二是转换服务所需的硬件资源也不是我那个小服务器承受得住的。故此，将转换服务剥离，以供有需要的用户自行部署。
:::

Acrylic Markdown本身提供两种文件格式导出，分别是HTML与MD文件。如果你需要更多格式的导出 *(比如pdf)*，则需要单独部署服务包。服务包开源并免费提供，只是部署的过程稍微有点麻烦。

所谓服务包，是我结合目前市面上的一些开源转换工具制作的 .Net Core Web Api，你可以将之部署在本机或者你自己的服务器上。

## 下载地址

这里是下载地址：[Github](https://github.com/Richasy/HTML-Conversion-Api/releases)


## 如何部署

由于是服务包，所以需要部署在服务器中，Windows系统本身也可以开服务器，所以只要你能使用Acrylic Markdown，那你就可以部署该服务包。

关于如何部署 .Net Core 服务包，教程在[这里](https://blog.richasy.cn/code/web/others/deploy_netcore.html)

部署完成后，你可以在软件的设置-->基础设置 中更换导出服务地址为你设定的服务地址，软件默认为 `http://localhost:5000`，也是我推荐的一个端口。

## 转换服务注意事项

### 1. 请对样式的背景色进行调整

以导出为PDF为例，你可以在导出时选取合适的样式。但请注意，PDF默认以A4尺寸打印，且默认底色为白色（你就把它当成普通的A4纸），所以如果可以，你最好修改自己的底色为白色。

### 2. 如何自定义字体

自定义字体同样需要在CSS中配置，推荐使用 [@font-face](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face) 进行字体的引入。

但要注意，字体引入时的路径必须为绝对路径，标明字体类型，且加上 `file:///`前缀。

一个完整的字体引入应该是下面这个样子：

```css
@font-face{
    font-family:'test';
    src:url('file:///E:/Package/HtmlCovnersion/Fonts/somefonts.ttf') format('truetype');
}

html{
    font-family:test;
}
```

如果引入失败（比如路径不正确），很可能导出的PDF是一片空白。

但还有另一种方式，如果你使用的是网络字体，比如 [Google Fonts](https://fonts.google.com/)，你可以在css里面这样引入：

```css
@import url('https://fonts.googleapis.com/css?family=Montserrat');

html{
    font-family:Montserrat;
}
```

---

转换服务目前仅提供了转PDF的接口，更多格式的转化也会在后期陆续更新。