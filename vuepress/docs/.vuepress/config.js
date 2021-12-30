/*
 * @Author: wandering
 * @Date: 2020-01-14 19:35:48
 * @LastEditTime: 2020-04-28 17:52:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress\docs\.vuepress\config.js
 */
function formatDate (time = new Date(), format = 'YY-MM-DD hh:mm:ss') {
    if (!time) {
    return ''
    }

    let date = new Date(time)
    let map = {
    // Y:date.getFullYear(),//单独处理
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
    }
    return format.replace(/([YMDhms])+/g, function (w, t) {
    let v = map[t]
    if (v !== undefined) {
        if (w.length > 1) {
        return ('0' + v).slice(-2)
        }
        return v
    } else if (t === 'Y') {
        return (date.getFullYear() + '').slice(-w.length * 2)
    }
    return w
    })
}
module.exports = {
    title: "流浪丿者",
    description: "The description of the site.",
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
    ],
    base: "/",
    dest: "./dist",
    plugins: [
        ['@vuepress/last-updated', {
          transformer: timestamp => {
                return formatDate(timestamp)
                // return new Date(timestamp).toISOString()
          }
        }]
    ],
    themeConfig: {
        search: true,  // 是否展示搜索框
        nav: [
            { text: "首页", link: "/" },
            { text: "VUE3-ADMIN", link: "/VUE3/" },
            { text: "JavaScript", link: "/javascript/" },
            { text: "Projects", link: "/projects/" },
            { text: "HTTP", link: "/HTTP/" },
            { // 带下拉选项的二级目录
                text: "前端基础知识", 
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'CSS', link: '/module/css/' },
                  { text: 'HTML', link: '/module/html/' },
                  { text: '兼容性', link: '/module/compatibility/' }
                ]
            },
            { text: "GitHub", link: "https://github.com/htmldiv/diary.git" }
        ],
        sidebar: {
            '/VUE3/': [
                {
                    title: 'vue3学习中遇到的问题',
                    collapsable: false,
                    children: [
                        '',
                        'npm',
                        'complain',
                        '文档',
                    ]
                }
            ],
            '/javascript/': [
                {
                    title: 'JS系列',
                    collapsable: false,
                    children: [
                        '',
                        'ScopeChains',
                        'Array',
                    ]
                }
            ],
            '/projects/': [
                {
                    title: '常用工具',
                    collapsable: false,
                    children: [
                        '',
                        '001_lottie-web',
                    ]
                }
            ],
            // 无下拉选项，但是有二级目录的导航
            '/HTTP/': [
                {
                    title: 'HTTP相关',
                    collapsable: false,
                    children: [
                        '',
                        'getting-started',
                        'customize',
                        'advanced'
                    ]
                }
            ],
            '/module/css/': [
                {
                    title: 'CSS',
                    collapsable: false,
                    children: [
                        '',
                        '000_问题合集',
                        '001_实现带圆角的渐变边框',
                    ]
                }
            ],
            '/module/html/': [
                {
                    title: 'HTML',
                    collapsable: false,
                    children: [
                        '',
                        'check',
                        'home',
                    ]
                }
            ],
            '/module/compatibility/': [
                {
                    title: '兼容性问题',
                    collapsable: false,
                    children: [
                        '',
                        '001_vue3+vite 安卓webview和ie11兼容问题解决',
                    ]
                }
            ],
        },
        // sidebar: {
        //   '/guide/': genSidebarConfig('Guide')
        // },
        lastUpdated: '上次掉头发'
    },

    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        extendMarkdown: md => {
        md.use(require("markdown-it-katex"));
        }
    }
    };

    function genSidebarConfig (title) {
    return [
        {
        title,
        collapsable: false,
        children: [
            '',
            'getting-started',
            'customize',
            'advanced',
        ]
        }
    ]
}

