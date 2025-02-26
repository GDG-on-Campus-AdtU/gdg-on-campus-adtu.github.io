import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  extensions: [".svelte", ".svx"],
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter({
      precompress: true,
    }),
  },
  paths: {
    base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
  },
};

export default config;
