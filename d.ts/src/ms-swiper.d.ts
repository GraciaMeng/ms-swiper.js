import type { ConfigInterface } from "./config";
interface msSwiperjsInterface {
    createSwiper?: Function;
    isSupported?: Function;
    createDefaultConfig?: () => ConfigInterface;
}
declare const msSwiperjs: msSwiperjsInterface;
export default msSwiperjs;
