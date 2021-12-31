import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/pages/home/home.ts"),
        about: resolve(__dirname, "src/pages/about/about.ts"),
        contact: resolve(__dirname, "src/pages/contact/contact.ts"),
      },
    },
  },
});

export default viteConfig;
