const counter = (state = 0, action) => {
  switch(action.type) {
    case 'Increament':
      return state = state + 1;
    case 'Decreament':
      return state = state - 1;
    case 'IncreamentIfOdd':
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