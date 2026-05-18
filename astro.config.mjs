import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: change this to your deployed URL when you set up Vercel
const SITE_URL = 'https://your-site.vercel.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), sitemap()],
});
