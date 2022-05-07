import Item from './Item';
import Control from './Control';
import ListController from './ListController';

class ListModel {
  onChange;

  public isPressedId: number;

  constructor() {
    this.isPressedId = -1;
  }

  public get pressed() {
    return this.isPressedId;
  }
  
  public set pressed(id) {
    this.isPressedId = id;
    this.onChange(this.isPressedId);
  }

  // public setState(newState) {
  //   this.items = newState;
  // }

  // public getState() {
  //   return this.items;
  // }
  // public onChange(...views) {
  //   views.forEach((view) => {
  //     view.update(this.isPressedId);
  //   });
  // }
}

export default ListModel;
