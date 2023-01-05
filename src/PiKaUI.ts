import type { App, Plugin } from "vue";
import * as components from "./components";
import version from "./version";

// 入口文件, 工作就是引入注册所有组件，并对外提供 install() 方法，供给 Vue.use() 方法使用。
const PiKaUI = {
  version,
  install(app: App) {
    Object.keys(components).forEach((key) => {
      const Component = components[key as keyof typeof components];
      // 遍历可能有别的对象，只对插件执行use方法
      if ("install" in Component || typeof Component === "function") {
        app.use(Component as Plugin);
      }
    });
  },
};

export default PiKaUI;
