import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import {
  commentsLoadingSelector,
  commentsLoadedSelector,
  commentSelector
} from '../../selectors'
import { loadAllComments } from '../../ac'
import { connect } from 'react-redux'
import Loader from '../common/loader'

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

  render() {
    const { isOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={this.toggleOpen} className="test--comment-list__btn">
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
      isOpen,
      loading
    } = this.props
    if (!isOpen) return null
    if (loading) return <Loader />

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
        {this.props.article.comments.map((id) => {
          const comment = this.props.commentSelector(id)
          if (comment) {
            return (
              <li key={id} className="test--comment-list__item">
                <Comment comment={comment} />
              </li>
            )
          }
        })}
      </ul>
    )
  }

  toggleOpen = () => {
    const { fetchData, loaded, article } = this.props
    fetchData && !loaded && fetchData(article.id)
    this.props.toggleOpen()
  }
}

export default connect(
  (state, ownProps) => ({
    loading: commentsLoadingSelector(state, ownProps.article.id),
    loaded: commentsLoadedSelector(state, ownProps.article.id),
    commentSelector: (id) => commentSelector(state, ownProps.article.id, id)
  }),
  { fetchData: loadAllComments }
)(toggleOpen(CommentList))
