import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import { connect } from 'react-redux'
import { selectDate, filterArticlesByDateRange } from '../../ac'

class DateRange extends Component {
  handleDayClick = (day) => {
    // What is the best place to call filterArticlesByDateRange?
    const { dateRange, selectDate, filterArticlesByDateRange } = this.props
    const newDateRange = DateUtils.addDayToRange(day, dateRange)
    selectDate(newDateRange)
    filterArticlesByDateRange(newDateRange)
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
  { selectDate, filterArticlesByDateRange }
)(DateRange)
