import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EtherCAT Module Docs',
  tagline: 'Documentation for the EtherCAT module family, Linux master software, and hardware integration',
  favicon: 'img/favicon.svg',

  url: 'https://docs.lynxtechs.com',
  baseUrl: '/',

  organizationName: 'Lynx-Robotics-LLC',
  projectName: 'lynxtechsdocs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/',
        searchBarPosition: 'right',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/Lynx-Robotics-LLC/lynxtechsdocs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'EtherCAT Module',
      logo: {
        alt: 'EtherCAT Module Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Lynx-Robotics-LLC/lynxtechsdocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'EtherCAT Basics',
              to: '/ethercat-basics/overview',
            },
            {
              label: 'Master Software',
              to: '/master-software/introduction',
            },
            {
              label: 'Hardware',
              to: '/hardware/overview',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Lynx-Robotics-LLC/lynxtechsdocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Company. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['cpp', 'bash', 'cmake'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
