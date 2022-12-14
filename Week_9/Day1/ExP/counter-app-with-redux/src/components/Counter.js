import React from 'react';
import {connect} from 'react-redux';
import { DECREASE_COUNT } from '../actions';
import { INCREASE_COUNT } from '../actions';

class Counter extends React.Component  {
    render() {
      return (
        <div> 
          <h1> Counter </h1>
          <h1> {this.props.count} </h1>
          <button onClick={this.props.handleIncrease}> Increase </button>
          <button onClick={this.props.handleDecrease}> Decrease </button>
        </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

function mapDispatchToProps(dispatch){
    return {
     handleIncrease: INCREASE_COUNT,
     handleDecrease: DECREASE_COUNT
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);