import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/forms/user-form'
import UserError from './components/user-error'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <UserForm />
        <UserError />
        <Counter />
        <Filters articles={[]} />
        <ArticleList />
      </div>
    )
  }
}

export default App
