import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { connect } from 'react-redux'
import { commentsLoadedSelector } from './../../selectors'
import Loader from './../common/loader'
import { loadComments } from './../../ac'

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
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test--comment-list__btn">
          {text}
        </button>
        {!this.props.loaded && isOpen ? (
          <Loader />
        ) : (
          <CSSTransition
            transitionName="comments"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}
          >
            {this.getBody()}
          </CSSTransition>
        )}
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.isOpen && this.props.isOpen && !this.props.loaded) {
      this.props.loadComments()
    }
  }

  getBody() {
    const {
      article: { comments = [], id },
      isOpen
    } = this.props
    if (!isOpen) return null

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
  (state) => {
    return {
      loaded: commentsLoadedSelector(state)
    }
  },
  {
    loadComments
  }
)(toggleOpen(CommentList))
