

import { App } from "vue";
import Button from "./src/button.vue";
import { UIOptions } from "@/utils/global_config";
import { installComponent } from "@/utils/install";
// 具名导出
export { Button };

// 导出插件
export default {
  install(app: App, options?: UIOptions) {
    installComponent(app, Button, options);
  },
};