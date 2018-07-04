import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'
import DatePicker from 'react-date-picker'
import DateRange from './components/range-date.jsx'

class App extends Component {
  state = {
    value: [this.options[0]],
    date: new Date(),
    date2: new Date()
  }

  render() {
    const { articles } = this.props
    const { value, date, date2 } = this.state
    return (
      <div>
        <UserForm />
        <h1>Комменты</h1>
        <ArticleList articles={articles} ref={this.setListRef} />
        <ArticlesChart articles={articles} />
        <h1>Мультиселект</h1>
        <div>
          <Select
            isMulti={true}
            onChange={(value) => this.setValue(value)}
            value={value}
            options={this.options}
          />
          <h3>Выбрано :</h3>
          <ul>{value.map((elem) => <li key={elem.value}>{elem.label}</li>)}</ul>
        </div>
        <div>
          <h1>DatePicker(test)</h1>
          <DatePicker
            onChange={(date) => this.onChange(date, { date: date })}
            value={date}
          />
          <DatePicker
            onChange={(date) => this.onChange(date, { date2: date })}
            value={date2}
          />
          <br />
          <div>from: {date ? date.toLocaleString('yy') : null}</div>---
          <div>to: {date2 ? date2.toLocaleString('yy') : null}</div>
        </div>
        <h1>DatePicker2</h1>
        <div>
          <DateRange />
        </div>
      </div>
    )
  }

  onChange(date, stateDate) {
    this.setState(stateDate)
  }

  setValue(value) {
    this.setState({ value })
  }

  get options() {
    const { articles } = this.props
    return articles.map((elem) => {
      return { value: elem.id, label: elem.title }
    })
  }

  setListRef = (ref) => {
    this.articleList = ref
    console.log('---', findDOMNode(this.articleList))
    console.log('---', ref)
    window.articleList = ref
  }
}

export default App
