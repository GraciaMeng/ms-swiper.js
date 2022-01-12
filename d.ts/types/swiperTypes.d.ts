import { SelectType } from "./../utils/common";
import type { ConfigInterface } from "./configTypes";
import type { PluginType } from "./pluginTypes";
import type { SlideCoreType, AutoCoreType, EventCoreType } from "./composeTypes";
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
    width: string;
    height: string;
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
    SelectCore: SelectType;
    SlideCore: SlideCoreType;
    AutoCore: AutoCoreType;
    EventCore: EventCoreType;
    registerSwiperElement: () => void;
    render: () => HTMLElement;
    getSelectedItem: () => HTMLElement;
    getSelectedItemIndex: () => number;
}
