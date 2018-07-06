import React, { Component } from 'react'
import Comment from './comment'

class CommentsList extends Component {
  render() {
    return <ul>{this.comments}</ul>
  }

  get comments() {
    return (
      this.props.comments &&
      this.props.comments.map((comment) => (
        <li key={comment.id}>
          <Comment user={comment.user} text={comment.text} />
        </li>
      ))
    )
  }
}

export default CommentsList
