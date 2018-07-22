import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'

function Comment({ comment }) {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  id: PropTypes.string,
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  })
}

export default Comment
