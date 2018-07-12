import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../ac'

class Counter extends Component {
  render() {
    console.log('---', 123)
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.handleIncrement}>increment</button>
      </div>
    )
  }

  handleIncrement = () => {
    this.props.increment()
  }
}

const mapStateToProps = (state) => ({
  count: state.counter
})

export default connect(
  mapStateToProps,
  { increment }
)(Counter)
