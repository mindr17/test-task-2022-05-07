class Control<NodeType extends HTMLElement = HTMLElement> {
  public node: NodeType;

  constructor(
    parentNode: HTMLElement | null,
    tagName?: string,
    classNames?: string,
    content?: string,
  ) {
    const elem = tagName ? document.createElement(tagName)
      : document.createElement('div');

    if (classNames) {
      const classNamesArr: Array<string> = classNames.split(' ');
      elem.classList.add(...classNamesArr);
    }

    if (content) elem.textContent = content;

    if (parentNode) parentNode.append(elem);

    this.node = elem as NodeType;
  }

  public destroy(): void {
    this.node.remove();
  }
}

export default Control;
