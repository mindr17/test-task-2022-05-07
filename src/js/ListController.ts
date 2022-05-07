import Control from './Control';
import Item from './Item';
import ListModel from './ListModel';
import ListView from './ListView';

class ListController {
  public node: HTMLElement;

  listModel: ListModel;

  constructor(listModel: ListModel) {
    this.listModel = listModel;
  }

  public press(id) {
    this.listModel.pressed = id;
  }
  
  public unPress() {
    this.listModel.pressed = -1;
  }

}

export default ListController;
