import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueMacros from "unplugin-vue-macros/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
        // vueJsx: VueJsx(), // 如有需要
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/components/style/globalVars.scss";@import "./src/components/style/globalVars.scss";',
      },
    },
  },
});
