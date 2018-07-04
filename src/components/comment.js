import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        <h2>{comment.user}</h2>
        <p>{comment.text}</p>
      </div>
    )
  }
}

export default Comment
