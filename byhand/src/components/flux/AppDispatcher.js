import {Dispatcher} from "flux";
import ListStores from "./ListStores";

const AppDispatcher = new Dispatcher();

AppDispatcher.register((action) =>{
  switch(action.actionType){
    case 'ADD_NEW_ITEM':
      ListStores.addNewItemHandler(action.text);
      ListStores.emitChange();
      break;
    default:
      //np op
  }
});


export default AppDispatcher;