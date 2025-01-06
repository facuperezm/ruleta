import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://ruleta-online.com",
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
});
