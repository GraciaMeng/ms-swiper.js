import type { SwiperObjectInterface } from "./swiperTypes";

export type PluginType =
  | ControllerPluginInterface
  | PreviousPluginInterface
  | NextPluginInterface;

export interface PluginInterface<T> {
  render: (argsObj?: Object) => HTMLElement;
  action: T;
  remove: T;
}

export interface SwiperPluginInterface
  extends PluginInterface<(swiper: SwiperObjectInterface) => void> {
  swiper: SwiperObjectInterface;
}

export interface ControllerPluginInterface extends SwiperPluginInterface {
  controller: HTMLElement;
  buttons: HTMLElement[];
  onMouseOver: (evt: MouseEvent) => void;
  onMouseOut: () => void;
  onClick: (evt: MouseEvent) => void;
  onSwiper: (evt: CustomEvent) => void;
}

export interface PreviousPluginInterface extends SwiperPluginInterface {
  previous: HTMLElement;
  onClick: (evt: Event) => void;
}

export interface NextPluginInterface extends SwiperPluginInterface {
  next: HTMLElement;
  onClick: (evt: Event) => void;
}
