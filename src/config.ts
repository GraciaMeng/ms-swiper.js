import { TriggerEnum, EasingFunctionEnum } from "./types/configTypes";
import type { ConfigInterface } from "./types/configTypes";

export const defaultConfig: ConfigInterface = {
  width: "100vw",
  height: "100vh",
  images: [
    "https://p5.ssl.qhimg.com/t0119c74624763dd070.png",
    "https://p4.ssl.qhimg.com/t01adbe3351db853eb3.jpg",
    "https://p2.ssl.qhimg.com/t01645cd5ba0c3b60cb.jpg",
    "https://p4.ssl.qhimg.com/t01331ac159b58f5478.jpg",
  ],
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
