import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import ArticlesRoute from './routes/articles'
import CommentsPage from './routes/comments-page'
import Menu, { MenuItem } from './components/menu'
import { Provider as AuthProvider } from './contexts/auth'
import { Provider as I18nProvider } from './contexts/i18n'
import LanguageSelector from './components/language-selector'
import i18n from './decorators/i18n'
import labels from './labels'

class App extends Component {
  static propTypes = {}
  state = {
    username: '',
    lang: 'en'
  }

  handleUserChange = (username) => this.setState({ username })
  handleLanguageChange = (lang) => (event) => {
    event.preventDefault()
    this.setState({ lang })
  }

  render() {
    const { translate } = this.props
    return (
      <I18nProvider value={labels[this.state.lang]}>
        <AuthProvider value={this.state.username}>
          <div>
            <LanguageSelector changeLang={this.handleLanguageChange} />
            <UserForm
              onChange={this.handleUserChange}
              value={this.state.username}
            />
            <Menu>
              <MenuItem to="/articles">menu.articles</MenuItem>
              <MenuItem to="/comments">menu.comments</MenuItem>
              <MenuItem to="/filters">menu.filters</MenuItem>
              <MenuItem to="/counter">menu.counter</MenuItem>
            </Menu>
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
              <Route
                path="/error"
                render={() => <h1>{translate('error_page')}</h1>}
              />
              <Route
                path="*"
                exact
                render={() => <h1>{translate('not_found')}</h1>}
              />
            </Switch>
          </div>
        </AuthProvider>
      </I18nProvider>
    )
  }
}

export default i18n(App)
