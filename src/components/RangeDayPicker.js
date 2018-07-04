import React from 'react'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export default class RangeDayPicker extends React.Component {
  constructor(props) {
    super(props)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.state = {
      from: undefined,
      to: undefined
    }
  }

  handleFromChange(from) {
    this.setState({ from })
  }

  handleToChange(to) {
    this.setState({ to })
  }

  render() {
    const { from, to } = this.state

    const modifiers = { start: from, end: to }
    const selected = from &&
      to && (
        <p>
          Выбрано: {from.toLocaleDateString() + ' - ' + to.toLocaleDateString()}
        </p>
      )
    return (
      <div className="InputFromTo">
        <DayPickerInput
          value={from}
          placeholder="С"
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus()
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        —{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={(el) => (this.to = el)}
            value={to}
            placeholder="По"
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2
            }}
            onDayChange={this.handleToChange}
          />
        </span>
        {selected}
      </div>
    )
  }
}
