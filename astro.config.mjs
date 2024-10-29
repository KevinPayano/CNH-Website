import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), alpinejs({
    entrypoint: '/src/entrypoint'
  }), react()],
  experimental: {
    
  },
  markdown: {
    shikiConfig: {
      theme: 'night-owl',
    }
  }
});
