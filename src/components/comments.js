import React, { PureComponent } from 'react'

class Comments extends PureComponent {
  get comments() {
    const { comments } = this.props

    return (
      comments &&
      comments.map((comment) => (
        <li key={comment.id}>
          <div>{comment.user}</div>
          <div>{comment.text}</div>
        </li>
      ))
    )
  }

  render() {
    return (
      <div>
        <section>{this.comments}</section>
      </div>
    )
  }
}

export default Comments
