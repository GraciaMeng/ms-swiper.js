# ms-swiper.js [![npm](https://img.shields.io/npm/v/ms-swiper.js.svg?style=flat)](https://www.npmjs.com/package/ms-swiper.js)

一款基于 Web Component，以 typescript 开发的适配 h5、移动端、桌面端和主流框架的轮播图组件插件

## Demo

[http://GraciaMeng.github.io/ms-swiper.js/demo/](http://GraciaMeng.github.io/ms-swiper.js/demo/)

## Features

- 基于 Web Component 实现
- 基于 Typescript 开发，提供更佳的类型检查
- 适配 h5、移动端、桌面端和主流框架
- 多 api 实现，适合于个人用户以及企业用户

## Installation

```bash
npm install --save ms-swiper.js
```

## Build

```bash
npm ci                 # install dependencies / dev-dependences
npm run build:debug    # debug version ms-swiper.js will be emitted to /dist
npm run build          # minimized release version ms-swiper.min.js will be emitted to /dist
```

[cnpm](https://github.com/cnpm/cnpm) mirror is recommended if you are in Mainland China.

## Getting Started

```html
<!DOCTYPE html>
<html>
  <head>
    <title>ms-swiper.js demo</title>
    <link rel="stylesheet" href="../dist/style/ms-swiper-styles.min.css" />
  </head>
  <body>
    <ms-swiper class="ms-swiper" width="790" height="340"></ms-swiper>
    <script src="../dist/ms-swiper.min.js"></script>
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
</html>
```

## API and Configuration

See [api.md](docs/api.md)

## Debug

```bash
npm ci         # install dependencies / dev-dependences
npm run dev    # watch file changes and build debug version on the ms-swiper
```
