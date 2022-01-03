export const createVDom = (
  tag: string,
  props?,
  children?: HTMLElement[] | HTMLElement | string | undefined
): HTMLElement => {
  const element = document.createElement(tag);
  for (const propKey in props) {
    element.setAttribute(propKey, props[propKey]);
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
