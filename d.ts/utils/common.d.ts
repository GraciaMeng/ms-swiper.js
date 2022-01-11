export interface SelectType {
    componentName: string;
    component: any;
    getSelectedItem: () => HTMLElement;
    getSelectedItemIndex: () => number;
}
export declare class Select implements SelectType {
    componentName: string;
    component: any;
    constructor(componentName: any, component: any);
    getSelectedItem(): HTMLElement;
    getSelectedItemIndex(): number;
}
