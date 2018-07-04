import React, { Component } from 'react'
import CommentItem from './comment-item'
import demonstrator from '../decorators/demonstrator'

class CommentList extends Component {
  render() {
    console.log(this.props)
    const { isShow, toggleShowItems } = this.props

    return (
      <div>
        <button onClick={toggleShowItems}>
          {isShow ? 'hide comments' : 'show comments'}
        </button>
        {isShow && <ul>{this.comments}</ul>}
      </div>
    )
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <CommentItem comment={comment} />
      </li>
    ))
  }
}
export default demonstrator(CommentList)
