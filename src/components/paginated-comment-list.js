import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from './comment'
import { pageCommentsSelector } from '../selectors'
import Loader from '../common/loader'
import { loadComments } from '../ac'

class CommentList extends Component {
  static propTypes = {
    pageId: PropTypes.object.number,
    // from connect
    comments: PropTypes.array,
    loadComments: PropTypes.func
  }

  /*
   static defaultProps = {
   comments: []
   }
   */
  componentDidUpdate(oldProps) {
    const { pageId, loadComments } = this.props
    // if (
    //   !article.commentsLoading &&
    //   !article.commentsLoaded
    // ) {
    //   loadComments(pageId)
    // }
    loadComments(pageId)
  }

  render() {
    return <div>{this.getBody()}</div>
  }

  getBody() {
    const { comments } = this.props
    // if (commentsLoading) return <Loader />
    // if (!commentsLoaded) return null

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
  (state, ownProps) => ({
    comments: pageCommentsSelector(state, ownProps)
  }),
  { loadComments }
)(CommentList)
