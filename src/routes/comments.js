import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Comments from '../components/comments-pagination'

class CommentsRoute extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Route path="/comments/:page" render={this.getComments} />
      </div>
    )
  }

  getComments = ({ match }) => {
    const { page } = match.params
    return <Comments page={page} limit={5} key={page} />
  }
}

export default CommentsRoute
