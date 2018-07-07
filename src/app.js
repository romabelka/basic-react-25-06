import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'
import Filters from './components/filters'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    const { articles } = this.props
    return (
      <div className="container">
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }
}

export default App
