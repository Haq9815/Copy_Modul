import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://modulapib201.vercel.app/",
  base: "/welcome",
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(), // Enable React for the Algolia search component.
    react()
  ],
  site: `http://astro.build`

  // how to ignore ts errors
  //
});
