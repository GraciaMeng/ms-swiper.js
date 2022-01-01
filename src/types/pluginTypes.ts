import type { SwiperType } from "./swiperTypes";

export type PluginType =
  | ControllerPluginInterface
  | PreviousPluginInterface
  | NextPluginInterface;

export type render = (argsObj: Object) => HTMLElement;
export type action = (swiper) => void;
export type remove = (swiper) => void;

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
