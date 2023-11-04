import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '_game-title_ Docs',
  description: 'Read everything about _game-title_ here!',
  base: '/idea/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [{ icon: 'github', link: 'https://github.com/synxty/idea' }],
  },
});
