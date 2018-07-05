import React, { PureComponent } from 'react'
import Moment from 'react-moment'

class DateRange extends PureComponent {
  render() {
    const { startDate, endDate } = this.props
    if (!startDate && !endDate) return null

    return (
      <div>
        {'Date range: '}
        {DateRange.formattedDate(startDate)}
        {' - '}
        {DateRange.formattedDate(endDate)}
      </div>
    )
  }
}

DateRange.formattedDate = function(date) {
  return date ? <Moment format="YYYY/MM/DD">{date}</Moment> : '-/-/-'
}

export default DateRange
