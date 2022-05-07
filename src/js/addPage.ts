import Control from './Control';
import ListController from './ListController';
import ListView from './ListView';
import ListModel from './ListModel';

const createPage = () => {
  const body = document.body;
  const main = new Control(body, 'div', 'main');

  const listModel = new ListModel();
  const listController = new ListController(listModel);
  const listLeft = new ListView(main.node, listController, listModel);
  const listRight = new ListView(main.node, listController, listModel);
  const listBottomLeft = new ListView(main.node, listController, listModel);
  listModel.onChange = () => {
    listLeft.update(listModel.isPressedId);
    listRight.update(listModel.isPressedId);
    listBottomLeft.update(listModel.isPressedId);
  }
};
export default createPage;
