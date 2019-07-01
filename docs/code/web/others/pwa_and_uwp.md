---
type: post
lang: zh
title: PWA与UWP的结合
date: 2019/7/1 9:29
---

# PWA与UWP的结合

:::tip
早前，微软为了挽回UWP的颓势，曾推进PWA上架微软应用商店的工作。配合微软进行转制的有Uber、Twitter等知名大厂的网页应用。这些经过转制的应用看起来和网页端并无二致，但却可以调用`NativeAPI`，在某些地方达到甚至超越了nodejs的效果，而这种转制，也让PWA在Windows下更为强大。

本章便是来探讨PWA是如何与UWP相结合，产生 **1+1>2** 的效果的。
:::

## 什么是PWA

PWA，全称 `Progressive Web App`，翻译过来就是渐进式网页应用。所以PWA首先要是一个网页，在此基础上，如果浏览器或者其他的渲染器支持，才会变成一个应用。这也正是其**渐进式**的由来。

从组成结构上来说，PWA是对原始网页的一个补充。这种补充不是破坏式的，因为只需要添加两个文件，这两个文件分别是`Service Worker`和`Manifest`。甚至极端一些，如果你只对PWA所带来的强大后台功能感兴趣，那么`Manifest`都可以不要。

通常来说，PWA更喜欢移动端。它是App-Like，像本地应用却又不是本地应用。比本地应用更轻，卸载也更为方便。

但是在桌面端，PWA便不甚突出。相比起应用，在浏览器中打开几个标签页显然更为方便，如果没有一些特殊的功能，那么是否集成PWA则显得不那么重要。

显然，UWP下WinRT的加入，便是为PWA在桌面端赋予了新的能力。尽管在新的VS2019中已经不再支持。

## 以PWA为基础的UWP应用

UWP是一个平台，而最原汁原味的应用开发自然是采用`XAML`+`C#`，除此之外，Javascript搭配HTML也是一个不错的实现。但不管开发采取何种方式，在与本机API交互时，都需要依托WinRT API，相当于一个中间层。

当PWA应用运行于UWP平台之上时，启动它的进程并非浏览器进程，而是名为`wwahost.exe`的进程。

Javascript能调用绝大部分WinRT API，但有一些平台独有的，比如`Windows.UI.XAML`命名空间下的API就不能调用。这意味着PWA应用并不能调取Acrylic Brush来实现Fluent Design中的动效及光效，不过前端UI库极多，达到类似的效果也并不困难。

UWP对PWA的赋能，更多地体现在平台特色功能上。随便举几个例子：

- 本地文件IO
- Microsoft服务的访问
- 机器学习
- 设备调用（比如照相机、陀螺仪等）
- 通知推送
- Cortana

上述功能只是诸多特色功能中的一部分，这得益于Windows10带来的强大功能，以及WinRT作为中间层提供的良好兼容能力。

## 从现有PWA项目中建立UWP应用

假设你已经写好了一个PWA应用，包括了`Service Worker`，Manifest有没有并不重要。

那么如何根据这个项目创建一个UWP应用呢？非常简单，甚至不需要你修改现有代码。

