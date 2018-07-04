import React, { PureComponent } from 'react'

class Comment extends PureComponent {
  render() {
    console.log('---', 'rerendering comment')
    const { comment } = this.props
    return (
      <div>
        <h6>{comment.user}</h6>
        {comment.text}
      </div>
    )
  }
}

export default Comment
