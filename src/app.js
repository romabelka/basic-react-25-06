import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'

class App extends Component {
  render() {
    const { articles } = this.props
    return (
      <div>
        <UserForm />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
