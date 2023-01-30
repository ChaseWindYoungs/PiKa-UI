import { resolve } from "path";
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
          '@import "./src/style/globalVars.scss";@import "./src/style/globalVars.scss";',
      },
    },
  },
  build: {
    // 构建目标
    target: "modules",
    // 打包文件目录
    // outDir: "./src",
    // 压缩
    minify: true,
    rollupOptions: {
      external: ["vue"],
      // input: "./src/index.ts",
      // output [https://rollupjs.org/guide/en/#outputformat]
      // output: [
      //   {
      //     format: "umd",
      //     globals: {
      //       vue: "Vue",
      //     },
      //     name: "PikaUI",
      //     entryFileNames: "[name].js",
      //     // 配置打包根目录
      //     dir: "./dist",
      //   },
      //   {
      //     format: "es",
      //     name: "pikaqw-ui",
      //     exports: "named",
      //     entryFileNames: "[name].js",
      //     //         // 配置打包根目录
      //     dir: "./lib",
      //   },
      // ],
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "./src/index.ts"),
      name: "PikaUI",
      // the proper extensions will be added
      // fileName: "pikaqw-ui",
    },
  },
});
