import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { setDate } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { dateRange, setDate } = this.props
    const range = DateUtils.addDayToRange(day, dateRange)
    setDate(range)
  }

  render() {
    const { from, to } = this.props.dateRange
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
  (state) => ({
    dateRange: state.dateRange
  }),
  { setDate }
)(DateRange)
