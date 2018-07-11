import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Filters extends Component {
  static propTypes = {
    filters: PropTypes.shape().isRequired
  }

  render() {
    return (
      <div>
        <SelectFilter filters={this.props.filters} />
        <DateRange filters={this.props.filters} />
      </div>
    )
  }
}

export default connect((state) => {
  console.log('state', state)
  return {
    filters: state.filters
  }
})(Filters)
