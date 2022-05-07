import Control from './Control';
import Item from './Item';
import ListController from './ListController';
import ListModel from './ListModel';

class ListView {
  onChange;

  public node: HTMLElement;
  
  listController: ListController;
  
  items: Array<Item>;
  
  parentNode: HTMLElement;

  listModel: ListModel;

  constructor(parentNode: HTMLElement,
    listController: ListController,
    listModel: ListModel) {
    this.parentNode = parentNode;
    this.listController = listController;
    this.listModel = listModel;
    this.items = [];
    this.build();
  }

  private build(): void {
    const list = new Control(this.parentNode, 'ul', 'list');
    this.node = list.node;
    let itemsCount = 16;
    for (let i = 0; i < itemsCount; i++) {
      this.addItem(list.node, i);
    }
  }
  
  private addItem(listNode: HTMLElement, id: number): void {
    const item = new Item(listNode, id);
    this.items.push(item);
    item.node.onclick = () => {
      this.listController.press(id);
    }
  }

  public update(isPressedId: number): void {
    this.items[this.listModel.isPressedId].node.classList.add('_pressed');
  }

}

export default ListView;
