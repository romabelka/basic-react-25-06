import React, { Component } from 'react'
import CommentItem from './comment'

class CommentList extends Component {
  render() {
    return (
      <div>
        <button>show comments</button>
        <ul>{this.comments}</ul>
      </div>
    )
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <CommentItem comment={comment} />
      </li>
    ))
  }
}
export default CommentList
