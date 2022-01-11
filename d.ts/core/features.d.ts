import { WebComponent } from "./component";
import { SelectType } from "../utils/common";
import type { ConfigInterface, TriggerEnum, EasingFunctionEnum } from "../types/configTypes";
import type { SwiperObjectInterface, SwiperArgsType } from "../types/swiperTypes";
import type { SlideCoreType, AutoCoreType, EventCoreType } from "../types/composeTypes";
declare class Swiper extends WebComponent<SwiperArgsType> implements SwiperObjectInterface {
    container: HTMLElement;
    images: ConfigInterface["images"];
    interval: ConfigInterface["interval"];
    easingFunction: EasingFunctionEnum;
    autoplay: boolean;
    showDots: boolean;
    indicatorColor: string;
    indicatorActiveColor: string;
    vertical: boolean;
    trigger: TriggerEnum;
    items: Element[];
    length: number;
    SelectCore: SelectType;
    SlideCore: SlideCoreType;
    AutoCore: AutoCoreType;
    EventCore: EventCoreType;
    constructor(container: any, plugins: any);
    registerSwiperElement(): void;
    render(): HTMLElement;
    getSelectedItem(): HTMLElement;
    getSelectedItemIndex(): number;
}
export default Swiper;
