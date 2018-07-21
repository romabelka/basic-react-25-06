import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import Loader from '../common/loader'
import { loadArticleComments } from '../../ac'

import './style.css'
import { connect } from 'react-redux'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    fetchData: PropTypes.func,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    // from connect
    loading: PropTypes.bool,
    loaded: PropTypes.bool
  }

  /*
     static defaultProps = {
     comments: []
     }
     */

  componentDidUpdate(oldProps) {
    console.log('---', 'comment list did update')
    const { isOpen, fetchData, article } = this.props
    if (!oldProps.isOpen && isOpen && !article.commentsLoaded)
      fetchData(article.id)
  }

  render() {
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
      article: { comments = [], id },
      isOpen
    } = this.props
    if (!isOpen) return null
    if (
      this.props.article.commentsLoading ||
      !this.props.article.commentsLoaded
    )
      return <Loader />
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
  { fetchData: loadArticleComments }
)(toggleOpen(CommentList))
