import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import ArticlesRoute from './routes/articles'
import CommentsPage from './routes/comments-page'
import AppMenu from './components/menu/app-menu'
import { Provider as AuthProvider } from './contexts/auth'
import {
  Provider as LocalizationProvider,
  localization
} from './contexts/localization'

class App extends Component {
  static propTypes = {}
  state = {
    username: '',
    language: localization.en
  }

  handleUserChange = (username) => this.setState({ username })
  handleLanguageChange = (e) => {
    switch (e.target.value) {
      case localization.en.language:
        this.setState({
          language: localization.en
        })
        break
      case localization.ru.language:
        this.setState({
          language: localization.ru
        })
        break
    }
  }
  render() {
    return (
      <AuthProvider value={this.state.username}>
        <LocalizationProvider value={this.state.language}>
          <div>
            <UserForm
              onChange={this.handleUserChange}
              value={this.state.username}
            />
            <select onChange={this.handleLanguageChange}>
              <option value={localization.en.language}>
                {localization.en.language}
              </option>
              <option value={localization.ru.language}>
                {localization.ru.language}
              </option>
            </select>
            <AppMenu />
            <Switch>
              <Redirect from="/" exact to="/articles" />
              <Route path="/counter" component={Counter} exact />
              <Route path="/filters" component={Filters} />
              <Route
                path="/articles/new"
                render={() => <h1>New Article Form</h1>}
              />
              <Route path="/articles" component={ArticlesRoute} />
              <Route path="/comments" component={CommentsPage} />
              <Route path="/error" render={() => <h1>Error page</h1>} />
              <Route path="*" exact render={() => <h1>Not Found</h1>} />
            </Switch>
          </div>
        </LocalizationProvider>
      </AuthProvider>
    )
  }
}

export default App
