import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Synxty',
  description: 'Your ultimate guide to a world of epic battles, stunning landscapes, and heroic journeys, where teamwork and collaboration shape the path to greatness.',
  base: '/idea',
  srcDir: 'src',
  lastUpdated: true,
  scrollOffset: 'header',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Explore', link: '/explore/intro' },
          { text: 'Journeys', link: '/journeys/' },
        ],
      },
    },
    pt: {
      label: 'Português',
      lang: 'pt',
      link: '/pt/',
      themeConfig: {
        nav: [
          { text: 'Explorar', link: '/pt/explore/intro' },
          { text: 'Jornadas', link: '/pt/journeys/' },
        ],
        docFooter: {
          prev: 'Página Anterior',
          next: 'Próxima Página',
        }
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: `Synxty, ${new Date().getFullYear()}`,
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/synxty/idea' }],
    search: {
      provider: 'local',
      options: {
        detailedView: 'auto',
        locales: {
          pt: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                displayDetails: 'Mostrar detalhes',
                resetButtonTitle: 'Reiniciar busca',
                backButtonTitle: 'Fechar busca',
                noResultsText: 'Nenhum resultado',
                footer: {
                  selectText: 'Selecionar',
                  selectKeyAriaLabel: 'Entrada',
                  navigateText: 'Navegar',
                  navigateUpKeyAriaLabel: 'Seta para cima',
                  navigateDownKeyAriaLabel: 'Seta para baixo',
                  closeText: 'Fechar',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    sidebar: {
      '/': [
        {
          text: 'Intro',
          link: '/explore/intro',
          docFooterText: 'Intro'
        },
        {
          text: 'Univium',
          collapsed: false,
          items: [
            {
              text: 'Overview',
              link: '/explore/univium/overview',
              docFooterText: 'Univium: Unveiled',
            },
            {
              text: 'Regions',
              link: '/explore/univium/regions',
              docFooterText: 'Univium: Regions'
            },
            {
              text: 'Elemental Crystals',
              link: '/explore/univium/elemental_crystals',
              docFooterText: 'Univium: Elemental Crystals'
            }
          ]
        },
        {
          text: 'Characters',
          collapsed: false,
          link: '/explore/characters/overview',
          docFooterText: 'Characters: Overview',
          items: [
            {
              text: 'Origins',
              link: '/explore/characters/origins',
              docFooterText: 'Characters: Origins'
            },
            {
              text: 'Types',
              link: '/explore/characters/types',
              docFooterText: 'Characters: Types'
            },
            {
              text: 'Souls',
              link: '/explore/characters/souls',
              docFooterText: 'Characters: Souls'
            },
            {
              text: 'Roles',
              link: '/explore/characters/roles',
              docFooterText: 'Characters: Roles'
            },
            {
              text: 'Classes',
              link: '/explore/characters/classes',
              docFooterText: 'Characters: Classes'
            }
          ]
        },
        {
          text: 'Synxty',
          collapsed: false,
          link: '/explore/synxty/overview',
          docFooterText: 'Synxty: The Heart of Univium',
          items: [
            {
              text: 'Cities',
              link: '/explore/synxty/cities',
              docFooterText: 'Synxty: Cities'
            },
            {
              text: 'Towns',
              link: '/explore/synxty/towns',
              docFooterText: 'Synxty: Towns'
            },
            {
              text: 'Houses of Mastery',
              link: '/explore/synxty/houses_of_mastery',
              docFooterText: 'Synxty: Houses of Mastery'
            }
          ]
        }
      ],
      '/pt/': [
        {
          text: 'Introdução',
          link: '/pt/explore/intro',
          docFooterText: 'Introdução'
        },
        {
          text: 'Univium',
          collapsed: false,
          items: [
            {
              text: 'Visão Geral',
              link: '/pt/explore/univium/overview',
              docFooterText: 'Univium: Revelado',
            },
          ]
        },
      ],
    }
  },
});
