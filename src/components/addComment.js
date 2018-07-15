import React, { Component } from 'react'

class AddComment extends Component {
  render() {
    return (
      <div>
        Username: <input type="text" required minLength="3" maxLength="50" />
        Comment: <textarea required minLength="3" maxLength="255" />
        <button>add comment</button>
      </div>
    )
  }
}

export default AddComment
