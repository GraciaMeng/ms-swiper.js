import type { ConfigInterface } from "./configTypes";
import type { PluginType } from "./pluginTypes";
export interface MsSwiperjsInterface {
    createSwiper?: Function;
    isSupported?: Function;
    createConfig?: (config: ConfigInterface) => ConfigInterface;
}
export interface WebComponentInterface {
    render?: (string: any) => void;
    registerPlugins?: (webCompName: string, callback: Function) => void;
    removePlugins?: (plugins: PluginType[]) => void;
}
export declare type SwiperType = SwiperObjectInterface | undefined;
export interface SwiperObjectInterface {
    container: HTMLElement;
    width: ConfigInterface["width"];
    height: ConfigInterface["height"];
    images: ConfigInterface["images"];
    interval: ConfigInterface["interval"];
    easingFunction: ConfigInterface["easing-function"];
    autoplay: boolean;
    showDots: boolean;
    switchDots: boolean;
    indicatorDots: boolean;
    indicatorColor: string;
    indicatorActiveColor: string;
    vertical: boolean;
    items: Element[];
    length: number;
    _timer: number | null;
    registerSwiperElement: () => void;
    render: (string: any) => void;
    slideTo: (idx: number) => void;
    getSelectedItem: () => HTMLElement;
    getSelectedItemIndex: () => number;
    slidePrevious: () => void;
    slideNext: () => void;
    start: () => void;
    stop: () => void;
}
