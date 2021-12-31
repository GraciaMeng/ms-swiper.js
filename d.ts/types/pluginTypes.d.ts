import type { SwiperType } from "./swiperTypes";
export declare type PluginType = ControllerPluginInterface | PreviousPluginInterface | NextPluginInterface;
export declare type render = (args: any[]) => HTMLElement;
export declare type action = (swiper: any) => void;
export declare type remove = (swiper: any) => void;
export interface ControllerPluginInterface {
    swiper: undefined;
    controller: undefined;
    buttons: [];
    render: render;
    action: action;
    remove: remove;
    onMouseOver: (evt: MouseEvent) => void;
    onMouseOut: () => void;
    onClick: (evt: MouseEvent) => void;
    onSwiper: (evt: CustomEvent) => void;
}
export interface PreviousPluginInterface {
    swiper: SwiperType;
    previous: undefined;
    onClick: (evt: Event) => void;
    render: render;
    action: action;
    remove: remove;
}
export interface NextPluginInterface {
    swiper: SwiperType;
    next: undefined;
    onClick: (evt: Event) => void;
    render: render;
    action: action;
    remove: remove;
}
