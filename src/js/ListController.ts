import ListModel from './ListModel';

class ListController {
  public node: HTMLElement;

  listModel: ListModel;

  constructor(listModel: ListModel) {
    this.listModel = listModel;
  }

  public press(id: number): void {
    this.listModel.pressed = id;
  }
}

export default ListController;
