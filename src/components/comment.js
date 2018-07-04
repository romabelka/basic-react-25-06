import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    console.log('---', 'rerendering comment')
    const { comment } = this.props
    return (
      <div>
        <h4>{comment.user}</h4>
        <p>{comment.text}</p>
      </div>
    )
  }
}

export default Comment
