import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import ArticlesRoute from './routes/articles'
import CommentsPage from './routes/comments-page'
import Menu, { MenuItem } from './components/menu'
import { Provider as AuthProvider } from './contexts/auth'
import TranslateProvider from './components/i18n/translate-provider'
import i18n from './components/i18n'

class App extends Component {
  static propTypes = {}
  state = {
    username: '',
    lang: 'en'
  }

  handleUserChange = (username) => this.setState({ username })
  changeLanguage = (lang) => (e) => this.setState({ lang })

  render() {
    const { t } = this.props

    return (
      <TranslateProvider lang={this.state.lang}>
        <AuthProvider value={this.state.username}>
          <div>
            <ul>
              <li onClick={this.changeLanguage('en')}>English</li>
              <li onClick={this.changeLanguage('ru')}>Русский</li>
            </ul>
            <UserForm
              onChange={this.handleUserChange}
              value={this.state.username}
            />
            <Menu>
              <MenuItem to="/articles">{t('Articles')}</MenuItem>
              <MenuItem to="/comments">{t('Comments')}</MenuItem>
              <MenuItem to="/filters">{t('Filters')}</MenuItem>
              <MenuItem to="/counter">{t('Counter')}</MenuItem>
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
              <Route path="/error" render={() => <h1>Error page</h1>} />
              <Route path="*" exact render={() => <h1>Not Found</h1>} />
            </Switch>
          </div>
        </AuthProvider>
      </TranslateProvider>
    )
  }
}

export default i18n(App)
