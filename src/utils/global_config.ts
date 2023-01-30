import type { App } from "vue";

const CLASS_PREFIX = "pk";
const GLOBAL_CONFIG_NAME = "_pk";
const COMPONENT_PREFIX = "Pk";


export interface UIOptions {
  classPrefix?: string;
  componentPrefix?: string;
}

// 注入全局app属性
export const setGlobalConfig = (
  app: App,
  options: UIOptions = { classPrefix: CLASS_PREFIX }
) => {
  app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
    ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
    classPrefix: options.classPrefix,
  };
};

// 获取组件name的prefix
export const getComponentPrefix = (options?: UIOptions): string =>
  options?.componentPrefix ?? COMPONENT_PREFIX

