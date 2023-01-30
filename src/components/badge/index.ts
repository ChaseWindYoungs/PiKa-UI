import { App } from "vue";
import Badge from "./src/badge.vue";
import { UIOptions } from "@/utils/global_config";
import { installComponent } from "@/utils/install";
// 具名导出
export { Badge };

// 导出插件
export default {
  install(app: App, options?: UIOptions) {
    installComponent(app, Badge, options);
  },
};
