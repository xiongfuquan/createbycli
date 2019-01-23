import React from "react";
import MyButton from "./MyButton.jsx";
import ButtonActions from "../flux/ButtonActions";
import ListStores from "../flux/ListStores";


class MyButtonController extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:ListStores.getAll()
    }
    
    this.createNewItem = this.createNewItem.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ListStores.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ListStores.removeChangeListener(this._onChange);
  }

  render() {
    return <MyButton 
    items = {this.state.items}
    onClick={this.createNewItem}/>
  }

  createNewItem() {
    ButtonActions.addNewItem('new Item');
  }

  _onChange() {
    this.setState({
      items:ListStores.getAll()
    })
  }

}

export default MyButtonController;