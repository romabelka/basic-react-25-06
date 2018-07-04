import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'

import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'

class App extends Component {
  state = {
    selected: null,
    from: null,
    to: null,
    enteredTo: null
  }

  handleSelectChange = (selected) => this.setState({ selected })

  render() {
    const { articles } = this.props
    const { from, to, enteredTo } = this.state
    const modifiers = { start: from, end: enteredTo }
    const disabledDays = { before: this.state.from }
    const selectedDays = [from, { from, to: enteredTo }]
    return (
      <div>
        <UserForm />
        <DayPicker
          numberOfMonths={2}
          fromMonth={from}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />

        <div>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </div>
        <br />
        <Select
          isMulti
          simpleValue
          options={this.options}
          onChange={this.handleSelectChange}
          value={this.state.selected}
        />
        <ArticleList articles={articles} ref={this.setListRef} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }

  isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from)
    const isRangeSelected = from && to
    return !from || isBeforeFirstDay || isRangeSelected
  }
  handleDayClick = (day) => {
    const { from, to } = this.state
    if (from && to && day >= from && day <= to) {
      this.handleResetClick()
      return
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null
      })
    } else {
      this.setState({
        to: day,
        enteredTo: day
      })
    }
  }
  handleDayMouseEnter = (day) => {
    const { from, to } = this.state
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day
      })
    }
  }
  handleResetClick = () => this.setState(this.getCalInitialState())

  getCalInitialState() {
    return {
      from: null,
      to: null,
      enteredTo: null
    }
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
