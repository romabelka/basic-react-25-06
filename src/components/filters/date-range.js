import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import { filterArticle } from '../../ac'
import { connect } from 'react-redux'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { selected, from, to } = this.props.filters
    const days = DateUtils.addDayToRange(day, { from, to })
    const { filterArticle } = this.props
    filterArticle(selected, days.from, days.to)
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
  null,
  { filterArticle }
)(DateRange)
