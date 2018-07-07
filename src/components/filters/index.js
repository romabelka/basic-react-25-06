import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import PropTypes from 'prop-types'

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

Filters.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.array
    }).isRequired
  ).isRequired
}

export default Filters
