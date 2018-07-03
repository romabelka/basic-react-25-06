import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  render() {
    return <ul>{this.comments}</ul>
  }

  get comments() {
    return (this.props.comments || []).map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default CommentList
