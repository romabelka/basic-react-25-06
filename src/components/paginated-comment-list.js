import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Comment from './comment'
import { pageCommentsSelector } from '../selectors'
import Loader from './common/loader'
import { loadComments } from '../ac'

class PaginatedCommentList extends Component {
  static propTypes = {
    id: PropTypes.string,
    // from connect
    comments: PropTypes.array,
    loadComments: PropTypes.func
  }
  //
  // static defaultProps = {
  // comments: []
  // }

  componentDidMount(oldProps) {
    const { id, loadComments } = this.props
    // if (
    //   !article.commentsLoading &&
    //   !article.commentsLoaded
    // ) {
    //   loadComments(pageId)
    // }
    loadComments(id)
  }

  render() {
    return <div>{this.getBody()}</div>
  }

  getBody() {
    const { comments } = this.props
    // if (commentsLoading) return <Loader />
    // if (!commentsLoaded) return null
    console.log('comments', comments[1])
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
        {this.props.comments.map((comment) => (
          <li key={comment.id} className="test--comment-list__item">
            <Comment id={comment.id} />
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
)(PaginatedCommentList)
