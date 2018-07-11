import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <UserForm />
        <Counter />
        <Filters />
        <ArticleList />
      </div>
    )
  }
}

export default App
