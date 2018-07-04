import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentList extends Component {
  render() {
    const { comments } = this.props

    return (
      <ul>
        {comments ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              userName={comment.user}
              text={comment.text}
            />
          ))
        ) : (
          <div>No comments yet</div>
        )}
      </ul>
    )
  }
}

export default CommentList
