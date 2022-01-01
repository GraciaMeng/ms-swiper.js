import type { ConfigInterface } from "../types/configTypes";
import type { PluginType } from "../types/pluginTypes";
import type { SwiperObjectInterface } from "../types/swiperTypes";
declare class Swiper implements SwiperObjectInterface {
    container: HTMLElement;
    width: ConfigInterface["width"];
    height: ConfigInterface["height"];
    images: ConfigInterface["images"];
    interval: ConfigInterface["interval"];
    easingFunction: ConfigInterface["easing-function"];
    autoplay: boolean;
    switchDots: boolean;
    indicatorDots: boolean;
    indicatorColor: string;
    indicatorActiveColor: string;
    vertical: boolean;
    items: Element[];
    length: number;
    _timer: number | null;
    constructor(options: ConfigInterface);
    registerSwiperElement(): void;
    render(): string;
    registerPlugins(plugins: PluginType[]): void;
    removePlugins(plugins: PluginType[]): void;
    slideTo(idx: number): void;
    getSelectedItem(): HTMLElement;
    getSelectedItemIndex(): number;
    slidePrevious(): void;
    slideNext(): void;
    start(): void;
    stop(): void;
}
export default Swiper;