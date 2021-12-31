import type { SwiperType } from "../types/swiperType";
export declare type pluginType = controllerPluginInterface | previousPluginInterface | nextPluginInterface;
export declare type render = (images: string[]) => HTMLElement;
export declare type action = (swiper: any) => void;
export declare type remove = (swiper: any) => void;
export interface controllerPluginInterface {
    swiper: undefined;
    controller: undefined;
    buttons: [];
    render: render;
    action: action;
    remove: remove;
    onMouseOver: (evt: MouseEvent) => void;
    onMouseOut: () => void;
    onSwiper: (evt: CustomEvent) => void;
}
export interface previousPluginInterface {
    swiper: SwiperType;
    previous: undefined;
    onClick: (evt: Event) => void;
    render: render;
    action: action;
    remove: remove;
}
export interface nextPluginInterface {
    swiper: SwiperType;
    next: undefined;
    onClick: (evt: Event) => void;
    render: render;
    action: action;
    remove: remove;
}
