export const typeValidate = (validationObj): string => {
  return Object.prototype.toString
    .call(validationObj)
    .slice(8, -1)
    .toLowerCase();
};

export const createVDom = (
  tag: string,
  props?,
  children?: HTMLElement[] | string | undefined
): HTMLElement => {
  const element = document.createElement(tag);
  for (const [propKey, propValue] of Object.entries(props)) {
    if (typeValidate(propValue) === "object" && propKey === "style") {
      // 设置style属性
      for (const [attrKey, attrVal] of Object.entries(propValue)) {
        element.style[attrKey] = attrVal;
      }
    } else {
      element.setAttribute(propKey, props[propKey]);
    }
  }
  if (typeof children === "string") {
    element.textContent = children;
  } else if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      element.appendChild(children[i]);
    }
  }
  return element;
};
