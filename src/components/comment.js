import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.object
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
