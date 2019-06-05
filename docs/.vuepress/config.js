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
                link: '/document/'
            },
        ],
        sidebar: {
            '/document/wfa/qa': [{
                title: 'WFA 常见问题',
                collapsable: true,
                children: [
                    ['/document/wfa/qa/', "WFA常见问题"],
                    ['/document/wfa/qa/setup_and_show', "安装与显示问题"],
                    ['/document/wfa/qa/translate_and_toast', "翻译与通知问题"],
                    ['/document/wfa/qa/wm_question', "WM价格查询问题"],
                    ['/document/wfa/qa/riven_market', "紫卡市场问题"],
                    ['/document/wfa/qa/others', "其他问题"],
                ]
            }],
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
            '/document/wfa/api': [{
                title: 'WFA-API文档',
                collapsable: true,
                children: [
                    ['/document/wfa/api/', "API介绍"],
                    ['/document/wfa/api/how_to_apply', "申请权限"],
                    ['/document/wfa/api/authorize', "获取授权"],
                    ['/document/wfa/api/warframe_status', "Warframe信息"],
                    ['/document/wfa/api/warframe_market', "WM 价格查询"],
                    ['/document/wfa/api/riven_market', "WFA紫卡市场"],
                    ['/document/wfa/api/appendix_1', "附录1"],
                    ['/document/wfa/api/appendix_2', "附录2"],
                ]
            }],
            '/document/pictureshare': [{
                title: 'PICTURE SHARE说明书',
                collapsable: true,
                children: [
                    ['/document/pictureshare/', "总览"],
                    ['/document/pictureshare/about', "关于PICTURE SHARE"],
                    ['/document/pictureshare/use', "使用说明"],
                    ['/document/pictureshare/qa', "常见问题"],
                ]
            }],
            '/document/acrmd': [{
                title: 'Acrylic Markdown说明书',
                collapsable: true,
                children: [
                    ['/document/acrmd/', "总览"],
                    ['/document/acrmd/use', "快速开始"],
                    ['/document/acrmd/module', "功能概览"],
                    ['/document/acrmd/conversion', "部署转换服务"],
                    ['/document/acrmd/shortcut', "快捷操作"],
                    ['/document/acrmd/grammar', "语法综述"],
                    ['/document/acrmd/history', "更新历史"],
                ]
            }],
            '/document/rss': [{
                title: 'RSS Stalker 说明书',
                collapsable: true,
                children: [
                    ['/document/rss/', "总览"],
                    ['/document/rss/use', "使用说明"],
                ]
            }],
            '/document/basic': [{
                title: '基础文档',
                collapsable: true,
                children: [
                    ['/document/basic/', "基础文档"],
                    ['/document/basic/privacy', "隐私协议"],
                    ['/document/basic/onedrive_authkey', "获取OneDrive授权码"],
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