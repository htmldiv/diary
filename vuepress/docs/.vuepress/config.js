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
    head: [["link", { rel: "icon", href: `/logo.png` }]],
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
            { text: "Home", link: "/" },
            { text: "JavaScript", link: "/javascript/" },
            { text: "Projects", link: "/projects/" },
            { text: "HTTP", link: "/HTTP/" },
            { // 带下拉选项的二级目录
                text: "Module", 
                ariaLabel: 'Language Menu',
                items: [
                  { text: '管理员端', link: '/module/config/' },
                  { text: '操作员端', link: '/module/client/' }
                ]
            },
            { text: "GitHub", link: "https://github.com/htmldiv/diary.git" }
        ],
        sidebar: {
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
            '/module/config/': [
                {
                    title: '管理员端',
                    collapsable: false,
                    children: [
                        '',
                        'mole',
                        'user',
                    ]
                }
            ],
            '/module/client/': [
                {
                    title: '操作员端',
                    collapsable: false,
                    children: [
                        '',
                        'check',
                        'home',
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

