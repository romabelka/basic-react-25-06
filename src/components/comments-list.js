import React, { Component } from 'react'
import Comment from '../components/comment'

import collapsible from '../decorators/collapse'

class CommentsList extends Component {
  render() {
    const { isCollapse } = this.props
    return (
      <div>
        <button onClick={this.handleClick}>
          {isCollapse ? 'Скрыть комментарии' : 'Открыть комментарии'}
        </button>
        <ul>{isCollapse ? this.comments : null}</ul>
      </div>
    )
  }

  handleClick = () =>
    this.props.toggleOpenItem(this.props.isCollapse ? false : true)

  get comments() {
    console.log(this.props)
    const { comments } = this.props
    if (!comments) return
    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment
          isOpen={this.props.openItemId === comment.id}
          comment={comment}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))
  }
}

export default collapsible(CommentsList)
