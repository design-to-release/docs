const path = require('path');

module.exports = {
    title: 'Desgin To Release Wiki',
    description: 'docs for d2r project',
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.join(__dirname, '..', '..', 'assets')
            }
        }
    },
    themeConfig: {
        sidebar: [
            {
                title: '基于OSX开发Skecth插件',
                collapsable: false,
                children: [
                    'guide/00-intro.md',
                    'guide/01-startup.md',
                    'guide/02-oc-basis.md'
                ]
            },
            {
                title: 'D2R最佳实践',
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
