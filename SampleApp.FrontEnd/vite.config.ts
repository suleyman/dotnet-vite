import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/pages/home/home.ts"),
      },
    },
  },
});

export default viteConfig;
