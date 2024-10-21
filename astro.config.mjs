// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://ferranbasora.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: 'server',
  adapter: vercel(),
});