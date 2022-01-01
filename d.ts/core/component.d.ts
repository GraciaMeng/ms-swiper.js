import type { PluginType } from "../types/pluginTypes";
import type { WebComponentInterface } from "../types/swiperTypes";
export declare class WebComponent<T> implements WebComponentInterface<T> {
    plugins: PluginType[];
    constructor(plugins: any);
    render(): string;
    registerPlugins(webCompName: string, callback: Function, argsObj: T): void;
    removePlugins(): void;
}
