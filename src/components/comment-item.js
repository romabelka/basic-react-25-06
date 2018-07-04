import React from 'react'

export default function CommentItem({ comment }) {
  console.log('---', 'rerendering component')

  return (
    <div>
      <section>{comment.text}</section>
      <em>{comment.user}</em>
    </div>
  )
}
