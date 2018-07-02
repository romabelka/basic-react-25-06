import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import RangePicker from './components/range-picker'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'

class App extends Component {
  state = {
    selected: []
  }

  handleSelectChange = (selected) => this.setState({ selected })

  render() {
    const { articles } = this.props
    return (
      <div>
        <UserForm />
        <Select
          isMulti
          options={this.options}
          onChange={this.handleSelectChange}
          value={this.state.selected}
        />
        <RangePicker />
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
