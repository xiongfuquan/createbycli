export default (state = {items:[]},action)=>{
  switch(action.type){
    case "ADD_NEW_ITEM":
      return {items:[...state.items,"new Item"]}
      break;
    default:
      return state;
  }
}