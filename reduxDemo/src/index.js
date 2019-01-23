import React from "react";
import ReactDOM from "react-dom";
import MyButton from "./components/MyButton.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import addNewItem from "./reducers";

let store = createStore(addNewItem);

ReactDOM.render(
  <Provider store={store}>
    <MyButton/>
  </Provider>,
  document.getElementById("app")
);