import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadCommentsPage } from '../../ac'
import {
  commentsPageSelector,
  commentsTotalEntitiesSelector,
  commentsPageLoadedSelector
} from '../../selectors'
import Comment from '../comment'
import Pagination from '../pagination'

class CommentsPage extends Component {
  static propTypes = {
    page: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { loaded, loadCommentsPage, page } = this.props

    if (!loaded) {
      loadCommentsPage(page)
    }
  }

  render() {
    const { totalEntities } = this.props

    return (
      <div>
        <Pagination totalEntities={totalEntities} limit={5} />
        {this.renderComments()}
      </div>
    )
  }

  renderComments = () => {
    const { loaded, comments } = this.props

    if (!loaded) return null

    return (
      <div>
        <ul>
          {comments.map(({ id }) => (
            <li key={id}>
              <Comment id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    comments: commentsPageSelector(state, ownProps),
    totalEntities: commentsTotalEntitiesSelector(state),
    loaded: commentsPageLoadedSelector(state, ownProps)
  }),
  { loadCommentsPage }
)(CommentsPage)
