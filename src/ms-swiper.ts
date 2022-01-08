import { beforeMounted } from "./core/runtime-core";
import { createConfig } from "./config";
import type { MsSwiperjsInterface } from "./types/swiperTypes";

// factory method
function createSwiper() {
  msSwiperjs.beforeMounted();
}

const msSwiperjs: MsSwiperjsInterface = {};

msSwiperjs.beforeMounted = beforeMounted;
msSwiperjs.createSwiper = createSwiper;
msSwiperjs.createConfig = createConfig;

export default msSwiperjs;
