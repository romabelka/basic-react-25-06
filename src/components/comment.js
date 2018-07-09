import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.string
  }

  render() {
    const { comment } = this.props

    return (
      <div>
        {comment.text} <b>by {comment.user}</b>
      </div>
    )
  }
}

export default Comment
