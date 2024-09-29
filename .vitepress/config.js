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
        },
        darkModeSwitchLabel: 'Aparência',
        outline: {
          label: 'Nesta página',
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
          docFooterText: 'Introduction'
        },
        {
          text: 'Univium',
          collapsed: false,
          items: [
            {
              text: 'Unveiling',
              link: '/explore/univium/unveiling',
              docFooterText: 'Univium: Unveiling',
            },
            {
              text: 'Primal Forces',
              link: '/explore/univium/primal_forces',
              docFooterText: 'Univium: Primal Forces',
            },
            {
              text: 'Continents',
              link: '/explore/univium/continents',
              docFooterText: 'Univium: Continents'
            },
            {
              text: 'Elemental Crystals',
              link: '/explore/univium/elemental_crystals',
              docFooterText: 'Univium: Elemental Crystals'
            }
          ]
        },
        {
          text: 'Synxty',
          collapsed: false,
          items: [
            {
              text: 'The Heart of Univium',
              link: '/explore/synxty/overview',
              docFooterText: 'Synxty: The Heart of Univium'
            },
            {
              text: 'Cities',
              link: '/explore/synxty/cities',
              docFooterText: 'Synxty: Cities'
            },
            {
              text: 'Towns',
              link: '/explore/synxty/towns',
              docFooterText: 'Synxty: Towns'
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
              text: 'Revelando',
              link: '/pt/explore/univium/unveiling',
              docFooterText: 'Univium: Revelando',
            },
            {
              text: 'Forças Primais',
              link: '/pt/explore/univium/primal_forces',
              docFooterText: 'Univium: Forças Primais',
            },
            {
              text: 'Continentes',
              link: '/pt/explore/univium/continents',
              docFooterText: 'Univium: Continentes'
            },
            {
              text: 'Cristais Elementais',
              link: '/pt/explore/univium/elemental_crystals',
              docFooterText: 'Univium: Cristais Elementais'
            }
          ]
        },
        {
          text: 'Synxty',
          collapsed: false,
          items: [
            {
              text: 'O Coração de Univium',
              link: '/pt/explore/synxty/overview',
              docFooterText: 'Synxty: O Coração de Univium'
            },
            {
              text: 'Cidades',
              link: '/pt/explore/synxty/cities',
              docFooterText: 'Synxty: Cidades'
            },
            {
              text: 'Vilarejos',
              link: '/pt/explore/synxty/towns',
              docFooterText: 'Synxty: Vilarejos'
            }
          ]
        },
      ],
    }
  },
});
