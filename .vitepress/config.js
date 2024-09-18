import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Synxty Infopedia',
  description: 'Your ultimate guide to a world of epic battles, stunning landscapes, and heroic journeys, where teamwork and collaboration shape the path to greatness.',
  base: '/idea',
  srcDir: 'src',
  lastUpdated: true,
  scrollOffset: 'header',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: `Synxty, ${new Date().getFullYear()}`,
    },
    nav: [
      { text: 'Definitions', link: '/definitions/intro' },
      { text: 'Journeys', link: '/journeys/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/synxty/idea' }],
    search: {
      provider: 'local',
      options: {
        detailedView: 'auto'
      }
    },
    sidebar: [
      {
        text: 'Intro',
        link: '/definitions/intro',
        docFooterText: 'Synxty: Intro'
      },
      {
        text: 'Univium',
        collapsed: false,
        link: '/definitions/univium/overview',
        docFooterText: 'Univium: A Brief History',
        items: [
          {
            text: 'Regions',
            link: '/definitions/univium/regions',
            docFooterText: 'Univium: Regions'
          },
          {
            text: 'Elemental Crystals',
            link: '/definitions/univium/elemental_crystals',
            docFooterText: 'Univium: Elemental Crystals'
          }
        ]
      },
      {
        text: 'Characters',
        collapsed: false,
        link: '/definitions/characters/overview',
        docFooterText: 'Characters: Overview',
        items: [
          {
            text: 'Origins',
            link: '/definitions/characters/origins',
            docFooterText: 'Characters: Origins'
          },
          {
            text: 'Types',
            link: '/definitions/characters/types',
            docFooterText: 'Characters: Types'
          },
          {
            text: 'Souls',
            link: '/definitions/characters/souls',
            docFooterText: 'Characters: Souls'
          },
          {
            text: 'Roles',
            link: '/definitions/characters/roles',
            docFooterText: 'Characters: Roles'
          },
          {
            text: 'Classes',
            link: '/definitions/characters/classes',
            docFooterText: 'Characters: Classes'
          }
        ]
      },
      {
        text: 'Synxty',
        collapsed: false,
        link: '/definitions/synxty/overview',
        docFooterText: 'Synxty: The Heart of Univium',
        items: [
          {
            text: 'Cities',
            link: '/definitions/synxty/cities',
            docFooterText: 'Synxty: Cities'
          },
          {
            text: 'Towns',
            link: '/definitions/synxty/towns',
            docFooterText: 'Synxty: Towns'
          },
          {
            text: 'Houses of Mastery',
            link: '/definitions/synxty/houses_of_mastery',
            docFooterText: 'Synxty: Houses of Mastery'
          }
        ]
      }
    ]
  },
});
