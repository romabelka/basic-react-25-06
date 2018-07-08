import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from '../index'
import toggleOpen from '../../../decorators/toggleOpen'
import Animation from '../../animation'
import './style.css'

export class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    disableAnimation: PropTypes.bool,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  render() {
    const { isOpen, toggleOpen, disableAnimation } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button className="test--comment-list__open-btn" onClick={toggleOpen}>
          {text}
        </button>

        <Animation
          transitionName="comment-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          disableAnimation={disableAnimation}
        >
          {this.getBody()}
        </Animation>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
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

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
