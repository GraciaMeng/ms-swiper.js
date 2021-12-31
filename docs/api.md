# ms-swiper.js API

This document use TypeScript-like definitions to describe interfaces.

## Interfaces

ms-swiper.js exports all the interfaces through `msSwiperjs` object which exposed in global context `window`.

`msSwiperjs` object can also be accessed by require or ES6 import.

Functions:

- [msSwiperjs.createSwiper()](#msSwiperjscreateSwiper)
- [msSwiperjs.isSupported()](#msSwiperjsisSupported)

### msSwiperjs.createSwiper()

```js
function createSwiper(config: ConfigInterface): void;
```

Create a swiper component instance according to `type` field indicated in `ConfigInterface`.

### ConfigInterface

|          Field           |         Type         |                                                    Description                                                    |
| :----------------------: | :------------------: | :---------------------------------------------------------------------------------------------------------------: |
|         `width`          |       `string`       |                                                     组件宽度                                                      |
|         `height`         |       `string`       |                                                     组件高度                                                      |
|         `images`         |      `string[]`      |                                                    轮播图图片                                                     |
|        `interval`        |      `boolean`       |                                                   轮播间隔时间                                                    |
|        `autoplay`        |      `boolean`       |                                                   是否自动播放                                                    |
|       `show-dots`        |      `boolean`       |                                                是否一直显示指示器                                                 |
|      `switch-dots`       |      `boolean`       |                                                 是否显示切换按钮                                                  |
|     `indicator-dots`     |      `boolean`       |                                                  是否显示指示器                                                   |
|    `indicator-color`     |       `string`       |                                                  指示器默认颜色                                                   |
| `indicator-active-color` |       `string`       |                                                  指示器激活颜色                                                   |
|        `trigger`         |    `TriggerEnum`     |                           指示器触发方式 Indicates swiper type, `'click'` or `'hover'`                            |
|        `vertical`        |      `boolean`       |                                                    指示器方向                                                     |
|    `easing-function`     | `EasingFunctionEnum` | 动画 Indicates swiper type, `'opacity'` or `'linear'` or `'easeInCubic'` or `'easeOutCubic'`or `'easeInOutCubic'` |
|        `plugins`         |    `PluginType[]`    |                                                       插件                                                        |

### msSwiperjs.isSupported() (正在实现中。。。)

```js
function isSupported(): boolean;
```

Return `true` if basic playback can works on your browser.

### interface Swiper (abstract)

```typescript
interface Swiper {
  container: HTMLElement;
  width: string;
  height: string;
  images: string[];
  interval: number;
  easingFunction: string;
  autoplay: boolean;
  showDots: boolean;
  switchDots: boolean;
  indicatorDots: boolean;
  indicatorColor: string;
  indicatorActiveColor: string;
  vertical: boolean;
  items: Element[];
  length: number;
  _timer: number | null;

  registerSwiperElement: () => void;
  render: (string) => void;
  slideTo: (idx: number) => void;
  getSelectedItem: () => HTMLElement;
  getSelectedItemIndex: () => number;
  slidePrevious: () => void;
  slideNext: () => void;
  start: () => void;
  stop: () => void;
}
```
