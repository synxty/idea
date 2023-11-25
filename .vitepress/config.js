import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Synxty Docs',
  description: 'Read everything about Synxty here!',
  base: '/idea/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [{ icon: 'github', link: 'https://github.com/synxty/idea' }],
  },
});
