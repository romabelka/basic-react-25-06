import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import 'react-day-picker/lib/style.css'
import { dateFilterArticle } from './../../ac'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    this.setState(DateUtils.addDayToRange(day, this.state))
    setTimeout(() => {
      this.props.dateFilterArticle(this.state)
    }, 0)
  }

  render() {
    const { from, to } = this.state
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
        <button onClick={() => this.setState({ from: null, to: null })}>
          сбросить фильтр
        </button>
        <br />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles.filtred
  }),
  {
    dateFilterArticle
  }
)(DateRange)
