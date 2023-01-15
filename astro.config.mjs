import mdx from "@astrojs/mdx"
import prefetch from "@astrojs/prefetch"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://www.ronjeanfrancois.com/",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
  integrations: [mdx(), sitemap(), prefetch(), tailwind()],
})
