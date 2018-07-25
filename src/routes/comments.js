import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CommentPage from '../components/comment-page'
import { commentsPagesCount } from '../selectors'
import { connect } from 'react-redux'
import NotFound from '../components/common/not-found'

class CommentRoute extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Switch>
          <Route path="/comments/:pageNumber" render={this.getCommentList} />
          <Route path="/comments/" render={this.getCommentList} />
        </Switch>
      </div>
    )
  }

  getCommentList = ({ match }) => {
    const page = match.params.pageNumber ? match.params.pageNumber : '1'
    const pageNumber = parseInt(page, 10)
    const isValid =
      !isNaN(pageNumber) &&
      (pageNumber <= this.props.pagesCount || this.props.pagesCount === 0) &&
      pageNumber >= 1

    return isValid ? this.getCommentPage(pageNumber) : <NotFound />
  }

  getCommentPage = (pageNumber) => {
    return (
      <div>
        <CommentPage pageNumber={pageNumber} key={pageNumber} />
        {this.getPrevious(pageNumber)}
        {this.getNext(pageNumber)}
      </div>
    )
  }

  getPrevious = (pageNumber) => {
    const previousNumber = pageNumber - 1
    const previous = '/comments/' + previousNumber

    if (
      !isNaN(previousNumber) &&
      previousNumber > 0 &&
      this.props.pagesCount > 0
    ) {
      return (
        <div>
          <NavLink to={previous} activeStyle={{ color: 'red' }}>
            previous
          </NavLink>
        </div>
      )
    }

    return null
  }

  getNext = (pageNumber) => {
    const nextNumber = 1 + pageNumber
    const next = '/comments/' + nextNumber
    const { pagesCount } = this.props

    if (!isNaN(nextNumber) && pagesCount > 0 && nextNumber <= pagesCount) {
      return (
        <div>
          <NavLink to={next} activeStyle={{ color: 'red' }}>
            next
          </NavLink>
        </div>
      )
    }

    return null
  }
}

export default connect((state) => ({
  pagesCount: commentsPagesCount(state)
}))(CommentRoute)
