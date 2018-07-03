import React, { PureComponent } from 'react'
import Moment from 'react-moment'

class DateRange extends PureComponent {
  render() {
    const { startDate, endDate } = this.props
    if (!startDate && !endDate) return null

    return (
      <div>
        {'Date range: '}
        {this.formattedDate(startDate)}
        {' - '}
        {this.formattedDate(endDate)}
      </div>
    )
  }

  formattedDate(date) {
    if (!date) return '-/-/-'

    return <Moment format="YYYY/MM/DD">{date}</Moment>
  }
}

export default DateRange
