import AppDispatcher from "./AppDispatcher.js";

const ButtonActions = {
  addNewItem(text) {
    AppDispatcher.dispatch({
      actionType:"ADD_NEW_ITEM",
      text:text
    });
  }
}

export default ButtonActions;