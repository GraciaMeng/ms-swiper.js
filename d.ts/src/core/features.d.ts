import type { ConfigInterface } from "../config";
import type { pluginType } from "../types/pluginType";
import type { SwiperType } from "../types/swiperType";
declare class Swiper implements SwiperType {
    option: ConfigInterface;
    container: HTMLElement;
    mode: ConfigInterface["mode"];
    images: ConfigInterface["images"];
    circle: ConfigInterface["interval"];
    items: Element[];
    length: number;
    _timer: number | null;
    constructor(options: ConfigInterface);
    initSwiper(): void;
    render(): string;
    registerPlugins(plugins: pluginType[]): void;
    removePlugins(plugins: pluginType[]): void;
    slideTo(idx: number): void;
    getSelectedItem(): HTMLElement;
    getSelectedItemIndex(): number;
    slidePrevious(): void;
    slideNext(): void;
    start(): void;
    stop(): void;
}
export default Swiper;
