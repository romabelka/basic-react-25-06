import React, { Component } from 'react'
import Comment from './comment'
import toggler from '../decorators/toggler'

class CommentsList extends Component {
  render() {
    const { isOpen } = this.props

    return (
      <div>
        <button onClick={this.props.toggle}>
          {isOpen ? 'Hide comments' : 'Show comments'}
        </button>
        {isOpen ? <ul>{this.comments}</ul> : null}
      </div>
    )
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <Comment user={comment.user} text={comment.text} />
      </li>
    ))
  }
}

export default toggler(CommentsList)
