import React, { Component } from 'react'

class AddComment extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <div>
        Username:{' '}
        <input
          type="text"
          required
          minLength="3"
          maxLength="50"
          value={this.state.email}
          onChange={this.handleUserChange}
        />
        Comment:{' '}
        <textarea
          required
          minLength="3"
          maxLength="255"
          onChange={this.handleCommentChange}
        />
        <button onClick={this.handleAdd}>add comment</button>
      </div>
    )
  }

  handleUserChange = (e) => {
    this.setState({ user: e.target.value })
  }

  handleCommentChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleAdd = () => {
    const { articleId, addComment } = this.props
    addComment(articleId, this.state.user, this.state.text)
  }
}

export default AddComment
