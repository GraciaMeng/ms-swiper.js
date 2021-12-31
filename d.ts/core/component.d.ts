import type { PluginType } from "../types/pluginTypes";
import type { WebComponentInterface } from "../types/swiperTypes";
export declare class WebComponent implements WebComponentInterface {
    plugins: PluginType[];
    constructor(plugins: any);
    render(): string;
    registerPlugins(webCompName: string, callback: Function, ...args: any[]): void;
    removePlugins(): void;
}
