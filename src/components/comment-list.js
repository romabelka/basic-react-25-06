import React, { Component } from 'react'
import Comment from './comment'
import dropDown from '../decorators/drop-down'

class CommentList extends Component {
  render() {
    const { isOpen } = this.props
    return (
      <div>
        <button onClick={this.handleClick}>
          {isOpen ? 'Hide comments' : 'Show comments'}
        </button>
        {this.body}
      </div>
    )
  }

  get comments() {
    if (!this.props.comments) {
      return null
    }
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }

  get body() {
    const { isOpen, comments } = this.props
    if (!isOpen || !comments) {
      return null
    }

    return <ul>{this.comments}</ul>
  }

  handleClick = () => this.props.toggleOpen()
}

export default dropDown(CommentList)
