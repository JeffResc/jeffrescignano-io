import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import favicons from 'astro-favicons';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffrescignano.io',
  base: '/',
  integrations: [
    mdx(),
    sitemap(),
    icon(),
    favicons({
      input: 'public/assets/jeff.jpg',
      appName: 'Jeff Rescignano',
      appShortName: 'JeffResc',
      background: '#161616',
      theme_color: '#161616',
    }),
  ],
  adapter: cloudflare(),
  output: 'static',
});
