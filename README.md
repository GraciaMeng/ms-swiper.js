# ms-swiper.js [![npm](https://img.shields.io/npm/v/ms-swiper.js.svg?style=flat)](https://www.npmjs.com/package/flv.js)

一款基于Web Component，以typescript开发的适配h5、移动端、桌面端和主流框架的轮播图组件插件

## Demo

[http://GraciaMeng.github.io/ms-swiper.js/demo/](http://GraciaMeng.github.io/ms-swiper.js/demo/)

## Features

- 基于Web Component实现
- 基于Typescript开发，提供更佳的类型检查
- 适配h5、移动端、桌面端和主流框架
- 多api实现，适合于个人用户以及企业用户

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
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>ms-swiper.js demo</title>
    <link rel="stylesheet" href="../dist/style/ms-swiper-styles.min.css" />
  </head>
  <body>
    <ms-swiper></ms-swiper>
    <script src="../dist/ms-swiper.min.js"></script>
    <script>
      new msSwiperjs.createSwiper();
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
