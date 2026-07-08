// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
    // Update to the custom domain (and public/robots.txt's Sitemap line) once one is purchased
    site: 'https://hackproof-tau.vercel.app',
    integrations: [react(), sitemap()],
});
