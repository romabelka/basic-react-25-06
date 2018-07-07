import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggler from '../decorators/toggler'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
  }

  render() {
    const { isOpen, toggle } = this.props

    return (
      <div>
        <button onClick={toggle}>
          {isOpen ? 'Hide comments' : 'Show comments'}
        </button>
        {isOpen ? <ul>{this.comments}</ul> : null}
      </div>
    )
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <Comment user={comment.user} text={comment.text} />
      </li>
    ))
  }
}

export default toggler(CommentList)
