import type { ConfigInterface } from "./configTypes";
import type { PluginType } from "./pluginTypes";
export interface MsSwiperjsInterface {
    beforeMounted?: Function;
    createSwiper?: Function;
    isSupported?: Function;
    createConfig?: (config: ConfigInterface) => ConfigInterface;
}
export interface WebComponentInterface<T> {
    render?: () => HTMLElement;
    registerPlugins?: (webCompName: string, callback: Function, argsObj: T) => void;
    removePlugins?: (plugins: PluginType[]) => void;
}
export declare type SwiperType = SwiperObjectInterface | undefined;
export interface SwiperArgsType {
    images: ConfigInterface["images"];
    indicatorColor: string;
}
export interface SwiperObjectInterface extends ConfigInterface {
    container: HTMLElement;
    images: ConfigInterface["images"];
    interval: ConfigInterface["interval"];
    easingFunction: ConfigInterface["easing-function"];
    autoplay: boolean;
    showDots: boolean;
    indicatorColor: string;
    indicatorActiveColor: string;
    vertical: boolean;
    items: Element[];
    length: number;
    _timer: number | null;
    registerSwiperElement: () => void;
    render: () => HTMLElement;
    slideTo: (idx: number) => void;
    getSelectedItem: () => HTMLElement;
    getSelectedItemIndex: () => number;
    slidePrevious: () => void;
    slideNext: () => void;
    start: () => void;
    stop: () => void;
}
