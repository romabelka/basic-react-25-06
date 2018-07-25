import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PaginatedCommentList from '../components/paginated-comment-list'

class CommentsRoute extends Component {
  static propTypes = {}

  render() {
    console.log(
      '--- CommentsRoute match',
      this.props.match,
      this.props.match.params.id
    )
    return (
      <div>
        <Route path="/comments/:id" render={this.getCommentList} />
      </div>
    )
  }
  getCommentList = ({ match }) => {
    return (
      <PaginatedCommentList pageId={match.params.id} key={match.params.id} />
    )
  }
}

export default CommentsRoute
