import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    const { comment } = this.props
    return (
      <span>
        <strong>{comment.user}: </strong>
        {comment.text}
      </span>
    )
  }
}
