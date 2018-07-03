import React, { Component } from 'react'

class CommentItem extends Component {
  render() {
    console.log('---', 'rerendering component')
    const { comment } = this.props
    return (
      <div>
        <section>{comment.text}</section>
        <em>{comment.user}</em>
      </div>
    )
  }
}

export default CommentItem
