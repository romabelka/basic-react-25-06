import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../index'
import toggleOpen from '../../../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

export class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    disableAnimation: PropTypes.bool
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button className="test--comment-list__open-btn" onClick={toggleOpen}>
          {text}
        </button>

        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { comments, isOpen, disableAnimation } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="test--comment-list__item">
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test--comment-list__no-comments">No comments yet</h3>
    )

    if (disableAnimation) {
      return <div>{body}</div>
    }

    return (
      <CSSTransition
        transitionName="comment-list"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div>{body}</div>
      </CSSTransition>
    )
  }
}

export default toggleOpen(CommentList)
