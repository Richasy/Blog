---
title: Monaco 编辑器主题定义
lang: zh
date: 2020/8/27 16:58
type: post
---

# Monaco 编辑器主题定义

:::tip
目前是临时记录，后续会进行文档补全
:::

## 相关仓库

[Monaco Themes](https://github.com/brijeshb42/monaco-themes)

## 大概说明

Monaco通过language解析会定义一些token，而语法高亮就是对这些提取出来的token进行关键词着色。

主题的配置当然不止语法高亮这么简单，还涉及到其它的一些诸如编辑器背景设置，滚动条设置等，这些配置项没有文档公开，但是可以在monaco-editor.js中通过搜索`----- base colors`得到。

在相同的文件中，还能找到`vs`, `vs-dark`和`hc-black`的主题定义

而创建自己主题的过程，简而言之就是复制一个主题副本，然后填色的过程。

但是Token并不好把握，默认主题定义能涵盖绝大多数情况，但是token的名字不见得是语法解析得到的token名字，所以不断进行微调也是一个必要的过程

## vs-dark 定义 (经过转化)：

```javascript
var vs_dark = {
    base: "vs-dark",
    inherit: false,
    rules: [
        { token: "", foreground: "D4D4D4", background: "1E1E1E" },
        { token: "invalid", foreground: "f44747" },
        { token: "emphasis", fontStyle: "italic" },
        { token: "strong", fontStyle: "bold" },
        { token: "variable", foreground: "74B0DF" },
        { token: "variable.predefined", foreground: "4864AA" },
        { token: "variable.parameter", foreground: "9CDCFE" },
        { token: "constant", foreground: "569CD6" },
        { token: "comment", foreground: "608B4E" },
        { token: "number", foreground: "B5CEA8" },
        { token: "number.hex", foreground: "5BB498" },
        { token: "regexp", foreground: "B46695" },
        { token: "annotation", foreground: "cc6666" },
        { token: "type", foreground: "3DC9B0" },
        { token: "delimiter", foreground: "DCDCDC" },
        { token: "delimiter.html", foreground: "808080" },
        { token: "delimiter.xml", foreground: "808080" },
        { token: "tag", foreground: "569CD6" },
        { token: "tag.id.pug", foreground: "4F76AC" },
        { token: "tag.class.pug", foreground: "4F76AC" },
        { token: "meta.scss", foreground: "A79873" },
        { token: "meta.tag", foreground: "CE9178" },
        { token: "metatag", foreground: "DD6A6F" },
        { token: "metatag.content.html", foreground: "9CDCFE" },
        { token: "metatag.html", foreground: "569CD6" },
        { token: "metatag.xml", foreground: "569CD6" },
        { token: "metatag.php", fontStyle: "bold" },
        { token: "key", foreground: "9CDCFE" },
        { token: "string.key.json", foreground: "9CDCFE" },
        { token: "string.value.json", foreground: "CE9178" },
        { token: "attribute.name", foreground: "9CDCFE" },
        { token: "attribute.value", foreground: "CE9178" },
        { token: "attribute.value.number.css", foreground: "B5CEA8" },
        { token: "attribute.value.unit.css", foreground: "B5CEA8" },
        { token: "attribute.value.hex.css", foreground: "D4D4D4" },
        { token: "string", foreground: "CE9178" },
        { token: "string.sql", foreground: "FF0000" },
        { token: "keyword", foreground: "569CD6",fontStyle:'bold' },
        { token: "keyword.flow", foreground: "C586C0" },
        { token: "keyword.json", foreground: "CE9178" },
        { token: "keyword.flow.scss", foreground: "569CD6" },
        { token: "operator.scss", foreground: "909090" },
        { token: "operator.sql", foreground: "778899" },
        { token: "operator.swift", foreground: "909090" },
        { token: "predefined.sql", foreground: "FF00FF" },
    ],
    colors: {
      "editor.background": "#1E1E1E",
      "editor.foreground": "#D4D4D4",
      "editor.inactiveSelectionBackground": "#3A3D41",
      "editorIndentGuide.background": "#404040",
      "editorIndentGuide.activeBackground": "#707070",
      "editor.selectionHighlightBackground": "#ADD6FF26",
    },
};
```