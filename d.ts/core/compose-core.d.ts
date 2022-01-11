import type { SwiperObjectInterface } from "../types/swiperTypes";
import type { SlideCoreType, AutoCoreType, EventCoreType } from "../types/composeTypes";
export declare class SlideCore implements SlideCoreType {
    swiperContainer: SwiperObjectInterface;
    constructor(swiperContainer: any);
    slideTo(idx: number): void;
    slidePrevious(): void;
    slideNext(): void;
}
export declare class AutoCore implements AutoCoreType {
    swiperContainer: SwiperObjectInterface;
    _timer: number | null;
    constructor(swiperContainer: any);
    start(): void;
    stop(): void;
}
export declare class EventCore implements EventCoreType {
    swiperContainer: SwiperObjectInterface;
    constructor(swiperContainer: any);
    onMouseOverEvent(idx: any): void;
    onMouseOutEvent(): void;
    onClickEvent(type: any, idx: any): void;
}
