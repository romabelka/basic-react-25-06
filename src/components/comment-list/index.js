import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import {connect} from "react-redux";
import { loadComments } from "../../ac";
import {articleCommentsSelector} from "../../selectors";
import Loader from '../common/loader'

class CommentList extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
  static defaultProps = {
    comments: []
  }
*/

  componentDidUpdate(oldProps) {
    const { isOpen, loadComments, articleId, commentsList } = this.props
    if (!oldProps.isOpen && isOpen && (!commentsList || !commentsList.loaded)) loadComments(articleId)
  }

  render() {
    const { isOpen, toggleOpen, commentsList } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test--comment-list__btn">
          {text}
        </button>
        { isOpen && (!commentsList || commentsList.loading) &&
          <Loader />
        }
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
    const {
      articleId,
      commentsList,
      isOpen
    } = this.props

    if (!isOpen || !commentsList || commentsList.loading) return null

    return (
      <div className="test--comment-list__body">
        {commentsList.entities.size > 0 ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
        <CommentForm articleId={articleId} />
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.commentsList.entities.map((comment, id) => (
          <li key={id} className="test--comment-list__item">
            <Comment id={id} comment={comment} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  (state, props) => ({
    commentsList: articleCommentsSelector(state, props)
  }),
  { loadComments }
)(toggleOpen(CommentList))
