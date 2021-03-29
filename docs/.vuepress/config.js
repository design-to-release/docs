const path = require('path');

module.exports = {
    title: 'Solution for Desgin to Release',
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
            '/concept',
            '/language',
            '/assets',
            {
                title: '解决方案',
                children: [
                    'solution/design-draft-to-code',
                    'solution/property-mapping',
                    'solution/continuous-delivery'
                ]
            },
            {
                title: '工作流程',
                children: []
            },
            {
                title: '技术标准',
                children: [
                    'standard/atom',
                    'standard/st',
                    'standard/asset',
                    'standard/dsl'
                ]
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
                        'guide/00-intro',
                        'guide/01-startup',
                        'guide/02-oc-basis',
                        'guide/03-cocoa'
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
