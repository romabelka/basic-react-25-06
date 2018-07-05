import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'
import FilterForm from './components/filter-form'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

class App extends Component {
  render() {
    const { articles } = this.props

    return (
      <div>
        <UserForm />
        <FilterForm articles={articles} />
        <ArticleList articles={articles} ref={this.setListRef} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }

  setListRef = (ref) => {
    window.articleList = ref
  }
}

export default App
