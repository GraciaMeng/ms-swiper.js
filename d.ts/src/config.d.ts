export declare type easingFunction = "opacity" | "linear" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic";
export interface ConfigInterface {
    width: string;
    height: string;
    images: string[];
    interval: number;
    mode: string;
    autoplay: boolean;
    "switch-dots": boolean;
    "indicator-dots": boolean;
    "indicator-color": string;
    "indicator-active-color": string;
    vertical: boolean;
    "easing-function": easingFunction;
}
export declare const defaultConfig: ConfigInterface;
export declare function createDefaultConfig(): ConfigInterface;
