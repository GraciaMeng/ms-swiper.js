import type {
  ControllerPluginInterface,
  PreviousPluginInterface,
  NextPluginInterface,
} from "../types/pluginTypes";

export const controllerPlugin: ControllerPluginInterface = {
  swiper: undefined,
  controller: undefined,
  buttons: [],
  render(args) {
    const [images, indicatorColor] = args;
    const control = document.createElement("div");
    control.className = "ms-swiper-list__control";
    control.innerHTML = `${images
      .map(
        (_, index) =>
          `<span class="ms-swiper-list__control-buttons${
            index === 0 ? "--selected" : ""
          }" style="background-color:${indicatorColor}"></span>`
      )
      .join("")}`.trim();
    return control;
  },
  onMouseOver(evt) {
    const idx = this.buttons.indexOf(evt.target);
    if (idx < 0) return;
    this.swiper.stop();
    this.swiper.slideTo(idx);
  },
  onMouseOut() {
    this.swiper.start();
  },
  onClick(evt) {
    const idx = this.buttons.indexOf(evt.target);
    if (idx < 0) return;
    this.swiper.stop();
    this.swiper.slideTo(idx);
    this.swiper.start();
  },
  onSwiper(evt) {
    const idx = evt.detail.index;
    const selected = this.controller.querySelector(
      ".ms-swiper-list__control-buttons--selected"
    );
    if (selected) {
      selected.className = "ms-swiper-list__control-buttons";
      selected.style.backgroundColor = this.swiper.indicatorColor;
    }
    this.buttons[idx].className = "ms-swiper-list__control-buttons--selected";
    this.buttons[idx].style.backgroundColor = this.swiper.indicatorActiveColor;
  },
  action(swiper) {
    this.swiper = swiper;
    const controller = swiper.container.querySelector(
      ".ms-swiper-list__control"
    );
    if (controller) {
      this.controller = controller;
      this.buttons = [
        ...controller.querySelectorAll(
          ".ms-swiper-list__control-buttons, .ms-swiper-list__control-buttons--selected"
        ),
      ];
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
  },
  remove(swiper) {
    if (swiper.trigger === "hover") {
      this.controller.removeEventListener("mouseout", () => {
        this.onMouseOver();
      });
      this.controller.removeEventListener("mouseout", () => {
        this.onMouseOut();
      });
    } else if (swiper.trigger === "click") {
      this.controller.removeEventListener("click", () => {
        this.onClick();
      });
    }
    swiper.container.removeEventListener("swiper", (evt) => {
      this.onSwiper(evt);
    });
  },
};

export const previousPlugin: PreviousPluginInterface = {
  swiper: undefined,
  previous: undefined,
  render() {
    const previous = document.createElement("span");
    previous.className = "ms-swiper-list__previous";
    return previous;
  },
  onClick(evt) {
    evt.preventDefault();
    this.swiper.stop();
    this.swiper.slidePrevious();
    this.swiper.start();
  },
  action(swiper) {
    this.previous = swiper.container.querySelector(".ms-swiper-list__previous");
    if (!this.previous) return;
    this.swiper = swiper;
    this.previous.addEventListener("click", (evt) => {
      this.onClick(evt);
    });
  },
  remove() {
    this.previous.removeEventListener("click", (evt) => {
      this.onClick(evt);
    });
  },
};

export const nextPlugin: NextPluginInterface = {
  swiper: undefined,
  next: undefined,
  render() {
    const next = document.createElement("span");
    next.className = "ms-swiper-list__next";
    return next;
  },
  onClick(evt) {
    evt.preventDefault();
    this.swiper.stop();
    this.swiper.slideNext();
    this.swiper.start();
  },
  action(swiper) {
    this.next = swiper.container.querySelector(".ms-swiper-list__next");
    if (!this.next) return;
    this.swiper = swiper;
    this.next.addEventListener("click", (evt) => {
      this.onClick(evt);
    });
  },
  remove() {
    this.next.removeEventListener("click", (evt) => {
      this.onClick(evt);
    });
  },
};
