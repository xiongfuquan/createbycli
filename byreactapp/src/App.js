import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Counter from './Counter'

class App extends Component {
  render() {
    return <div>
      <AddTodo/>
      <TodoList/>
      <Footer/>
      <Counter/>
    </div>
  }
}

export default App;
