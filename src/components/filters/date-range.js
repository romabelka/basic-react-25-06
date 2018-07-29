import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../ac'
import MomentLocaleUtils from 'react-day-picker/moment'
import localized from '../../decorators/localized'

import 'moment/locale/en-gb'
import 'moment/locale/ru'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { changeDateRange, range } = this.props
    changeDateRange(DateUtils.addDayToRange(day, range))
  }

  render() {
    const { from, to } = this.props.range
    const { local } = this.props
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          localeUtils={MomentLocaleUtils}
          locale={local.filter.dateRange.locale}
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    range: state.filters.dateRange
  }),
  { changeDateRange }
)(localized(DateRange))
