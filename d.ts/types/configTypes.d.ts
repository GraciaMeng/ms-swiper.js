import type { PluginType } from "./pluginTypes";
export declare type EasingFunctionType = "opacity" | "linear" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic";
export declare enum TriggerEnum {
    Click = "click",
    Hover = "hover"
}
export declare enum EasingFunctionEnum {
    opacity = "opacity",
    linear = "linear",
    easeInCubic = "easeInCubic",
    easeOutCubic = "easeOutCubic",
    easeInOutCubic = "easeInOutCubic"
}
export interface ConfigInterface {
    id?: string;
    class?: string;
    images: string[];
    width?: string;
    height?: string;
    interval?: number;
    autoplay?: boolean;
    "show-dots"?: boolean;
    "switch-dots"?: boolean;
    "indicator-dots"?: boolean;
    "indicator-color"?: string;
    "indicator-active-color"?: string;
    trigger?: TriggerEnum;
    vertical?: boolean;
    "easing-function"?: EasingFunctionEnum;
    plugins?: PluginType[];
}
