import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from './../../ac'
import { currentComments, currentCommentsLoded } from './../../selectors'
import Loader from './../common/loader'
import Comment from './../comment'
import { NavLink } from 'react-router-dom'

class AllComments extends Component {
  render() {
    return <div>{this.body}</div>
  }

  get body() {
    const { loaded, comments } = this.props

    if (!loaded) return <Loader />

    const body = comments.entities
      .valueSeq()
      .toArray()
      .map((elem) => {
        return (
          <li key={elem.id}>
            <Comment comment={elem} />
          </li>
        )
      })

    const pagination = []

    for (let i = 1; i <= Math.ceil(comments.total / 5); i++) {
      pagination.push(i)
    }

    return (
      <div>
        <ul>{body}</ul>
        {pagination.map((elem) => {
          return (
            <NavLink
              activeStyle={{ color: 'red' }}
              key={elem}
              to={`/comments/${elem}`}
            >
              {elem}
            </NavLink>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    if (!this.props.loaded) this.props.loadAllComments(this.props.currentPag)
  }
}

export default connect(
  (store, ownProps) => {
    console.log(store)
    return {
      comments: currentComments(store, ownProps.currentPag),
      loaded: currentCommentsLoded(store, ownProps.currentPag)
    }
  },
  {
    loadAllComments
  }
)(AllComments)
