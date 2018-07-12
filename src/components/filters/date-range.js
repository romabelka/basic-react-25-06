import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { setFilters } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { setFilters, filters } = this.props

    setFilters(Object.assign(filters, DateUtils.addDayToRange(day, filters)))
  }

  render() {
    const { from, to } = this.props.filters

    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`

    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  (state) => ({ filters: state.filters }),
  { setFilters }
)(DateRange)
