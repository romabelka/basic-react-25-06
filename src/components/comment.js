import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { userName, text } = this.props
    return (
      <li>
        <div>
          <b>{userName}</b>
        </div>
        <div>{text}</div>
      </li>
    )
  }
}

export default Comment
