import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let input;
    return <div>
      <form
        onSubmit={e=>{
          e.preventDefault();
          if(!input.value.trim()){
            return;
          }
          this.props.dispatch(addTodo(input.value));
          input.value = '';
        }}
      >  
        <input ref={node => (input=node)}></input>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  }
}

export default connect()(AddTodo);