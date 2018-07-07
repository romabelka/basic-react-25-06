import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleFromChange = (from) => this.setState({ from })

  handleToChange = (to) => this.setState({ to })

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div>
        <DayPickerInput
          value={from}
          placeholder="From"
          onDayChange={this.handleFromChange}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            onDayClick: () => this.to.getInput().focus(),
            modifiers
          }}
        />
        <DayPickerInput
          value={to}
          placeholder="To"
          onDayChange={this.handleToChange}
          ref={(el) => (this.to = el)}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { before: from },
            month: from,
            fromMonth: from,
            modifiers
          }}
        />
      </div>
    )
  }
}

export default DateRange
