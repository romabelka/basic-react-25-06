import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import AddComment from '../addComment'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { connect } from 'react-redux'
import { addComment } from '../../ac'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
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
    const { isOpen, toggleOpen, articleId, addComment } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <AddComment articleId={articleId} addComment={addComment} />
        <button onClick={toggleOpen} className="test--comment-list__btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen) return null

    return (
      <div className="test--comment-list__body">
        {comments.length ? (
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

export default connect(
  null,
  { addComment }
)(toggleOpen(CommentList))
