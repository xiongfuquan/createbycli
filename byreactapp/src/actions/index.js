let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETE',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const increament = () =>({
  type:'Increament'
})

export const decreament = () => ({
  type:'Decreament'
})

export const increamentIfOdd = () => ({
  type: 'IncreamentIfOdd'
})

export const increament3 = () =>({
  type:'Increament3'
})

export const decreament3 = () => ({
  type:'Decreament3'
})

export const increamentIfOdd3 = () => ({
  type: 'IncreamentIfOdd3'
})

export const increamentAsync = () => dispatch => {
  dispatch(decreament3());
  setTimeout(()=>dispatch(increament3()),1000);
}

export const increament4 = () =>({
  type:'Increament4'
})

export const decreament4 = () => ({
  type:'Decreament4'
})

export const increamentIfOdd4= () => ({
  type: 'IncreamentIfOdd4'
})

export const increamentAsync4 = () => ({
  type: 'IncreamentAsync4'
})