import React, { Component } from 'react'
import CommentItem from './comment-item'

class CommentList extends Component {
  render() {
    const { isShown } = this.props

    return (
      <div>
        <button onClick={this.handleChange}>
          {isShown ? 'hide comments' : 'show comments'}
        </button>
        {isShown ? <ul>{this.comments}</ul> : null}
      </div>
    )
  }

  handleChange = () => {
    const { isShown } = this.props
    if (isShown === false) {
      this.props.toggleShow(true)
    } else {
      this.props.toggleShow(false)
    }
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <CommentItem comment={comment} />
      </li>
    ))
  }
}
export default CommentList
