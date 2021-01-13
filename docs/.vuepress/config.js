const path = require('path');

module.exports = {
    title: 'Desgin To Release Workflow',
    description: 'docs for d2r project',
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.join(__dirname, '..', '..', 'assets')
            }
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/design-to-release' },
        ],
        sidebar: [
            '/',
            '/language',
            '/assets',
            {
                title: '工作流程',
                children: []
            },
            {
                title: '解决方案',
                children: []
            },
            {
                title: '技术标准',
                children: []
            },
            {
                title: '内置特性',
                collapsable: false,
                children: [{title: '模式适配'}, {title: '设备适配'}, {title: '版本管理'}]
            },
            {
                title: '最佳实践',
                collapsable: false,
                children: [
                    {
                        title: '基于Skecth的设计工具',
                        collapsable: false,
                        children: [

                        ]
                    },
                    {
                        title: '基于Adobe XD的设计工具',
                        collapsable: false,
                        children: [

                        ]
                    },
                    {
                        title: '资产管理平台',
                        collapsable: false,
                        children: [

                        ]
                    },
                    {
                        title: '持续集成平台',
                        collapsable: false,
                        children: [

                        ]
                    }
                ]
            },
            {
                title: '教程',
                collapsable: false,
                children: [
                    {
                    title: '基于OSX开发Skecth插件',
                    collapsable: false,
                    children: [
                        'guide/00-intro.md',
                        'guide/01-startup.md',
                        'guide/02-oc-basis.md',
                        'guide/02-cocoa.md'
                    ]}
                ]
            },
            {
                title: '发布信息',
                collapsable: false,
                children: []
            }
        ],
        lastUpdated: 'Last Updated',
        smoothScroll: true,
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
        {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    base: '/docs/'
};
