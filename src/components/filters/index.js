import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import { changeFilters } from '../../ac'
import { connect } from 'react-redux'

class Filters extends Component {
  static propTypes = {}

  render() {
    const { articles, filters, changeFilters } = this.props

    return (
      <div>
        <SelectFilter
          articles={articles}
          filters={filters}
          changeFilters={changeFilters}
        />
        <DateRange filters={filters} changeFilters={changeFilters} />
      </div>
    )
  }
}

export default connect(
  (state) => {
    const { articles, filters } = state
    return { articles, filters }
  },
  { changeFilters }
)(Filters)
