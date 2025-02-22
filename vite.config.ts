import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    { ...threeMinifier(), enforce: "pre" },
    tailwindcss(),
    sveltekit(),
    Icons({
      compiler: "svelte",
      autoInstall: true,
    }),
  ],
});
