import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { selectDate } from '../../ac'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { dateRange, selectDate } = this.props
    selectDate(DateUtils.addDayToRange(day, dateRange))
  }

  render() {
    const { from, to } = this.props.dateRange
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) =>
            DateUtils.isDayInRange(day, this.props.dateRange)
          }
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
  { selectDate }
)(DateRange)
