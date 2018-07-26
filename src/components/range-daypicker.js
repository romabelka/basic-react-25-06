import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class RangeDaypicker extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  render() {
    const { from, to } = this.state
    const modifiers = { from: from, to: to }
    return (
      <div>
        <DayPicker
          className="Selectable"
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          selectedDays={[from, { from, to }]}
        />
        <div>
          <span>from: {from ? from.toLocaleDateString() : null}</span>
          <span>to: {to ? to.toLocaleDateString() : null}</span>
        </div>
        <style>{`
            .Selectable .DayPicker-Day--selected {
              background-color: pink !important;
              color: white;
              opacity: 0.4;
            }
            .Selectable .DayPicker-Day {
              border-radius: 0 !important;
            }
            .Selectable .DayPicker-Day--from {
              border-top-left-radius: 50% !important;
              border-bottom-left-radius: 50% !important;
              
            }
            .Selectable .DayPicker-Day--from,
            .Selectable .DayPicker-Day--to {
              font-weight: bold;
              opacity: 1;
            }
            .Selectable .DayPicker-Day--to {
              border-top-right-radius: 50% !important;
              border-bottom-right-radius: 50% !important;
            }
          `}</style>
      </div>
    )
  }
}

export default RangeDaypicker
