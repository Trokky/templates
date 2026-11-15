import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

// Pages render on request, reading Trokky in the same Worker: edit in Studio, refresh, it's live.
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  // The site keeps no per-visitor state. Left on, the adapter adds a SESSION KV namespace to the
  // deploy that nothing reads; set a session driver here if a page ever needs Astro.session.
  session: false,
})
