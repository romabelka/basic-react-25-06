import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Comment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        {comment.text} <b>by {comment.user}</b>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.string
  }).isRequired
}

export default Comment
