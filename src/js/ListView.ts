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
    // this.listModel.onChange = (isPressedId: Array<Item>) => {
    //   this.update(isPressedId);
    // };
    // this.listModel.onChange = (isPressedId: Array<Item>) => {
    //   this.update(isPressedId);
    // };
  }

  private build() {
    const list = new Control(this.parentNode, 'ul', 'list');
    this.node = list.node;
    let itemsCount = 16;
    for (let i = 0; i < itemsCount; i++) {
      this.addItem(list.node, this.listController.press, i);
    }
  }
  
  private addItem(listNode: HTMLElement, callback, id) {
    const item = new Item(listNode, id);
    this.items.push(item);
    
    item.node.onclick = () => {
      // callback(id);
      this.listController.press(id);
    }
    // item.node.onmouseup = () => {
    //   callback(id);
    // }
    // item.node.onmouseout = () => {
    //   callback(id);
    // }
  }

  public update(isPressedId) {
    this.items[this.listModel.isPressedId].node.classList.add('_pressed');
  }

}

export default ListView;
