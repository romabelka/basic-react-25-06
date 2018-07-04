import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        <h4>{comment.user}</h4>
        <section>{comment.text}</section>
      </div>
    )
  }
}

export default Comment
