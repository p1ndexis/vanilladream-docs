// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VanillaDream',
  tagline: 'Документация сервера VanillaDream',
  favicon: 'img/favicon.ico',

  url: 'https://p1ndexis.github.io',
  baseUrl: '/vanilladream-docs/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, // ❌ полностью отключаем блог
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },

    navbar: {
      title: 'VanillaDream',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://discord.gg/ВАШ_ДИСКОРД',
          label: 'Discord',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Сервер',
          items: [
            {
              label: 'Начать играть',
              to: '/docs/start',
            },
            {
              label: 'Правила',
              to: '/docs/rules',
            },
            {
              label: 'Команды',
              to: '/docs/commands',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ВАШ_ДИСКОРД',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} VanillaDream`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
