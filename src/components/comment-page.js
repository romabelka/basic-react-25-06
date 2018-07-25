import React, { Component } from 'react'
import {
  commentsPerPageSelector,
  pageCommentsLoaded,
  pageCommentsLoading,
  commentsPagesCount
} from '../selectors/'
import PropTypes from 'prop-types'
import CommentList from './comment-list'
import { connect } from 'react-redux'
import Loader from './common/loader'
import { loadPageComments } from '../ac/'

class CommentPage extends Component {
  static propTypes = {
    pageNumber: PropTypes.number.isRequired,
    // from connect
    comments: PropTypes.array,
    loaded: PropTypes.bool,
    loading: PropTypes.bool
  }

  componentDidMount() {
    const { pageNumber, loaded, loading, loadPageComments } = this.props
    if (!(loading || loaded)) {
      loadPageComments(pageNumber)
    }
  }

  render() {
    const { pageNumber, pagesCount, loading, loaded, comments } = this.props
    if (loading) return <Loader />
    if (!loaded) return null

    return (
      <div>
        <CommentList comments={comments} />
        <div>
          Page {pageNumber} of {pagesCount}
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    comments: commentsPerPageSelector(state, ownProps.pageNumber).map(
      (x) => x.id
    ),
    loaded: pageCommentsLoaded(state, ownProps.pageNumber),
    loading: pageCommentsLoading(state, ownProps.pageNumber),
    pagesCount: commentsPagesCount(state)
  }),
  { loadPageComments }
)(CommentPage)
