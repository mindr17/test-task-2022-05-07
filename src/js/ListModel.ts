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
}

export default ListModel;
