import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  state = {
    opened: false
  }
  toggleComments = () => {
    this.setState({ opened: !this.state.opened })
  }
  render() {
    return (
      <div>
        <a href="#" onClick={this.toggleComments}>
          {this.state.opened ? 'hide comments' : 'show comments'}
        </a>
        {this.comments}
      </div>
    )
  }

  get comments() {
    if (!this.state.opened) return null

    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default CommentList
