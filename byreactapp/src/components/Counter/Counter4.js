//只用react + react-redux 实现计数器
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { increament4, decreament4, increamentIfOdd4, increamentAsync4 } from '../../actions'

class Counter4 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p>react + react-redux,使用状态管理器，管理counter的变更信息,引用中间件redux-saga,处理异步操作</p>
      <h1>{this.props.counter}</h1>
      <button onClick={() => this.props.increament()}>+</button>
      <button onClick={() => this.props.decreament()}>-</button>
      <button onClick={() => this.props.increamentIfOdd()}>increamentIfOdd</button>
      <button onClick={() => this.props.increamentAsync()}>increamentAsync</button>
    </div>
  }
}

const mapStateToProps = state => ({
  counter: state.counter4
})

const mapDispatchToProps = dispatch => ({
  increament: () => dispatch(increament4()),
  decreament: () => dispatch(decreament4()),
  increamentIfOdd: () => dispatch(increamentIfOdd4()),
  increamentAsync: () => dispatch(increamentAsync4())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter4);