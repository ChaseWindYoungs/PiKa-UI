// as const 的作用 [https://blog.csdn.net/weixin_43263355/article/details/120943605]
export const componentSizes = ["", "default", "small", "large"] as const;

export const buttonNativeTypes = ["button", "submit", "reset"] as const;

export type ComponentSize = typeof componentSizes[number];

export type ButtonNativeTypes = typeof buttonNativeTypes[number];