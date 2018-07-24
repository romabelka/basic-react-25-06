import React from 'react'
import CommentsPaginator from '../components/comments-paginator'
import { Route } from 'react-router-dom'

function CommentsPage() {
  return <Route path="/comments/:page" render={getCommentsPaginator} />
}

function getCommentsPaginator({ match }) {
  return <CommentsPaginator page={match.params.page} />
}

CommentsPage.propTypes = {}

export default CommentsPage
