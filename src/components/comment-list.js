import React, { Component } from 'react'
import Comment from './comment'
import Toggler from '../decorators/toggler'

class CommentList extends Component {
  state = {
    opened: false
  }
  toggleComments = () => {
    this.props.toggle()
  }
  render() {
    return (
      <div>
        <a href="#" onClick={this.toggleComments}>
          {this.props.opened ? 'hide comments' : 'show comments'}
        </a>
        {this.comments}
      </div>
    )
  }

  get comments() {
    const { opened, comments } = this.props
    if (!opened) return null

    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default Toggler(CommentList)
