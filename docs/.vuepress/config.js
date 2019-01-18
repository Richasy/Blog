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
    plugins: ['@vuepress/back-to-top'],
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
            '/document/basic': [{
                title: '基础文档',
                collapsable: true,
                children: [
                    ['/document/basic/', "基础文档"],
                    ['/document/basic/privacy', "隐私协议"],
                    ['/document/basic/onedrive_authkey', "获取OneDrive授权码"],
                ]
            }],
            '/code/web': [{
                title: '网页技术杂谈',
                collapsable: true,
                children: [
                    ['/code/web/others/', '其他零散知识'],
                ]
            }],
            '/code/web/others': [{
                title: '其他知识',
                collapsable: true,
                children: [
                    ['/code/web/others/use_request_with_authorize', '使用带请求头的Web请求']
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
                title: 'UWP相关杂谈',
                collapsable: true,
                children: [
                    ['/code/uwp/', 'UWP相关杂谈'],
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
        }
    }
}