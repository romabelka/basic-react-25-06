import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Comment from '../comment'
import CommentForm from '../comment-form'
import Loader from '../common/loader'
import toggleOpen from '../../decorators/toggleOpen'
import { loadArticleComments } from '../../ac'
import { Consumer as AuthConsumer } from '../../contexts/auth'
import './style.css'
import i18n from '../../decorators/i18n'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
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
    const { isOpen, article, loadArticleComments } = this.props
    if (
      isOpen &&
      !oldProps.isOpen &&
      !article.commentsLoading &&
      !article.commentsLoaded
    ) {
      loadArticleComments(article.id)
    }
  }

  render() {
    const { isOpen, toggleOpen, translate } = this.props
    const text = translate(
      isOpen ? 'article.hide_comments' : 'article.show_comments'
    )
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
      article: { comments, id, commentsLoading, commentsLoaded },
      isOpen,
      translate
    } = this.props
    if (!isOpen) return null
    if (commentsLoading) return <Loader />
    if (!commentsLoaded) return null

    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">
            {translate('article.no_comments')}
          </h3>
        )}
        <AuthConsumer>{(user) => <h3>{user}</h3>}</AuthConsumer>

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

export default i18n(
  connect(
    null,
    { loadArticleComments }
  )(toggleOpen(CommentList))
)
