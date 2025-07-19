// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import wasm from "vite-plugin-wasm";

export default defineConfig({
  site: 'https://ferranbasora.com',
  integrations: [mdx(), sitemap(), tailwind(), react(), wasm()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: false,
    },
  }),
});