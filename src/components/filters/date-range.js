import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filter } from '../../ac/index.js'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { filterParams, articles } = this.props
    const dateutils = DateUtils.addDayToRange(day, filterParams)
    const { from, to } = dateutils

    this.props.filter({ ...filterParams, from, to }, articles)
  }

  render() {
    const { from, to } = this.props.filterParams
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`

    return (
      <div className="date-range">
        <DayPicker
          formatDate="M/D/YYYY"
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  null,
  { filter }
)(DateRange)
