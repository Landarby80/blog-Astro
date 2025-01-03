import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [icon(), sitemap()],
});