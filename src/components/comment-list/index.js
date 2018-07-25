import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../comment'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  render() {
    return (
      <div className="test--comment-list__body">
        {this.props.comments && this.props.comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((id) => (
          <li key={id} className="test--comment-list__item">
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default CommentList
