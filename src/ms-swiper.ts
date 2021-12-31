import Swiper from "./core/features";
import { controllerPlugin, previousPlugin, nextPlugin } from "./core/plugins";
import { createConfig } from "./config";
import type { MsSwiperjsInterface } from "./types/swiperTypes";
import type { ConfigInterface } from "./types/configTypes";

// factory method
function createSwiper(config: ConfigInterface) {
  // if (typeof defaultConfig === "undefined") {
  //   throw TypeError("argument may only be an Object");
  // }
  // 默认参数
  const swiperConfig = msSwiperjs.createConfig(config);

  // 注册插件
  const plugins = [];
  if (swiperConfig.autoplay) {
    plugins.push(controllerPlugin);
  }
  if (swiperConfig["switch-dots"]) {
    plugins.push(previousPlugin, nextPlugin);
  }
  swiperConfig.plugins = plugins;
  // 创建swiper组件
  new Swiper(swiperConfig);
}

const msSwiperjs: MsSwiperjsInterface = {};

msSwiperjs.createSwiper = createSwiper;
msSwiperjs.createConfig = createConfig;

export default msSwiperjs;
