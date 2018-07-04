import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
  state = {
    value: [],
    from: undefined,
    to: undefined
  }

  handleSelectChange = (value) => {
    this.setState({ value })
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    console.log(range)
    this.setState(range)
  }
  handleResetClick() {
    this.setState({
      from: undefined,
      to: undefined
    })
  }

  render() {
    const { articles } = this.props
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div>
        <UserForm />
        <Select
          options={this.options}
          onChange={this.handleSelectChange}
          value={this.state.value}
          isMulti
          joinValues
          simpleValue
        />
        <ArticleList articles={articles} ref={this.setListRef} />
        <ArticlesChart articles={articles} />
        <div>
          {!from && !to && 'Выберите начальную дату'}
          {from && !to && 'Выберите конечную дату'}
          {from &&
            to &&
            `С ${from.toLocaleDateString()} по
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Сбросить
              </button>
            )}
        </div>
        <DayPicker
          className="Selectable"
          numberOfMonths={1}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
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

  setListRef = (ref) => {
    this.articleList = ref
    console.log('---', findDOMNode(this.articleList))
    console.log('---', ref)
    window.articleList = ref
  }
}

export default App
