import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'
import DatePickerRange from "./components/date-picker-range";

class App extends Component {
  state = {
    selected: null,
    multiSelected: []
  }

  handleSelectChange = (selected) => this.setState({ selected })
  handleMultiSelectChange = (multiSelected) => {
      console.log(multiSelected)
      this.setState({ multiSelected })
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
        />
        <Select
            options={this.options}
            onChange={this.handleMultiSelectChange}
            value={this.state.multiSelected}
            hideSelectedOptions = {true}
            isMulti={true}
        />
        <ArticleList articles={articles} ref={this.setListRef} />
        <ArticlesChart articles={articles} />
        <DatePickerRange/>

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
