import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import CommentList from './comment-list/index'
import CommentForm from './comment-form/index'
import Loader from './common/loader'
import toggleOpen from '../decorators/toggleOpen'
import { loadArticleComments } from '../ac/index'
import './article/style.css'
import { articleCommentsLoaded, articleCommentsLoading } from '../selectors'

class ArticleComments extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
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
    const { isOpen, article, loadArticleComments } = this.props
    if (isOpen && !oldProps.isOpen) {
      loadArticleComments(article.id)
    }
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
      article: { comments, id },
      loading,
      loaded,
      isOpen
    } = this.props
    if (!isOpen) return null
    if (loading) return <Loader />
    if (!loaded) return null

    return (
      <div>
        <CommentList comments={comments} />
        <CommentForm articleId={id} />
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    loading: articleCommentsLoading(state, ownProps.article.id),
    loaded: articleCommentsLoaded(state, ownProps.article.id)
  }),
  { loadArticleComments }
)(toggleOpen(ArticleComments))
