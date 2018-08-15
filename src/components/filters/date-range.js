import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import 'react-day-picker/lib/style.css'
import { changeDate } from '../../ac'

class DateRange extends Component {
  // state = {
  //   from: null,
  //   to: null
  // }

  componentWillReceiveProps(nextProps) {
    console.log('nextprops', nextProps)
  }

  handleDayClick = (day) => this.props.changeDate(day)
  // console.log(day)
  // this.setState(DateUtils.addDayToRange(day, this.state))

  render() {
    const { from, to } = this.props.filtersReducer.dates
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

const mapStateToProps = (state) => {
  return {
    filtersReducer: state.filtersReducer
  }
}

const dispatch = {
  changeDate
}

export default connect(
  mapStateToProps,
  dispatch
)(DateRange)
