import React from 'react'

export default function comment(props) {
  const { user, text } = props.comment

  return (
    <div>
      <b>{user}</b>
      <div>{text}</div>
    </div>
  )
}
