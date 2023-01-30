import {
  setGlobalConfig,
  getComponentPrefix,
  UIOptions,
} from "../utils/global_config";
import type { App } from "vue";

type ComponentType = any;

// 组件统一注册初始化方法
export function installComponent(
  app: App,
  component: ComponentType,
  options?: UIOptions
) {
  const componentPrefix = getComponentPrefix(options);
  const registered = app.component(componentPrefix + component.name);
  if (!registered) {
    setGlobalConfig(app, options);
    app.component(`${componentPrefix}${component.name}`, component);
  }
}
