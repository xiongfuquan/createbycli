const counter = (state = 0, action) => {
  switch(action.type) {
    case 'Increament':
      return state = state + 1;
    case 'Decreament':
      return state = state - 1;
    default:
      return state;
  }
}

export default counter;