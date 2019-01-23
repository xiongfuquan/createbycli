import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button
      onClick = {this.props.onClick}
      disabled = {this.props.active}
      style={{
        marginLeft: '4px'
      }}
    >
      {this.props.children}
    </button>
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)) 
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);