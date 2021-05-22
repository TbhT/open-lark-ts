/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'open-lark',
  tagline: '',
  url: 'https://tbht.github.io/',
  baseUrl: '/open-lark-ts/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon:
    'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
  organizationName: 'tbht', // Usually your GitHub org/user name.
  projectName: 'open-lark-ts', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'open lark sdk',
      logo: {
        alt: 'open lark sdk for typescript',
        src:
          'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial'
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/diary', label: 'Diary', position: 'left' },
        {
          href: 'https://github.com/TbhT/open-lark-ts',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TbhT/open-lark-ts'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} , Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TbhT/open-lark-ts/edit/master/website/docs'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TbhT/open-lark-ts/edit/master/website/blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * 多实例插件必填。
         */
        id: 'diary',
        /**
         * 您网站上博客的 URL 路由。
         * *请务必不要*添加斜杠。
         */
        routeBasePath: 'diary',
        /**
         * 相对于站点目录的文件系统数据路径。
         */
        path: './diary'
      }
    ]
  ]
}
