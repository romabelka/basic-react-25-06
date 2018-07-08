import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import ArticlesChart from './components/chart'
import Filters from './components/filters'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  render() {
    const { articles } = this.props
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }
}

export default App
