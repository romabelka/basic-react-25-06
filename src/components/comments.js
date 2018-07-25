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
  commentsLoadedSelector
} from '../selectors'

class Comments extends Component {
  static propTypes = {}

  /*
  static defaultProps = {
    comments: []
  }
*/
  componentDidMount(oldProps) {
    const { loadComments } = this.props
    /*if (
        isOpen &&
        !oldProps.isOpen &&
        !article.commentsLoading &&
        !article.commentsLoaded
      ) {
        loadArticleComments(article.id)
      }*/
    loadComments()
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
      </div>
    )
  }

  getBody() {
    const { comments, loading, loaded } = this.props
    console.log('---', comments, loading, loaded)
    if (loading) {
      return <Loader />
    }
    if (!loaded) {
      return null
    }

    return (
      <div>{comments.length ? this.comments : <h3>No comments yet</h3>}</div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.map((id) => (
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
    comments: commentsMapSelector(state),
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state)
  }),
  { loadComments }
)(Comments)
