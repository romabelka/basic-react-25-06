import React, { PureComponent } from 'react'
import DateRange from './date-range'
import Select from 'react-select'
import { DateRangePicker } from 'react-dates'

class FilterForm extends PureComponent {
  state = {
    selected: [],
    startDate: null,
    endDate: null,
    focusedInput: null
  }

  render() {
    return this.body
  }

  handleSelectChange = (selected) => this.setState({ selected })

  handleDateChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate })
  }

  get body() {
    return (
      <div>
        <Select
          options={this.options}
          onChange={this.handleSelectChange}
          value={this.state.selected}
          isMulti
        />
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="start_date_id"
          endDate={this.state.endDate}
          endDateId="end_date_id"
          onDatesChange={this.handleDateChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
        />
        <DateRange
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </div>
    )
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default FilterForm
