export declare class MsSwiper extends HTMLElement {
    static get observedAttributes(): string[];
    get class(): string;
    get width(): string;
    get height(): string;
    get images(): string[];
    get easingFunction(): string;
    get interval(): number;
    get autoplay(): boolean;
    get showDots(): boolean;
    get switchDots(): boolean;
    get indicatorDots(): boolean;
    get indicatorColor(): string;
    get indicatorActiveColor(): string;
    get trigger(): string;
    get vertical(): string;
    constructor();
    justifyExist(value: any): boolean;
    connectedCallback(): void;
}
