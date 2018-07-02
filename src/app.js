import React, { Component } from 'react'
import ArticleList from './components/article-list'

class App extends Component {
  render() {
    const { articles } = this.props
    return (
      <div>
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
