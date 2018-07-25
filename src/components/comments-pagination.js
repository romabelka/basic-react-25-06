import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Loader from './common/loader'
import Comment from './comment'
import { paginationPageSelector } from '../selectors'
import { loadData } from '../ac'
import { NavLink } from 'react-router-dom'

class Comments extends PureComponent {
  componentDidMount() {
    const { comments, loadData } = this.props

    if (!comments || (!comments.loading && !comments.loaded)) loadData()
  }

  render() {
    const { comments } = this.props
    if (!comments) return null

    return (
      <div>
        {this.body}
        {this.pagination}
      </div>
    )
  }

  get pagination() {
    const len = Math.ceil(this.props.comments.total / this.props.limit)
    const pages = Array.from({ length: len })

    return pages.map((_, i) => (
      <NavLink
        key={i}
        to={'/comments/' + (i + 1)}
        activeStyle={{ color: 'red' }}
      >
        {i + 1}
      </NavLink>
    ))
  }

  get body() {
    const { comments } = this.props

    if (comments.loading) return <Loader key="loader" />

    return (
      <div>
        {comments.records.length ? this.comments : <div>No comments yet</div>}
      </div>
    )
  }

  get comments() {
    return (
      <ul>
        {this.props.comments.records.map((comment) => {
          return <li key={comment.id}>{comment.text}</li>
        })}
      </ul>
    )
  }
}

export default connect(
  (state, props) => ({
    comments: paginationPageSelector(state, props)
  }),
  (dispatch, props) => ({
    loadData: () => dispatch(loadData(props.page, props.limit, 'comments'))
  })
)(Comments)
