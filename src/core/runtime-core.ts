import { MsSwiper } from "./compile-core";

export function beforeMounted() {
  customElements.define("ms-swiper", MsSwiper);
}
