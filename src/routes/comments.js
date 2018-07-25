import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CommentsPage from '../components/comments-page'

class CommentsRoute extends Component {
  render() {
    return <Route path="/comments/:page" render={this.renderPage} />
  }

  renderPage = ({ match }) => {
    return <CommentsPage page={match.params.page} key={match.params.page} />
  }
}

export default CommentsRoute
