module.exports = {
    base: '/',
    title: '地图可视化入门指北',
    description: 'Just playing around',
    head: [],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Blog',
                items: [
                    { text: 'Vue', link: '/vue/vue' },
                    { text: '小程序', link: '/miniprogram/' },
                    { text: '网络', link: '/web/' }
                ]
            },
            { text: '关于', link: '/about/' }
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}