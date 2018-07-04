import React, { Component } from 'react'
import Comment from './Comment'
import Toggler from '../decorators/Toggler'

class CommentList extends Component {
  render() {
    console.log('---', 'rerendering commentList')
    const { comments } = this.props
    if (!comments) return null

    return (
      <section>
        <button onClick={this.props.toggleComments}>
          {this.props.isOpen ? 'Скрыть' : 'Показать'} комменты
        </button>
        {this.props.isOpen && <ul>{this.comments}</ul>}
      </section>
    )
  }

  get comments() {
    const { comments } = this.props

    return comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }
}

export default Toggler(CommentList)
