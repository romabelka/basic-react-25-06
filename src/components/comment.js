import React from 'react'

function Comment(props) {
  return (
    <div>
      <span>
        <i>{props.user}</i>
      </span>
      <p>{props.text}</p>
    </div>
  )
}

export default Comment
