import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/forms/user-form'
import ReduxToastr from 'react-redux-toastr'
import Filters from './components/filters'
import Counter from './components/counter'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <ReduxToastr />
        <UserForm />
        <Counter />
        <Filters articles={[]} />
        <ArticleList />
      </div>
    )
  }
}

export default App
