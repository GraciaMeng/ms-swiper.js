export interface SlideCoreType {
  swiperContainer;
  slideTo: (idx: number) => void;
  slidePrevious: () => void;
  slideNext: () => void;
}

export interface AutoCoreType {
  swiperContainer: any;
  _timer: number | null;
  start: () => void;
  stop: () => void;
}
export interface EventCoreType {
  swiperContainer: any;
  onMouseOverEvent: (idx: number) => void;
  onMouseOutEvent: () => void;
  onClickEvent: (type: string, idx?: number) => void;
}
