import type { WebComponentInterface } from "../types/swiperTypes";
export declare class WebComponent<T> implements WebComponentInterface<T> {
    plugins: any[];
    constructor(plugins: any);
    render(): HTMLElement;
    registerPlugins(webCompName: string, callback: Function, argsObj?: T): void;
    removePlugins(): void;
}
