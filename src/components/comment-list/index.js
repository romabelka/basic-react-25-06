import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import Loader from '../common/loader'
import { loadArticleComments } from '../../ac'
import { connect } from 'react-redux'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  componentDidUpdate({ isOpen: oldIsOpen }) {
    const {
      isOpen,
      article: { id, commentsLoaded },
      loadArticleComments
    } = this.props

    if (!oldIsOpen && isOpen && !commentsLoaded) {
      loadArticleComments(id)
    }
  }

  render() {
    console.log(this.props, 'propsArticle')
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
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
    const {
      article: { comments = [], id, commentsLoading, commentsLoaded },
      isOpen
    } = this.props

    if (commentsLoading) {
      return <Loader />
    }

    if (!isOpen || !commentsLoaded) return null

    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
        <CommentForm articleId={id} />
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.article.comments.map((id) => (
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
  { loadArticleComments }
)(toggleOpen(CommentList))
