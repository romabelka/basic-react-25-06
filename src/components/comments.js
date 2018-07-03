import React from 'react'
import collapse from '../decorators/collapse'

function Comments(props) {
  const { comments, isCollapsed, toggleCollapse } = props

  if (!comments || !comments.length) {
    return <h4>No comments</h4>
  }

  return (
    <div>
      <h4>
        Comments
        <button onClick={toggleCollapse}>
          {isCollapsed ? 'hide' : 'show'}
        </button>
      </h4>
      <hr />
      <ul>
        {isCollapsed &&
          comments.map(({ id, user, text }) => (
            <li key={id}>
              <i>{user}: </i>
              {text}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default collapse(Comments)
