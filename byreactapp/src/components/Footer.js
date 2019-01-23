import React,{ Component } from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../actions';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <span>show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETE}>Completed</FilterLink>
    </div>
  }
}

export default Footer;