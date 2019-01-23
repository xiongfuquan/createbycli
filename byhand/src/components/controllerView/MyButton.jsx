import React from "react";

class MyButton extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const lists = this.props.items.map((item)=><li key={item.toString}>{item}</li>);
    return <div>
      <ul>{lists}</ul>
      <button onClick={this.props.onClick}>add Item</button>
    </div>
  }
}

export default MyButton;