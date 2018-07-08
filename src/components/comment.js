import React from 'react'

function Comment({ comment }) {
  return (
    <div className="test--comment__body">
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

export default Comment
