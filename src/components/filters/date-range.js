import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterArticlesByDate } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) =>
    this.props.filterArticlesByDate(
      DateUtils.addDayToRange(day, this.props.dateRange)
    )

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
  { filterArticlesByDate }
)(DateRange)
