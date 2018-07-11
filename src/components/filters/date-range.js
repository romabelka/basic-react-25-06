import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import {filterArticles} from "../../ac";
import {connect} from "react-redux";

class DateRange extends Component {

  handleDayClick = (day) => {
    const { dates, filterArticles } = this.props
    filterArticles({dates: DateUtils.addDayToRange(day, dates)})
  }


  render() {
    const { from, to } = this.props.dates
    console.log(this.props)
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

export default connect((state) => ({
  dates: state.articlesFilter.dates
}), { filterArticles })(DateRange)
