import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
// import { changeDate, changeSelect } from '../../ac'
// import { connect } from 'react-redux'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

export default Filters
