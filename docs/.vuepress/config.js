module.exports = {
    title: '@wxa',
    base: '/wxa/',
    ga: 'UA-74795022-1',
    head: [
        ['link', { rel: 'icon', href: `/logo-mini.png` }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            selectText: '选择语言',
            label: '简体中文',
            description: 'wxa | AOP小程序框架',
        },
        // '/lang/english/': {
        //     lang: 'en-US',
        //     label: 'English',
        //     selectText: 'Languages',
        //     description: 'wxa | Wechat mini program framework'
        // }
    },
    themeConfig: {
        repo: 'genuifx/wxa',
        docsRepo: 'genuifx/wxa',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        sidebarDepth: 3,
        locales: {
            '/': {
                lang: 'zh-CN',
                selectText: '选择语言',
                label: '简体中文',
                description: 'wxa | 方便的小程序开发框架',
                algolia: {},
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次编辑时间',
                sidebarDepth: 4,
                nav: [
                    {text: '指南', link: '/guide/'},
                    {text: 'CORE', link: '/core/'},
                    {text: 'CLI', link: '/cli/'},
                    {
                        text: '插件',
                        items: [
                            {
                                text: 'CORE',
                                items: [
                                    {text: 'Form', link: '/plugin/core/form'},
                                    {text: 'Watch', link: '/plugin/core/watch'},
                                    {text: 'Redux', link: '/plugin/core/redux'},
                                ]
                            },
                            {
                                text: 'CLI',
                                items: [
                                    {text: 'Copy', link: '/plugin/cli/copy'},
                                    {text: 'Dependencies Analysis', link: '/plugin/cli/da'},
                                    {text: 'Postcss', link: '/plugin/cli/postcss'},
                                    {text: 'Replace', link: '/plugin/cli/replace'},
                                    {text: 'UglifyJS', link: '/plugin/cli/uglifyjs'},
                                ]
                            }
                        ]
                    }
                ],
            },
        },
        sidebar: {
            '/guide/': [
                '',
                'quickstart',
                'construction',
                'develop',
                'mixin',
                'component',
                'plugin',
                'editor'
            ],
            '/core/': [
                '',
                'global',
                {
                    title: '装饰器',
                    collapse: false,
                    children: [
                        '/core/decorators/class',
                        '/core/decorators/methods',
                    ]
                },
                'hook',
                'feature',
                'other'
            ],
            '/cli/': [
                '',
                'build',
                'create',
                'tool',
                'configuration'
            ]
        },
        evergreen: true
    }
}