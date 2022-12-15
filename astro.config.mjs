import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ronjeanfrancois.com/",
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  },
  integrations: [mdx(), sitemap(), prefetch(), tailwind()]
});