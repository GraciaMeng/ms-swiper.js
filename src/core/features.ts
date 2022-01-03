import { WebComponent } from "./component";
import { createVDom } from "../utils/dom";
import type {
  ConfigInterface,
  TriggerEnum,
  EasingFunctionEnum,
} from "../types/configTypes";
import type {
  SwiperObjectInterface,
  SwiperArgsType,
} from "../types/swiperTypes";

class MsSwiper extends HTMLElement {
  static get observedAttributes() {
    return ["width", "height"];
  }
  constructor() {
    super();
  }
}

class Swiper
  extends WebComponent<SwiperArgsType>
  implements SwiperObjectInterface
{
  container: HTMLElement;
  width: ConfigInterface["width"];
  height: ConfigInterface["height"];
  images: ConfigInterface["images"];
  interval: ConfigInterface["interval"];
  easingFunction: EasingFunctionEnum;
  autoplay: boolean;
  showDots: boolean;
  switchDots: boolean;
  indicatorDots: boolean;
  indicatorColor: string;
  indicatorActiveColor: string;
  vertical: boolean;
  trigger: TriggerEnum;

  items: Element[];
  length: number;
  _timer: number | null;

  constructor(options: ConfigInterface) {
    super(options.plugins);
    this.container = document.querySelector("#ms-swiper");
    this.container.innerText = "";
    this.width = options.width;
    this.height = options.height;
    this.images = options.images;
    this.interval = options.interval;
    this.easingFunction = options["easing-function"];
    this.autoplay = options.autoplay;
    this.showDots = options["show-dots"];
    this.switchDots = options["switch-dots"];
    this.indicatorDots = options["indicator-dots"];
    this.indicatorColor = options["indicator-color"];
    this.indicatorActiveColor = options["indicator-active-color"];
    this.vertical = options.vertical;
    this.trigger = options.trigger;

    this.container.appendChild(this.render());

    this.items = Array.from(
      this.container.querySelectorAll(
        ".ms-swiper-list__item, .ms-swiper-list__item--selected"
      )
    );
    this.length = this.items.length;
    this.registerSwiperElement();
    if (this.length > 0) {
      this.slideTo(0);
      if (options.autoplay) this.start();
    }
  }

  // 注册ms-swiper元素
  registerSwiperElement(): void {
    this.container.style.width = this.width;
    this.container.style.height = this.height;
    this.registerPlugins(
      "ms-swiper",
      (pluginContainer: DocumentFragment) => {
        if (this.showDots) {
          pluginContainer.children[0].classList.add("ms-swiper__plugin--show");
        }
        this.container.appendChild(pluginContainer);
      },
      {
        images: this.images,
        indicatorColor: this.indicatorColor,
      }
    );
    customElements.define("ms-swiper", MsSwiper);
  }

  // 渲染滚动图数据
  render(): HTMLElement {
    const images = this.images;
    const renderContent = images.map((img) => {
      const imgNode = createVDom("img", { class: "ms-swiper__img", src: img });
      const liNode = createVDom(
        "li",
        { class: `ms-swiper-list__item ${this.easingFunction}` },
        [imgNode]
      );
      return liNode;
    });
    const ulNode = createVDom("ul", { class: "ms-swiper-list" }, renderContent);
    return ulNode;
  }

  // 滚动
  slideTo(idx: number): void {
    const selected = this.getSelectedItem();
    if (selected) {
      selected.className = `ms-swiper-list__item ${this.easingFunction}`;
    }
    this.items[
      idx
    ].className = `ms-swiper-list__item--selected ${this.easingFunction}--selected`;

    const detail = {
      index: idx,
    };
    const event = new CustomEvent("swiper", {
      bubbles: true,
      detail,
    });
    this.container.dispatchEvent(event);
  }

  // 获取当前的item
  getSelectedItem(): HTMLElement {
    return this.container.querySelector(".ms-swiper-list__item--selected");
  }

  // 获取当前item的索引
  getSelectedItemIndex(): number {
    return this.items.indexOf(this.getSelectedItem());
  }

  // 点击上一个
  slidePrevious(): void {
    const currentIdx = this.getSelectedItemIndex();
    const previousIdx = (this.length + currentIdx - 1) % this.length;
    this.slideTo(previousIdx);
  }

  // 点击下一个
  slideNext(): void {
    const currentIdx = this.getSelectedItemIndex();
    const nextIdx = (currentIdx + 1) % this.length;
    this.slideTo(nextIdx);
  }

  // 开始自动滚动
  start(): void {
    this.stop();
    this._timer = window.setInterval(() => this.slideNext(), this.interval);
  }

  // 停止自动滚动
  stop(): void {
    clearInterval(this._timer);
  }
}

export default Swiper;
