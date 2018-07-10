import React, { Component } from 'react'
import DateRange from './date-range'
import { connect } from 'react-redux'
import SelectFilter from './select'

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

export default connect((state) => ({
  articles: state.articles
}))(Filters)
