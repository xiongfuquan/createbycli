import React, { Component } from  'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from '../actions';


class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul>
      {this.props.todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => 
          {this.props.toggleTodo(todo.id)}}/> 
      ))}
    </ul>
  }
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_COMPLETE':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch =>({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);