import type { SwiperObjectInterface } from "../types/swiperTypes";
import type {
  SlideCoreType,
  AutoCoreType,
  EventCoreType,
} from "../types/composeTypes";

export class SlideCore implements SlideCoreType {
  swiperContainer: SwiperObjectInterface;
  constructor(swiperContainer) {
    this.swiperContainer = swiperContainer;
  }
  // 滚动
  slideTo(idx: number): void {
    const selected = this.swiperContainer.getSelectedItem();
    if (selected) {
      selected.className = `ms-swiper-list__item ${this.swiperContainer.easingFunction}`;
    }
    this.swiperContainer.items[
      idx
    ].className = `ms-swiper-list__item--selected ${this.swiperContainer.easingFunction}--selected`;

    const detail = {
      index: idx,
    };
    const event = new CustomEvent("swiper", {
      bubbles: true,
      detail,
    });
    this.swiperContainer.container.dispatchEvent(event);
  }

  // 点击上一个
  slidePrevious(): void {
    const currentIdx = this.swiperContainer.getSelectedItemIndex();
    const previousIdx =
      (this.swiperContainer.length + currentIdx - 1) %
      this.swiperContainer.length;
    this.slideTo(previousIdx);
  }

  // 点击下一个
  slideNext(): void {
    const currentIdx = this.swiperContainer.getSelectedItemIndex();
    const nextIdx = (currentIdx + 1) % this.swiperContainer.length;
    this.slideTo(nextIdx);
  }
}

export class AutoCore implements AutoCoreType {
  swiperContainer: SwiperObjectInterface;
  _timer: number | null;
  constructor(swiperContainer) {
    this.swiperContainer = swiperContainer;
  }
  // 开始自动滚动
  start() {
    this.stop();
    this._timer = window.setInterval(
      () => this.swiperContainer.SlideCore.slideNext(),
      this.swiperContainer.interval
    );
  }

  // 停止自动滚动
  stop() {
    clearInterval(this._timer);
  }
}

export class EventCore implements EventCoreType {
  swiperContainer: SwiperObjectInterface;
  constructor(swiperContainer) {
    this.swiperContainer = swiperContainer;
  }
  onMouseOverEvent(idx) {
    this.swiperContainer.AutoCore.stop();
    this.swiperContainer.SlideCore.slideTo(idx);
  }
  onMouseOutEvent() {
    this.swiperContainer.AutoCore.start();
  }
  onClickEvent(type, idx) {
    this.swiperContainer.AutoCore.stop();
    switch (type) {
      case "next":
        this.swiperContainer.SlideCore.slideNext();
        break;
      case "prev":
        this.swiperContainer.SlideCore.slidePrevious();
        break;
      default:
        this.swiperContainer.SlideCore.slideTo(idx);
        break;
    }
    this.swiperContainer.AutoCore.start();
  }
}
