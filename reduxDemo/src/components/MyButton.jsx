import React from "react";
import addNewItem from "../actions";
import {connect} from "react-redux";

class MyButton extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const lists = this.props.items.map((item,i)=><li key={i}>{item}</li>);

    return <div>
      <ul>{lists}</ul>
      <button onClick={this.props.onClickHandler}>add Item</button>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    items:state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClickHandler:()=>dispatch(addNewItem)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyButton);