/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'open-lark',
  tagline: '',
  url: 'https://github.com/TbhT/lark-sdk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon:
    'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
  organizationName: 'tbht', // Usually your GitHub org/user name.
  projectName: 'lark-sdk', // Usually your repo name.
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
        {
          href: 'https://github.com/TbhT/lark-sdk',
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
              href: 'https://github.com/TbhT/lark-sdk'
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
          editUrl: 'https://github.com/TbhT/lark-sdk/edit/master/website/docs'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/TbhT/lark-sdk/edit/master/website/blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
