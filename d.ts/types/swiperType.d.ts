import type { ConfigInterface } from "../config";
import type { pluginType } from "./pluginType";
export declare type SwiperType = SwiperObjectInterface | undefined;
export interface SwiperObjectInterface {
    option: ConfigInterface;
    container: HTMLElement;
    mode: ConfigInterface["mode"];
    images: ConfigInterface["images"];
    circle: ConfigInterface["interval"];
    items: Element[];
    length: number;
    _timer: number | null;
    initSwiper: () => void;
    render: (string: any) => void;
    registerPlugins: (plugins: pluginType[]) => void;
    removePlugins: (plugins: pluginType[]) => void;
    slideTo: (idx: number) => void;
    getSelectedItem: () => HTMLElement;
    getSelectedItemIndex: () => number;
    slidePrevious: () => void;
    slideNext: () => void;
    start: () => void;
    stop: () => void;
}
