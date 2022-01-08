import type { SwiperObjectInterface, SwiperArgsType } from "../types/swiperTypes";
import type { ControllerPluginInterface, PreviousPluginInterface, NextPluginInterface } from "../types/pluginTypes";
export declare class controllerPlugin implements ControllerPluginInterface {
    swiper: SwiperObjectInterface;
    controller: HTMLElement;
    buttons: HTMLElement[];
    render(argsObj: SwiperArgsType): HTMLElement;
    onMouseOver(evt: Event): void;
    onMouseOut(): void;
    onClick(evt: any): void;
    onSwiper(evt: any): void;
    action(swiper: any): void;
    remove(swiper: any): void;
}
export declare class previousPlugin implements PreviousPluginInterface {
    swiper: SwiperObjectInterface;
    previous: HTMLElement;
    render(): HTMLElement;
    onClick(evt: any): void;
    action(swiper: any): void;
    remove(): void;
}
export declare class nextPlugin implements NextPluginInterface {
    swiper: SwiperObjectInterface;
    next: HTMLElement;
    render(): HTMLElement;
    onClick(evt: any): void;
    action(swiper: any): void;
    remove(): void;
}
