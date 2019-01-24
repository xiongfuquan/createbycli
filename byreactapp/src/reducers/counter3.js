const counter = (state = 0, action) => {
  switch(action.type) {
    case 'Increament3':
      return state = state + 1;
    case 'Decreament3':
      return state = state - 1;
    case 'IncreamentIfOdd3':
      if(state % 2 === 0) {
        return state = state + 1;
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default counter;