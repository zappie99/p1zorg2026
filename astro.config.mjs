import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.p1zorg.nl',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
