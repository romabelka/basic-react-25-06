import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  render() {
    const { from, to } = this.state

    return (
      <div>
        <DayPickerInput
          value={from}
          placeholder="From"
          dayPickerProps={{
            disabledDays: { after: to },
            toMonth: to
          }}
          onDayChange={this.handleFromChange}
        />
        <DayPickerInput
          value={to}
          placeholder="To"
          dayPickerProps={{
            disabledDays: { before: from },
            fromMonth: from
          }}
          onDayChange={this.handleToChange}
        />
        {from &&
          to && (
            <div>
              {from.toLocaleDateString()} — {to.toLocaleDateString()}
            </div>
          )}
      </div>
    )
  }

  handleFromChange = (from) => this.setState({ from })
  handleToChange = (to) => this.setState({ to })
}

export default DateRange
