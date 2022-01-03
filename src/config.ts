import { TriggerEnum, EasingFunctionEnum } from "./types/configTypes";
import type { ConfigInterface } from "./types/configTypes";

export const defaultConfig: ConfigInterface = {
  width: "100vw",
  height: "100vh",
  images: [],
  "easing-function": EasingFunctionEnum.opacity,
  interval: 3000,
  autoplay: true,
  "show-dots": true,
  "switch-dots": true,
  "indicator-dots": true,
  "indicator-color": "#fff",
  "indicator-active-color": "red",
  trigger: TriggerEnum.Click,
  vertical: false,
};

export function createConfig(config): ConfigInterface {
  return Object.assign(defaultConfig, config);
}
