import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Comment from './comment'
import Loader from './common/loader'
import { loadComments } from '../ac'
import {
  commentsMapSelector,
  commentsLoadingSelector,
  commentsLoadedSelector,
  commentsOffsetSelector,
  commentsLimitSelector,
  commentsTotalSelector
} from '../selectors'

class Comments extends Component {
  static propTypes = {}

  /*
    static defaultProps = {
      comments: []
    }
  */
  componentDidMount() {
    this.props.loadComments &&
      !this.props.loaded &&
      this.props.loadComments(this.props.offset, this.props.limit)
  }

  render() {
    return (
      <div>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
        {this.pagination}
      </div>
    )
  }

  getBody() {
    const { loading, loaded } = this.props

    if (loading) {
      return <Loader />
    }
    if (!loaded) {
      return null
    }

    return this.comments
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    )
  }

  get pagination() {
    const { limit, total } = this.props
    let offsets = []
    for (let i = 0; i < total; i = i + limit) {
      offsets.push({ num: i / limit + 1, offset: i })
    }

    return (
      <div>
        {offsets.map((offset) => (
          <button
            onClick={this.handlePagination(offset.offset)}
            style={{
              color: offset.offset == this.props.offset ? 'red' : 'black'
            }}
          >
            {offset.num}
          </button>
        ))}
      </div>
    )
  }

  handlePagination = (offset) => () => {
    if (offset != this.props.offset) {
      this.props.loadComments(offset, this.props.limit)
    }
  }
}

export default connect(
  (state) => ({
    comments: commentsMapSelector(state),
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state),
    offset: commentsOffsetSelector(state),
    limit: commentsLimitSelector(state),
    total: commentsTotalSelector(state)
  }),
  { loadComments }
)(Comments)