打开**VS2017** *（必须要是这个版本的`Visual Studio`）*。新建一个`Progressive Web App`项目。  
![531a0d1c-ae65-41ca-b240-08d33b61a39f.png](https://storage.live.com/items/51816931BAB0F7A8!13425?authkey=AO7QXpgYo7-5DUU)

我们可以观察新项目的目录结构，可以发现，新项目仅有几个标注为error错误页面，和一些UWP项目自带的图标文件、应用清单文件等。

这和我们平常的开发可不一样，看样子VS并没有为我们提供`index.html`等配套文件。奇怪，这些文件难道要我们自己创建吗？

当然不是。

甚至你根本不需要添加任何文件。

那如何让它工作呢？

答案就在应用清单中。

打开`package.appxmanifest`，秘密就在Application -> Start page 选项中。

如果你的页面上线了，直接在这里输入你的网页网址，点击运行，它就可以工作了。

![b1850053-6613-40c8-bdfc-a102b4050bf5.png](https://storage.live.com/items/51816931BAB0F7A8!13426?authkey=AO7QXpgYo7-5DUU)

想新建一个以PWA为基础的UWP应用，可以说是非常简单了。

如果你有UWP的基础，相信对你来说，配置应用图标，改写应用名这些操作应该是驾轻就熟，无需赘述了。

## 代码中集成WinRT API

对于从现有项目中新建UWP应用而言，并没有什么值得称道的地方。因为这看起来就是一个浏览器套壳应用罢了。

但如果你打算将PWA应用转制为UWP，那么你感兴趣的地方就绝不仅于此。

尽管UWP应用本身反响平平，但是在功能性上仍比PWA应用要强上很多，比如文件IO。

### 调用本地文件操作API的例子

> 对于一个网页应用，`能读不能写`几乎是常态。你可以通过Input标签来获取文件，但很显然，如果你想保存什么文件到计算机上，步骤就要麻烦很多了，甚至要走许多弯路。但是依托于UWP，我们可以直接调用本地API帮助我们自如地实现文件的读写。

新建一个简单的项目，文档结构如下所示：

```
IO
|- index.html
|- sw.js
```

在`index.html`中，我们新建两个按钮及一个文本框，用作我们的UI元素。

```html
<div class="container">
    <div class="left">
        <button id="import">导入</button>
        <button id="export" style="margin-top: 20px">导出</button>
    </div>
    <div class="right">
        <textarea id="contentBox" placeholder="请输入内容"></textarea>
    </div>
</div>
```

接下来注册我们的`serviceWorker`。

```javascript
if ("serviceWorker" in navigator) {
   navigator.serviceWorker.register("/sw.js").then(function (registration) {
     console.log("Service Worker registered with scope:", registration.scope);
   }).catch(function (err) {
     console.log("Service worker registration failed:", err);
   });
}
```

这些算是基本的准备工作，为求简便，脚本可以直接写在`<body>`标签中，尽管这并不符合书写规范。

接下来我们为两个按钮绑定事件，将下面的代码写入到html文件中：

```javascript
let win = window.Windows;
let importButton = document.querySelector('#import');
let exportButton = document.querySelector('#export');
// 导入文件，调用了FileOpenPicker
importButton.addEventListener('click', function () {
    if (win) {
        let sto = win.Storage;
        let picker = new sto.Pickers.FileOpenPicker();
        let input = document.querySelector('#contentBox')
        picker.SuggestStartLocation = sto.Pickers.PickerLocationId.documentsLibrary;
        picker.fileTypeFilter.push('.txt');
        picker.pickSingleFileAsync()
        .then((file) => {
            sto.FileIO.readTextAsync(file).then((str) => {
                input.value=str;
            })
        }).catch((e) => {
            console.log('读取文件失败')
        })
    }
})

// 导出文本至文件中，调用了FileSavePicker
exportButton.addEventListener('click', function () {
    if (win) {
        let sto = win.Storage;
        let text = document.querySelector('#contentBox').value;
        if (text) {
            let picker = new sto.Pickers.FileSavePicker();
            picker.defaultFileExtension = '.txt';
            picker.suggestedFileName = '文本文件.txt';
            picker.fileTypeChoices.insert('文本文件', ['.txt']);
            picker.suggestStartLocation = sto.Pickers.PickerLocationId.documentsLibrary;
            picker.pickSaveFileAsync()
            .then((file) => {
                sto.FileIO.writeTextAsync(file,text);
            }).catch((e) => {
                console.log('保存文件失败')
            })
        }
    }
})
```

如果你之前开发过传统UWP应用，那么这里面的一些类你应该很熟悉，比如FileOpenPicker-文件选择器、FileSavePicker-文件保存器、FileIO-文件静态操作类等。

> 相比起C#，Javascript的调用显然要复杂一些，需要写出完整的类名，即包含了命名空间的类名。再加上没有智能提示，没有自动引入，几乎每一次调用都需要查询相关文档，可以说是挺麻烦的了。

所有这些WinRT API都被放在了window.Windows之中，所以每次调用的时候，都是先从这里开始。

但是有一个问题，原生JS中并没有window.Windows这个对象，我们也从来没有创建过它，那为什么通过它可以调用本机API呢？

答案还是在我们的PWA-UWP项目上。

### 为PWA项目开启WinRT支持

在进入到我们最开始用VS创建的PWA项目之前，你需要先运行一个本地服务器，让我们刚刚写的文件IO的例子可以运行。

我使用的是本机的IIS服务器，前端也有很多其他的选择，比如`http-server`。喜欢使用哪个就使用哪个，这无关紧要。

起一个本地服务器的目的也仅在于能通过http链接访问到我们的 `index.html` 文件。

服务器跑起来之后，将对应的链接写在 `package.appxmanifest` 的`Start page`中。

这是我们的准备工作。

如果你这个时候直接运行项目，你会发现点击按钮一点反应也没有。这很正常，因为你并没有开启该UWP项目的特殊权限。

想要让window.Windows工作，需要在`package.appxmanifest`下的`Content URIs`中添加网站所对应的链接，并将 `WinRT Access` 设置为`All`。

![4e046625-a9f0-4f37-a655-ab013cd91641.png](https://storage.live.com/items/51816931BAB0F7A8!13427?authkey=AO7QXpgYo7-5DUU)

这个时候重新运行项目，你就会发现当你点击按钮的时候，文件选择器就会顺利弹出了。

---

### 小结

我们完成了一次简单的实验。即通过Javascript调用本机API来帮助我们实现文件的读写。

尽管在实际编写中需要频繁查文档而显得略有些繁琐，但总体的结果是好的。Javascript和WinRT API的交互也很顺畅。

但仍有一些需要注意的问题。

首要的便在于命名。

C#中的命名遵循帕斯卡规范，即每个单词首字母都大写，而Javascript多采用驼峰命名。而在调用WinRT API时，微软更改了方法和部分属性的命名方式，从帕斯卡变为了小驼峰。在没有代码提示的情况下，极易写错，这是一个大坑，而且特别容易犯，需要特别谨慎。

其次是支持的功能有限。

尽管大多数特色功能都得到了支持，但只能作为补充。有些内容，比如Windows.UI.Controls里的内容就不可用。关于可用及不可用的API，MSDN并没有一个详尽的列表加以阐述，需要自行摸索。

最后则是调试问题。

就我们所编写的简单应用来说，调试不成问题，甚至还可以自如地打断点。

但现阶段，网页开发多依赖框架，而框架多会进行代码混淆，即便不进行代码混淆，在进行调试时，也很难去对单文件进行断点调试。

对于框架的解析能力欠佳，这也是一个问题。

