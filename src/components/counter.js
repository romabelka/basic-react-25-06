import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.handleIncrement}>increment</button>
      </div>
    )
  }

  handleIncrement = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }
}

const mapStateToProps = (state) => ({
  count: state.counter
})

export default connect(mapStateToProps)(Counter)
