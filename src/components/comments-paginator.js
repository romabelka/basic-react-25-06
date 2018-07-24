import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Comment from './comment'
import Loader from './common/loader'
import { loadPageComments } from '../ac'
import {
  commentsPageLoadingSelector,
  commentsPageIdsSelector,
  totalCommentsSelector
} from '../selectors/index'
import { COMMENTS_COUNT } from '../constants'

class CommentsPaginator extends Component {
  state = {}

  componentDidMount() {
    this.props.loadPageComments(this.props.page)
  }

  static getDerivedStateFromProps({ page, loadPageComments }, state) {
    loadPageComments(page)
    return state
  }

  render() {
    const { total } = this.props
    if (!total) return <Loader />
    return (
      <div>
        {this.getCommentItems()}
        {this.getPaginator()}
      </div>
    )
  }

  getCommentItems() {
    const { comments, loading } = this.props
    if (loading || !comments) return <Loader />
    const commentItems = comments.map((id) => (
      <li key={id}>
        <Comment id={id} />
      </li>
    ))
    return <ul>{commentItems}</ul>
  }

  getPaginator() {
    const { total } = this.props
    const pages = new Array(Math.floor((total - 1) / COMMENTS_COUNT) + 1)
      .fill()
      .map((_, i) => this.getPageLink(i, i + 1, i + 1, true))

    return (
      <div>
        Pages:
        <ul>
          {this.getNeighborPaginator()}
          {pages}
          {this.getNeighborPaginator(pages.length)}
        </ul>
      </div>
    )
  }

  getNeighborPaginator(lastPage = null) {
    const { page } = this.props
    const pageIndex = lastPage ? lastPage : 1
    const neighborPage = lastPage ? 1 : -1

    //doesn`t show if has active neighbor page or if has only 1 page
    if (page == pageIndex || (lastPage && lastPage == 1)) return

    return this.getPageLink(
      neighborPage - 1,
      +page + neighborPage,
      lastPage ? '>>' : '<<'
    )
  }

  getPageLink(key, page, title, isNavLink = false) {
    return (
      <li key={key} style={{ display: 'inline', margin: '5px' }}>
        {isNavLink ? this.getNavLink(page, title) : this.getLink(page, title)}
      </li>
    )
  }

  getLink(page, title) {
    return <Link to={`/comments/${page}`}>{title}</Link>
  }

  getNavLink(page, title) {
    return (
      <NavLink to={`/comments/${page}`} activeStyle={{ color: 'red' }}>
        {title}
      </NavLink>
    )
  }
}

export default connect(
  (state, props) => {
    return {
      total: totalCommentsSelector(state),
      loading: commentsPageLoadingSelector(state, props),
      comments: commentsPageIdsSelector(state, props)
    }
  },
  { loadPageComments }
)(CommentsPaginator)
