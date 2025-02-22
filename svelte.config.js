import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// eslint-disable-next-line no-undef
const env = process.env;

/**
 * @template T unknown
 * @param {Array<T | undefined>} params
 * @returns {T}
 */
function firstDefined(...params) {
  for (const p of params) {
    if (p !== undefined) {
      return p;
    }
  }

  throw new Error("All elements were undefined!");
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
    }),
    alias: {
      $components: "src/components",
      $css: "src/css",
    },
    prerender: {
      entries: [
        "*",
        "/security.txt",
        "/.well-known/security.txt",
        "/.well-known/atproto-did",
      ],
      origin: firstDefined(
        env.FRONTEND_URL,
        env.CF_PAGES_URL,
        "https://upcraft.dev",
      ),
    },
  },
};

export default config;
