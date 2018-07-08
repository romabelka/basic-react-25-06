import React from 'react'

function Comment({ comment }) {
  return (
    <div className="test--comments__item">
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

export default Comment
