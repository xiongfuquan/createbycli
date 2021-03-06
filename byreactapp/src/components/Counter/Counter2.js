//只用react + react-redux 实现计数器
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { increament, decreament, increamentIfOdd } from '../../actions'

class Counter2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p>react + react-redux,使用状态管理器，管理counter的变更信息</p>
      <h1>{this.props.counter}</h1>
      <button onClick={() => this.props.increament()}>+</button>
      <button onClick={() => this.props.decreament()}>-</button>
      <button onClick={() => this.props.increamentIfOdd()}>increamentIfOdd</button>
      <button onClick={() => this.props.increamentAsync()}>increamentAsync</button>
    </div>
  }
}

const mapStateToProps = state => ({
  counter: state.counter2
})

const mapDispatchToProps = dispatch => ({
  increament: () => dispatch(increament()),
  decreament: () => dispatch(decreament()),
  increamentIfOdd: () => dispatch(increamentIfOdd()),
  increamentAsync: () => {
    setTimeout(()=>dispatch(increament()),1000)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter2);