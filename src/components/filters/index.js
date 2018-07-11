import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import { connect } from 'react-redux'

class Filters extends Component {
  static propTypes = {}

  render() {
    console.log(this.props.params)
    return (
      <div>
        <SelectFilter {...this.props} />
        <DateRange {...this.props} />
      </div>
    )
  }

  filter = () => {}
}

export default connect((state) => ({
  filterParams: state.articles.filterParams,
  articles: state.articles.items
}))(Filters)
