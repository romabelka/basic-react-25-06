import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import DateRange from './components/date-range'

class App extends Component {
  state = {
    selected: [],
    startDate: null,
    endDate: null,
    focusedInput: null
  }

  handleSelectChange = (selected) => this.setState({ selected })

  handleDateChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate })
  }

  render() {
    const { articles } = this.props
    return (
      <div>
        <UserForm />
        <Select
          options={this.options}
          onChange={this.handleSelectChange}
          value={this.state.selected}
          multi
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
        <ArticleList articles={articles} ref={this.setListRef} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  setListRef = (ref) => {
    this.articleList = ref
    console.log('---', findDOMNode(this.articleList))
    console.log('---', ref)
    window.articleList = ref
  }
}

export default App
