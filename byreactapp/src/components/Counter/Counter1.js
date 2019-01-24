//只用react，实现计数器
import React,{ Component } from 'react';

class Counter1 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }

    this.increament = this.increament.bind(this);
    this.decreament = this.decreament.bind(this);
    this.increamentIfOdd = this.increamentIfOdd.bind(this);
    this.increamentAsync = this.increamentAsync.bind(this);
  }

  increament() {
    this.setState({counter: this.state.counter + 1})
  }

  decreament() {
    this.setState({counter: this.state.counter - 1});
  }

  increamentIfOdd() {
    if(this.state.counter % 2 == 0) {
      this.setState({counter: this.state.counter + 1})
    } else {
      return this.state;
    }
  }

  increamentAsync() {
    setTimeout(()=>{
      this.setState({counter: this.state.counter + 1})
    },1000)
  }

  render() {
    return <div>
      <p>只使用react，状态和事件在一起管理</p>
      <h1>{this.state.counter}</h1>
      <button onClick={this.increament}>+</button>
      <button onClick={this.decreament}>-</button>
      <button onClick={this.increamentIfOdd}>increamentIfOdd</button>
      <button onClick={this.increamentAsync}>increamentAsync</button>
    </div>
  }
}

export default Counter1;