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
      selected.classList.remove("ms-swiper--activated");
    }
    this.swiperContainer.items[idx].classList.add("ms-swiper--activated");

    if (this.swiperContainer.easingFunction !== "fade") {
      const ul = document.querySelector(
        "." + this.swiperContainer.easingFunction
      );
      let transformValue;
      if (this.swiperContainer.vertical) {
        transformValue = `translate(0px, -${
          idx * Number(this.swiperContainer.height)
        }px)`;
      } else {
        transformValue = `translate(-${
          idx * Number(this.swiperContainer.width)
        }px, 0px)`;
      }
      (ul as HTMLElement).style.transform = transformValue;
    }

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
    if (this.swiperContainer.autoplay) {
      this._timer = window.setInterval(
        () => this.swiperContainer.SlideCore.slideNext(),
        this.swiperContainer.interval
      );
    }
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
