import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import counter2 from './counter2'
import counter3 from './counter3'
import counter4 from './counter4'

export default combineReducers({
  todos,
  visibilityFilter,
  counter2,
  counter3,
  counter4,
});