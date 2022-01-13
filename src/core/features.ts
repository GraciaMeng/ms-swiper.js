import { WebComponent } from "./component";
import { SlideCore, AutoCore, EventCore } from "./compose-core";
import { Select, SelectType } from "../utils/common";
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
import type {
  SlideCoreType,
  AutoCoreType,
  EventCoreType,
} from "../types/composeTypes";

class Swiper
  extends WebComponent<SwiperArgsType>
  implements SwiperObjectInterface
{
  container: HTMLElement;
  width: string;
  height: string;
  images: ConfigInterface["images"];
  interval: ConfigInterface["interval"];
  easingFunction: EasingFunctionEnum;
  autoplay: boolean;
  showDots: boolean;
  indicatorColor: string;
  indicatorActiveColor: string;
  vertical: boolean;
  trigger: TriggerEnum;

  items: Element[];
  length: number;

  SelectCore: SelectType;
  SlideCore: SlideCoreType;
  AutoCore: AutoCoreType;
  EventCore: EventCoreType;

  constructor(container, plugins) {
    super(plugins);
    this.container = container;
    this.container.innerText = "";
    this.width = container.width;
    this.height = container.height;
    this.images = container.images;
    this.interval = container.interval;
    this.easingFunction = container.easingFunction;
    this.autoplay = container.autoplay;
    this.showDots = container.showDots;
    this.indicatorColor = container.indicatorColor;
    this.indicatorActiveColor = container.indicatorActiveColor;
    this.vertical = container.vertical;
    this.trigger = container.trigger;

    this.SelectCore = new Select("ms-swiper", this);
    this.SlideCore = new SlideCore(this);
    this.AutoCore = new AutoCore(this);
    this.EventCore = new EventCore(this);

    this.container.appendChild(this.render());

    this.items = Array.from(
      this.container.querySelectorAll(
        ".ms-swiper-list__item, .ms-swiper-list__item--selected"
      )
    );
    this.length = this.items.length;

    this.registerSwiperElement();
    if (this.length > 0) {
      this.SlideCore.slideTo(0);
      if (container.autoplay) this.AutoCore.start();
    }
  }

  // 注册ms-swiper元素
  registerSwiperElement(): void {
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
  }

  // 渲染滚动图数据
  render(): HTMLElement {
    const images = this.images;
    const renderContent = images.map((img) => {
      const imgNode = createVDom("img", { class: "ms-swiper__img", src: img });
      const liNode = createVDom("li", { class: "ms-swiper-list__item" }, [
        imgNode,
      ]);
      return liNode;
    });
    const style = {
      height: "100%",
      width: "100%",
      flexDirection: "row",
    };
    if (this.easingFunction !== "fade") {
      if (!this.vertical) {
        style.width = this.images.length * Number(this.width) + "px";
      } else {
        style.height = this.images.length * Number(this.height) + "px";
        style.flexDirection = "column";
      }
    }
    const ulNode = createVDom(
      "ul",
      {
        class: `ms-swiper-list ${this.easingFunction}`,
        style,
      },
      renderContent
    );
    return ulNode;
  }

  // 获取当前的item
  getSelectedItem(): HTMLElement {
    return this.SelectCore.getSelectedItem();
  }

  // 获取当前item的索引
  getSelectedItemIndex(): number {
    return this.SelectCore.getSelectedItemIndex();
  }
}

export default Swiper;
