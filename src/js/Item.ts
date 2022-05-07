import Control from './Control';

class Item {
  public node: HTMLElement;
  // public id: number;
  // public isPressed: boolean;

  constructor(parentNode: HTMLElement, id) {
    this.node = this.build(parentNode);
    // this.id = id;
  }

  private build(parentNode: HTMLElement) {
    const itemElem = new Control(parentNode, 'li', 'list__item');
    this.node = itemElem.node;
    return itemElem.node;
  }

}

export default Item;
