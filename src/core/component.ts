import type { PluginType } from "../types/pluginTypes";
import type { WebComponentInterface } from "../types/swiperTypes";

// 公共 WebComponent 类
export class WebComponent implements WebComponentInterface {
  plugins: PluginType[];
  constructor(plugins) {
    this.plugins = plugins;
  }
  render(): string {
    return "";
  }

  // 注册所需插件
  registerPlugins(webCompName: string, callback: Function, ...args): void {
    this.plugins.forEach((plugin) => {
      const pluginContainer = document.createDocumentFragment();
      const pluginComp = plugin.render(args);

      pluginComp.classList.add(`${webCompName}__plugin`);
      pluginContainer.appendChild(pluginComp);
      callback(pluginContainer);
      plugin.action(this);
    });
  }

  // 销毁所有插件
  removePlugins(): void {
    this.plugins.forEach((plugin) => {
      plugin.remove(this);
    });
  }
}
