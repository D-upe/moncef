import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production URL (www is canonical, apex has no CNAME)
export default defineConfig({
  site: 'https://ohala.qd.je',
  output: 'static',
  integrations: [sitemap()],
});
