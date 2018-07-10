import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { setDateRange } from '../../ac'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { dateRange, setDateRange } = this.props

    setDateRange(DateUtils.addDayToRange(day, dateRange))
  }

  render() {
    const {
      dateRange: { from, to }
    } = this.props
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          month={new Date(2016, 5)}
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  ({ filters: { dateRange } }) => ({ dateRange }),
  { setDateRange }
)(DateRange)
