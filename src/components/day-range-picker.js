import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DayRangePicker extends React.Component {
  getInitialState = () => ({
    from: null,
    to: null,
    enteredTo: null
  })

  state = this.getInitialState()

  isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from)
    const isRangeSelected = from && to

    return !from || isBeforeFirstDay || isRangeSelected
  }

  handleDayClick = (day) => {
    const { from, to } = this.state
    const isSelectingFirstDay = this.isSelectingFirstDay(from, to, day)

    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null
      })

      return
    }

    this.setState({
      to: day,
      enteredTo: day
    })
  }

  render() {
    const { from, enteredTo } = this.state
    const disabledDays = { before: this.state.from }
    const selectedDays = [from, { from, to: enteredTo }]

    return (
      <div>
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={from}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          onDayClick={this.handleDayClick}
        />
        {this.date}
      </div>
    )
  }

  get date() {
    const { from, to } = this.state
    if (!from || !to) return null

    return (
      <div>
        {from.toLocaleDateString()} - {to.toLocaleDateString()}
      </div>
    )
  }
}

export default DayRangePicker
