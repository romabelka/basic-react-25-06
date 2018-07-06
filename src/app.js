import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    selected: null,
    from: undefined,
    to: undefined
  }

  handleSelectChange = (selected) => this.setState({ selected })

  handleFromChange = (from) => this.setState({ from })

  handleToChange = (to) => this.setState({ to })

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
          value={this.state.selected}
          isMulti
        />
        <div>
          <DayPickerInput
            value={from}
            placeholder="From"
            onDayChange={this.handleFromChange}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              onDayClick: () => this.to.getInput().focus(),
              modifiers
            }}
          />
          <DayPickerInput
            value={to}
            placeholder="To"
            onDayChange={this.handleToChange}
            ref={(el) => (this.to = el)}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              month: from,
              fromMonth: from,
              modifiers
            }}
          />
        </div>
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
    window.articleList = ref
  }
}

export default App
