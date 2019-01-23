import React,{ Component } from 'react';

class Todos extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <li
      onClick = {this.props.onClick}
      style = {{
        textDecoration: this.props.completed?'line-through':'none'
      }}
    >
      {this.props.text}
    </li>
  }
}

export default Todos;