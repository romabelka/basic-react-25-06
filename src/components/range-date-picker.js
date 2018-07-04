import React, { Component } from 'react'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import { formatDate, parseDate } from 'react-day-picker/moment'

class RangeDatePicker extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  render() {
    const numberOfMonths = 2
    const dateFormat = 'YYYY-MM-DD'
    const { from, to } = this.state
    return (
      <div>
        <div style={{ display: 'inline-block' }}>
          From:
          <DayPickerInput
            value={from}
            placeholder=""
            format={dateFormat}
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              numberOfMonths: numberOfMonths
            }}
            onDayChange={this.handleFromChange}
          />
        </div>
        <div style={{ display: 'inline-block' }}>
          To:
          <DayPickerInput
            value={to}
            placeholder=""
            format={dateFormat}
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              fromMonth: from,
              numberOfMonths: numberOfMonths
            }}
            onDayChange={this.handleToChange}
          />
        </div>
      </div>
    )
  }

  handleFromChange = (from) => {
    this.setState({ from })
  }

  handleToChange = (to) => {
    this.setState({ to })
  }
}

export default RangeDatePicker
