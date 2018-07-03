import React, { Component } from 'react'
import Comment from './comment'
import toggle from '../decorators/toggle'

class CommentList extends Component {
  render() {
    const { comments, articleIsOpen, isElemOpen } = this.props

    if (!articleIsOpen || !comments) return null

    return (
      <div>
        <button onClick={this.handleClick}>
          {isElemOpen ? 'close' : 'open'} comments
        </button>
        {this.comments}
      </div>
    )
  }

  handleClick = () => this.props.toggle(!this.props.isElemOpen)

  get comments() {
    const { comments, isElemOpen } = this.props

    if (!isElemOpen) return null

    return comments.map((comment) => (
      <div key={comment.id}>
        <Comment comment={comment} />
      </div>
    ))
  }
}

export default toggle(CommentList)
