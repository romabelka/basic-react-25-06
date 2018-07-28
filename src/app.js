import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import ArticlesRoute from './routes/articles'
import CommentsPage from './routes/comments-page'
import Menu, { MenuItem } from './components/menu'
import { Provider as AuthProvider } from './contexts/auth'
import { ContextProvider as LocalizationProvider, ContextConsumer as LocalizationConsumer } from './contexts/localization'
import Select from 'react-select'

class App extends Component {
  static propTypes = {}
  state = {
    username: '',
    lang: 'en'
  }

  handleUserChange = (username) => this.setState({ username })

  render() {
    return (
      <AuthProvider value={this.state.username}>
        <Select
          options={[{label: 'ru', value: 'ru'}, {label: 'en', value: 'en'}]}
          value={{label: this.state.lang, value: this.state.lang}}
          onChange={(opt) => this.setState({lang: opt.value})}
        />
        <LocalizationProvider lang={this.state.lang}>
        <div>
          <UserForm
            onChange={this.handleUserChange}
            value={this.state.username}
          />
          <Menu>
            <MenuItem to="/articles"><LocalizationConsumer>Articles</LocalizationConsumer></MenuItem>
            <MenuItem to="/comments"><LocalizationConsumer>Comments</LocalizationConsumer></MenuItem>
            <MenuItem to="/filters"><LocalizationConsumer>Filters</LocalizationConsumer></MenuItem>
            <MenuItem to="/counter"><LocalizationConsumer>Counter</LocalizationConsumer></MenuItem>
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
      </LocalizationProvider>
      </AuthProvider>
    )
  }
}

export default App
