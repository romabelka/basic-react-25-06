import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import PropTypes from 'prop-types'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  static propTypes = {
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date)
  }

  handleDayClick = (day) =>
    this.setState(DateUtils.addDayToRange(day, this.state))

  render() {
    const { from, to } = this.state
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
