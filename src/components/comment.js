import React, { Component } from 'react'

class Comment extends Component {
  componentDidMount() {
    console.log(1)
  }
  render() {
    const { comment } = this.props
    return (
      <div>
        {comment.text} <b>by {comment.user}</b>
      </div>
    )
  }
}

export default Comment
