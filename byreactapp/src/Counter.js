import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { increament, decreament } from './actions'

class Counter extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <h1>{this.props.count}</h1>
      <button onClick={() => this.props.increament()}>+</button>
      <button onClick={() => this.props.decreament()}>-</button>  
    </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter
})

const mapDispatchToProps = dispatch => ({
  increament: () => dispatch(increament()),
  decreament: () => dispatch(decreament())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);