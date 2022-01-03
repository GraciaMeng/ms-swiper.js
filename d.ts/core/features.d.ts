import { WebComponent } from "./component";
import type { ConfigInterface, TriggerEnum, EasingFunctionEnum } from "../types/configTypes";
import type { SwiperObjectInterface, SwiperArgsType } from "../types/swiperTypes";
declare class Swiper extends WebComponent<SwiperArgsType> implements SwiperObjectInterface {
    container: HTMLElement;
    width: ConfigInterface["width"];
    height: ConfigInterface["height"];
    images: ConfigInterface["images"];
    interval: ConfigInterface["interval"];
    easingFunction: EasingFunctionEnum;
    autoplay: boolean;
    showDots: boolean;
    switchDots: boolean;
    indicatorDots: boolean;
    indicatorColor: string;
    indicatorActiveColor: string;
    vertical: boolean;
    trigger: TriggerEnum;
    items: Element[];
    length: number;
    _timer: number | null;
    constructor(options: ConfigInterface);
    registerSwiperElement(): void;
    render(): HTMLElement;
    slideTo(idx: number): void;
    getSelectedItem(): HTMLElement;
    getSelectedItemIndex(): number;
    slidePrevious(): void;
    slideNext(): void;
    start(): void;
    stop(): void;
}
export default Swiper;
