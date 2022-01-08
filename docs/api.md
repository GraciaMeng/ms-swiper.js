# ms-swiper.js

一款基于 Web Component 的使用 ts 的可适配 h5、移动端、桌面端、React.js 和 Vue.js 轮播图组件

## 基本用法

ms-swiper.js exports all the interfaces through `msSwiperjs` object which exposed in global context `window`.

`msSwiperjs` object can also be accessed by require or ES6 import.

:::demo

```html
<head>
  <link rel="stylesheet" href="../dist/style/ms-swiper-styles.css" />
  <body>
    <ms-swiper class="ms-swiper" width="790" height="340"></ms-swiper>
    <script src="../dist/ms-swiper.js"></script>

    <script>
      const swiper = document.querySelector(".ms-swiper");
      swiper.setAttribute("images", [
        "https://p5.ssl.qhimg.com/t0119c74624763dd070.png",
        "https://p4.ssl.qhimg.com/t01adbe3351db853eb3.jpg",
        "https://p2.ssl.qhimg.com/t01645cd5ba0c3b60cb.jpg",
        "https://p4.ssl.qhimg.com/t01331ac159b58f5478.jpg",
      ]);
      msSwiperjs.createSwiper();
    </script>
  </body>
</head>
```

### Props

|           参数           |         类型         |                                                      描述                                                      |
| :----------------------: | :------------------: | :------------------------------------------------------------------------------------------------------------: |
|         `width`          |       `string`       |                                                    组件宽度                                                    |
|         `height`         |       `string`       |                                                    组件高度                                                    |
|         `images`         |      `string[]`      |                                                   轮播图图片                                                   |
|        `interval`        |      `boolean`       |                                                  轮播间隔时间                                                  |
|        `autoplay`        |      `boolean`       |                                                  是否自动播放                                                  |
|       `show-dots`        |      `boolean`       |                                               是否一直显示指示器                                               |
|      `switch-dots`       |      `boolean`       |                                                是否显示切换按钮                                                |
|     `indicator-dots`     |      `boolean`       |                                                 是否显示指示器                                                 |
|    `indicator-color`     |       `string`       |                                                 指示器默认颜色                                                 |
| `indicator-active-color` |       `string`       |                                                 指示器激活颜色                                                 |
|        `trigger`         |    `TriggerEnum`     |                          指示器触发方式 Indicates swiper type, `'click'` or `'hover'`                          |
|        `vertical`        |      `boolean`       |                                                   指示器方向                                                   |
|    `easing-function`     | `EasingFunctionEnum` | 动画 Indicates swiper type, `'fade'` or `'linear'` or `'easeInCubic'` or `'easeOutCubic'`or `'easeInOutCubic'` |
|        `plugins`         |    `PluginType[]`    |                                                      插件                                                      |

### msSwiperjs.isSupported() (正在实现中。。。)

```js
function isSupported(): boolean;
```
