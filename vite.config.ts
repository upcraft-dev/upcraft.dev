import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

const env = process.env;

function firstDefined<T>(...params: Array<T | undefined>) {
  for (const p of params) {
    if (p !== undefined) {
      return p;
    }
  }

  throw new Error("All elements were undefined!");
}

export default defineConfig({
  plugins: [
    { ...threeMinifier(), enforce: "pre" },
    tailwindcss(),
    sveltekit({
      // Consult https://kit.svelte.dev/docs/integrations#preprocessors
      // for more information about preprocessors
      preprocess: [vitePreprocess()],

      // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
      // If your environment is not supported or you settled on a specific environment, switch out the adapter.
      // See https://kit.svelte.dev/docs/adapters for more information about adapters.
      adapter: adapter({ routes: { include: ["/*"], exclude: ["<all>"] } }),
      prerender: {
        entries: [
          "*",
          "/security.txt",
          "/.well-known/security.txt",
          "/.well-known/atproto-did",
        ],
      },
      paths: {
        origin: firstDefined(
          env.FRONTEND_URL,
          env.CF_PAGES_URL,
          "https://upcraft.dev",
        ),
      },
    }),
    Icons({ compiler: "svelte", autoInstall: true }),
  ],
});
