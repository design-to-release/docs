const path = require('path');

module.exports = {
    title: 'd2r wiki',
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
            '/',
            'guide/oc-basis.md'
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
    }]
};
