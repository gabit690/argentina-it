// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://argentina-it.vercel.app";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), sitemap()],
  site,
  redirects: {
    "/": "/empresas",
  },
});
