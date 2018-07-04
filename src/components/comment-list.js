import React, { Component } from 'react'
import Comment from './comment'
import spoiler from '../decorators/spoiler'

class CommentList extends Component {
  render() {
    const { isOpen } = this.props
    return (
      <div>
        <h4>
          Comments{' '}
          <button onClick={this.props.toggle}>
            {isOpen ? 'close' : 'open'}
          </button>
        </h4>
        <ul>{this.comments}</ul>
      </div>
    )
  }

  get comments() {
    const { isOpen, comments } = this.props
    if (!isOpen) return null
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default spoiler(CommentList)
