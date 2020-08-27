module.exports = {
    title: '云乡',
    description: '云之幻的私人博客',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.ico'
        }],
        //['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    plugins: ['@vuepress/back-to-top',[
        require('./rssConfig.js'),
        {
          base_url: '/', // required
          site_url: 'https://blog.richasy.cn', // required
          copyright: '2019 Richasy', // optional
          // How much articles
          count: 20
        }
    ]],
    themeConfig: {
        nav: [{
                text: '技术文档',
                link: '/code/'
            },
            {
                text: '设计杂谈',
                link: '/design/'
            },
            {
                text: '开发日志',
                link: 'https://www.richasy.cn'
            },
        ],
        sidebar: {
            '/design/translate': [{
                title: '优质外文',
                collapsable: true,
                children: [
                    ['/design/translate/', '序'],
                    ['/design/translate/2019uiux_design_trends', '2019年UI&UX设计趋势'],
                ]
            }],
            '/design/thinking': [{
                title: '我的思考',
                collapsable: true,
                children: [
                    ['/design/thinking/', '序'],
                    ['/design/thinking/uwp_desktop_diff', 'UWP与传统桌面应用的差异']
                ]
            }],
            '/code/web/vue': [{
                title: 'Vue相关',
                collapsable: true,
                children: [
                    ['/code/web/vue/', 'Vue相关'],
                    ['/code/web/vue/use_electron_with_vue', 'Vue与Electron的混合开发环境搭建']
                ]
            }],
            '/code/web/editor': [{
                title: '编辑器相关',
                collapsable: true,
                children: [
                    ['/code/web/editor/', '编辑器'],
                    ['/code/web/editor/monaco_create', 'Monaco 编辑器的创建'],
                    ['/code/web/editor/monaco_theme', 'Monaco 编辑器主题定义'],
                ]
            }],
            '/code/web/others': [{
                title: '其他知识',
                collapsable: true,
                children: [
                    ['/code/web/others/', '其他知识'],
                    ['/code/web/others/use_request_with_authorize', '使用带请求头的Web请求'],
                    ['/code/web/others/open_iis', '启用IIS服务器'],
                    ['/code/web/others/deploy_netcore', '在IIS上部署.Net Core包'],
                ]
            }],
            '/code/powershell': [{
                title: 'PowerShell笔记及工具',
                collapsable: true,
                children: [
                    ['/code/powershell/', 'PowerShell笔记及工具'],
                    ['/code/powershell/use_baidupcsgo', '使用BaiduPCS-Go干掉百度云限速']
                ]
            }],
            '/code/uwp': [{
                title: 'UWP小书',
                collapsable: true,
                children: [
                    ['/code/uwp/', '序章'],
                    ['/code/uwp/uwp_setup', 'Visual Studio的安装与配置'],
                    ['/code/uwp/uwp_newapp', '创建一个新应用'],
                    ['/code/uwp/uwp_usebutton', '一个小按钮'],
                    ['/code/uwp/uwp_xaml','谈谈XAML'],
                    ['/code/uwp/uwp_gridlayout','网格布局'],
                    ['/code/uwp/uwp_stackpanel','堆放布局'],
                    ['/code/uwp/uwp_relativepanel','相对布局'],
                    ['/code/uwp/uwp_learncontrol','如何学习新的控件'],
                    ['/code/uwp/uwp_style','简单的样式修改'],
                    ['/code/uwp/uwp_resource','样式的作用域以及资源'],
                    ['/code/uwp/uwp_template','控件模板概述'],
                    ['/code/uwp/uwp_binding_basic','绑定初步'],
                    ['/code/uwp/uwp_listview_gridview_1','ListView 和 GridView (上)'],
                    ['/code/uwp/windwos10x_emulator','Windows10X 模拟器简单上手体验']
                ]
            }],
            '/code/csharp': [{
                title: 'C#笔记',
                collapsable: true,
                children: [
                    ['/code/csharp/', 'C#笔记'],
                ]
            }],
        }
    },
    markdown: {
        anchor: {
            permalink: true
        },
        extendMarkdown: md => {
            md.use(require('markdown-it-abbr'));
            md.use(require('markdown-it-footnote'));
            md.use(require('markdown-it-task-lists'));
            md.use(require('markdown-it-mark'));
            md.use(require('markdown-it-katex'));
            md.use(require("markdown-it-sup"));
            md.use(require("markdown-it-sub"));
            md.use(require("markdown-it-plantuml"));
        }
    }
}