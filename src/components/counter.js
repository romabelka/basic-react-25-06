import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../ac'
import i18n from '../decorators/i18n'

class Counter extends Component {
  render() {
    const { translate } = this.props

    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.handleIncrement}>
          {translate('counter.increment')}
        </button>
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

export default i18n(
  connect(
    mapStateToProps,
    { increment }
  )(Counter)
)
