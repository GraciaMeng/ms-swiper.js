export interface SelectType {
  componentName: string;
  component: any;
  getSelectedItem: () => HTMLElement;
  getSelectedItemIndex: () => number;
}

export class Select implements SelectType {
  componentName: string;
  component: any;
  constructor(componentName, component) {
    this.componentName = componentName;
    this.component = component;
  }
  // 获取当前的item
  getSelectedItem(): HTMLElement {
    return this.component.container.querySelector(
      `.${this.componentName}--activated`
    );
  }

  // 获取当前item的索引
  getSelectedItemIndex(): number {
    return this.component.items.indexOf(this.getSelectedItem());
  }
}
