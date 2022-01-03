import type { WebComponentInterface } from "../types/swiperTypes";

// 公共 WebComponent 类
export class WebComponent<T> implements WebComponentInterface<T> {
  plugins: any[];
  constructor(plugins) {
    this.plugins = plugins;
  }
  render(): HTMLElement {
    return document.createElement("div");
  }

  // 注册所需插件
  registerPlugins(webCompName: string, callback: Function, argsObj?: T): void {
    this.plugins.forEach((plugin) => {
      const pluginContainer = document.createDocumentFragment();
      const pluginComp = plugin.render(argsObj);

      pluginComp.classList.add(`${webCompName}__plugin`);
      pluginContainer.appendChild(pluginComp);
      callback(pluginContainer);
      plugin.action(this);
    });
  }

  // 销毁所有插件
  removePlugins(): void {
    this.plugins.forEach((plugin) => plugin.remove(this));
  }
}
