import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { filters, changeFilters } = this.props
    const range = DateUtils.addDayToRange(day, filters)
    changeFilters(range)
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

export default DateRange
