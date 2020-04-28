/*
 * @Author: wandering
 * @Date: 2020-01-14 19:35:48
 * @LastEditTime: 2020-04-28 16:36:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress\docs\.vuepress\config.js
 */
module.exports = {
    title: "流浪丿者",
    description: "The description of the site.",
    head: [["link", { rel: "icon", href: `/logo.png` }]],
    base: "/",
    dest: "./dist",

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
            { text: "GitHub", link: "https://github.com/mtobeiyf/vuepress-homepage" }
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
        lastUpdated: 'Last Updated'
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

