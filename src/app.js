import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import ArticlesRoute from './routes/articles'
import CommentsPage from './routes/comments-page'
import Menu, { MenuItem } from './components/menu'

class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <UserForm />
        <Menu>
          <MenuItem to="/articles">Articles</MenuItem>
          <MenuItem to="/comments">Comments</MenuItem>
          <MenuItem to="/filters">Filters</MenuItem>
          <MenuItem to="/counter">Counter</MenuItem>
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
    )
  }
}

export default App
