import { previousPluginInterface } from "./../../d.ts/src/types/pluginType.d";
import { createVDom } from "../utils/dom";
import type {
  SwiperObjectInterface,
  SwiperArgsType,
} from "../types/swiperTypes";
import type {
  ControllerPluginInterface,
  PreviousPluginInterface,
  NextPluginInterface,
} from "../types/pluginTypes";

// ControllerPluginInterface = {

export class controllerPlugin implements ControllerPluginInterface {
  swiper: SwiperObjectInterface;
  controller: HTMLElement;
  buttons: HTMLElement[];
  render(argsObj: SwiperArgsType) {
    const { images, indicatorColor } = argsObj;
    const controllerDotNodeList = images.map((_, index) => {
      const spanNode = createVDom("span", {
        class: `ms-swiper-list__control-buttons${
          index === 0 ? "--selected" : ""
        }`,
        style: `background-color:${indicatorColor}`,
      });
      return spanNode;
    });
    const controlNode = createVDom(
      "div",
      { class: "ms-swiper-list__control" },
      controllerDotNodeList
    );
    return controlNode;
  }
  onMouseOver(evt: Event) {
    const idx = this.buttons.indexOf(evt.target as HTMLElement);
    if (idx < 0) return;
    this.swiper.stop();
    this.swiper.slideTo(idx);
  }
  onMouseOut() {
    this.swiper.start();
  }
  onClick(evt) {
    const idx = this.buttons.indexOf(evt.target);
    if (idx < 0) return;
    this.swiper.stop();
    this.swiper.slideTo(idx);
    this.swiper.start();
  }
  onSwiper(evt) {
    const idx = evt.detail.index;
    const selected = this.controller.querySelector(
      ".ms-swiper-list__control-buttons--selected"
    );
    if (selected) {
      selected.className = "ms-swiper-list__control-buttons";
      (selected as HTMLElement).style.backgroundColor =
        this.swiper.indicatorColor;
    }
    this.buttons[idx].className = "ms-swiper-list__control-buttons--selected";
    this.buttons[idx].style.backgroundColor = this.swiper.indicatorActiveColor;
  }
  action(swiper) {
    this.swiper = swiper;
    const controller = swiper.container.querySelector(
      ".ms-swiper-list__control"
    );
    if (controller) {
      this.controller = controller;
      this.buttons = Array.from(
        controller.querySelectorAll(
          ".ms-swiper-list__control-buttons, .ms-swiper-list__control-buttons--selected"
        )
      );
      if (swiper.trigger === "hover") {
        controller.addEventListener("mouseover", (evt) => {
          this.onMouseOver(evt);
        });

        controller.addEventListener("mouseout", () => {
          this.onMouseOut();
        });
      } else if (swiper.trigger === "click") {
        controller.addEventListener("click", (evt) => {
          this.onClick(evt);
        });
      }

      swiper.container.addEventListener("swiper", (evt) => {
        this.onSwiper(evt);
      });
    }
  }
  remove(swiper) {
    if (swiper.trigger === "hover") {
      this.controller.removeEventListener("mouseout", (event) => {
        this.onMouseOver(event);
      });
      this.controller.removeEventListener("mouseout", () => {
        this.onMouseOut();
      });
    } else if (swiper.trigger === "click") {
      this.controller.removeEventListener("click", (event) => {
        this.onClick(event);
      });
    }
    swiper.container.removeEventListener("swiper", (evt) => {
      this.onSwiper(evt);
    });
  }
}

export class previousPlugin implements PreviousPluginInterface {
  swiper: SwiperObjectInterface;
  previous: HTMLElement;
  render() {
    const previousNode = createVDom("span", {
      class: "ms-swiper-list__previous",
    });
    return previousNode;
  }
  onClick(evt) {
    evt.preventDefault();
    this.swiper.stop();
    this.swiper.slidePrevious();
    this.swiper.start();
  }
  action(swiper) {
    this.previous = swiper.container.querySelector(".ms-swiper-list__previous");
    if (!this.previous) return;
    this.swiper = swiper;
    this.previous.addEventListener("click", (evt) => {
      this.onClick(evt);
    });
  }
  remove() {
    this.previous.removeEventListener("click", (evt) => {
      this.onClick(evt);
    });
  }
}

export class nextPlugin implements NextPluginInterface {
  swiper: SwiperObjectInterface;
  next: HTMLElement;
  render() {
    const nextNode = createVDom("span", {
      class: "ms-swiper-list__next",
    });
    return nextNode;
  }
  onClick(evt) {
    evt.preventDefault();
    this.swiper.stop();
    this.swiper.slideNext();
    this.swiper.start();
  }
  action(swiper) {
    this.next = swiper.container.querySelector(".ms-swiper-list__next");
    if (!this.next) return;
    this.swiper = swiper;
    this.next.addEventListener("click", (evt) => {
      this.onClick(evt);
    });
  }
  remove() {
    this.next.removeEventListener("click", (evt) => {
      this.onClick(evt);
    });
  }
}
