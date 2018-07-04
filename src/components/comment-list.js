import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  render() {
    const { isOpen } = this.props

    if (!isOpen) return null

    return <ul>{this.comments}</ul>
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }

  handleShowCommentsClick = () => {
    this.props.toggleOpenItem(this.props.articleId)
  }
}

export default CommentList
