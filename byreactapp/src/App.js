import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Counter1 from './components/Counter/Counter1'
import Counter2 from './components/Counter/Counter2'
import Counter3 from './components/Counter/Counter3'
import Counter4 from './components/Counter/Counter4'
import Map from './components/Map'

class App extends Component {
  render() {
    return <div
      style = {{height: '100%'}}
    >
      {/* <AddTodo/>
      <TodoList/>
      <Footer/>
      <Counter1/>
      <Counter2/>
      <Counter3/>
      <Counter4/> */}
      <Map/>
    </div>
  }
}

export default App;
