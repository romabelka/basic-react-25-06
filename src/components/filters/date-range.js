import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDate } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  render() {
    const { from, to } = this.props.date
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.props.choseDate}
        />
        {selectedRange}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  date: state.filters.date
})

const mapDispatchToProps = (dispatch) => ({
  choseDate: (day) => {
    return dispatch(changeDate(day))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)
