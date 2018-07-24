import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadCommentsPage } from '../../ac'
import {
  commentsListSelector,
  commentsLoadedSelector,
  commentsLoadingSelector
} from '../../selectors'
import Comment from '../comment'
import Loader from '../common/loader'

class CommentsPage extends Component {
  static propTypes = {
    page: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { loaded, loading, loadCommentsPage, page } = this.props

    if (!loaded && !loading) {
      loadCommentsPage(page)
    }
  }

  render() {
    const { loaded, loading } = this.props

    if (loading) return <Loader />
    if (!loaded) return null

    return (
      <ul>
        {this.props.comments.map(({ id }) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  (state) => ({
    comments: commentsListSelector(state),
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state)
  }),
  { loadCommentsPage }
)(CommentsPage)
