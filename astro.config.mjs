// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://zeiko.dev",
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
  },
});
