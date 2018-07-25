import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Filters from './components/filters'
import Counter from './components/counter'
import ArticlesRoute from './routes/articles'
import AllCommentsRoute from './routes/allComments'

class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <div>
          <div>
            <NavLink to="/articles" activeStyle={{ color: 'red' }}>
              articles
            </NavLink>
          </div>
          <div>
            <NavLink to="/filters" activeStyle={{ color: 'red' }}>
              filters
            </NavLink>
          </div>
          <div>
            <NavLink to="/counter" activeStyle={{ color: 'red' }}>
              counter
            </NavLink>
            <div>
              <NavLink to="/comments/1" activeStyle={{ color: 'red' }}>
                comments
              </NavLink>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/counter" component={Counter} exact />
          <Route path="/filters" component={Filters} />
          <Route
            path="/articles/new"
            render={() => <h1>New Article Form</h1>}
          />
          <Route path="/articles" component={ArticlesRoute} />
          <Route path="/comments" component={AllCommentsRoute} />
        </Switch>
      </div>
    )
  }
}

export default App
