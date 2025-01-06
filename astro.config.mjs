import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import AstroPWA from "@vite-pwa/astro";
import { manifest, seoConfig } from "./src/utils/seoConfig";

export default defineConfig({
  site: seoConfig.baseURL,
  integrations: [
    tailwind(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest,
      workbox: {
        globDirectory: "dist",
        globPatterns: [
          "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
        ],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null,
      },
    }),
    sitemap(),
    compress(),
  ],
  site: "https://laruletita.vercel.app",
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
});
