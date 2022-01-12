import Swiper from "./features";
import { controllerPlugin, previousPlugin, nextPlugin } from "./plugins";

export class MsSwiper extends HTMLElement {
  static get observedAttributes() {
    return [
      "class",
      "width",
      "height",
      "images",
      "easing-function",
      "interval",
      "autoplay",
      "show-dots",
      "switch-dots",
      "indicator-dots",
      "indicator-color",
      "indicator-active-color",
      "trigger",
      "vertical",
    ];
  }
  get class() {
    return this.getAttribute("class");
  }
  get width() {
    return this.getAttribute("width") || 340;
  }
  get height() {
    return this.getAttribute("height") || 790;
  }
  get images() {
    const imagesValue = this.getAttribute("images");
    if (!imagesValue) {
      return [];
    } else if (typeof imagesValue == "string") {
      return imagesValue.split(",");
    } else {
      return imagesValue;
    }
  }
  get easingFunction() {
    return this.getAttribute("easing-function") || "fade";
  }
  get interval() {
    return parseInt(this.getAttribute("interval")) || 3000;
  }
  get autoplay() {
    return this.justifyExistence(this.getAttribute("autoplay"));
  }
  get showDots() {
    return this.justifyExistence(this.getAttribute("show-dots"));
  }
  get switchDots() {
    return this.justifyExistence(this.getAttribute("switch-dots"));
  }
  get indicatorDots() {
    return this.justifyExistence(this.getAttribute("indicator-dots"));
  }
  get indicatorColor() {
    return this.getAttribute("indicator-color") || "#fff";
  }
  get indicatorActiveColor() {
    return this.getAttribute("indicator-active-color") || "red";
  }
  get trigger() {
    return this.getAttribute("trigger") || "click";
  }
  get vertical() {
    return this.getAttribute("vertical");
  }
  constructor() {
    super();
  }
  justifyExistence(value) {
    const isTrueArray = ["", "true", true, null];
    return isTrueArray.includes(value);
  }
  connectedCallback() {
    if (!this.class) throw new Error("It should need a container");
    if (this.images.length === 0)
      throw new Error("It should need images array");
    const plugins = [];

    // 限制图片多于2张才扩展插件
    if (this.images.length > 1) {
      //
      if (this.indicatorDots) {
        plugins.push(controllerPlugin);
      }
      if (this.switchDots) {
        plugins.push(previousPlugin, nextPlugin);
      }
    }

    this.style.width = this.width + "px";
    this.style.height = this.height + "px";
    new Swiper(this, plugins);
  }
}
