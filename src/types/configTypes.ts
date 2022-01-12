import type { PluginType } from "./pluginTypes";
export type EasingFunctionType =
  | "opacity"
  | "linear"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic";

export enum TriggerEnum {
  Click = "click",
  Hover = "hover",
}

export enum EasingFunctionEnum {
  fade = "fade",
  linear = "linear",
  easeInCubic = "easeInCubic",
  easeOutCubic = "easeOutCubic",
  easeInOutCubic = "easeInOutCubic",
}

export interface ConfigInterface {
  id?: string;
  class?: string;
  // 轮播图图片
  images: string[];
  // 宽
  width?: string;
  // 高
  height?: string;
  // 间隔时间
  interval?: number;
  // 是否自动播放
  autoplay?: boolean;
  // 是否一直显示指示器
  "show-dots"?: boolean;
  // 是否显示切换按钮
  "switch-dots"?: boolean;
  // 是否显示指示器
  "indicator-dots"?: boolean;
  // 指示器默认颜色
  "indicator-color"?: string;
  // 指示器激活颜色
  "indicator-active-color"?: string;
  // 指示器触发方式
  trigger?: TriggerEnum;
  // 指示器方向
  vertical?: boolean;
  // 动画
  "easing-function"?: EasingFunctionEnum;
  // 插件
  plugins?: PluginType[];
}
