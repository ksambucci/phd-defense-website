// @ts-check
import { defineConfig } from 'astro/config';
import siteConfig from './site.config.json' with { type: 'json' };

// Base path + site URL are driven by site.config.json (hosting block),
// so deploying under a different repo name only needs a one-line edit there.
export default defineConfig({
  site: siteConfig.hosting.siteUrl,
  base: siteConfig.hosting.base,
  trailingSlash: 'ignore',
});
