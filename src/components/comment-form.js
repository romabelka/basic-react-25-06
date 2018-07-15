import React, { Component } from 'react'
import { addComment } from '../ac'
import { connect } from 'react-redux'

class CommentForm extends Component {
  state = {
    user: '',
    commentText: ''
  }

  render() {
    return (
      <div>
        <div>
          Username:{' '}
          <input value={this.state.user} onChange={this.handleUserChange} />
        </div>
        <div>
          Comment:{' '}
          <textarea
            value={this.state.commentText}
            onChange={this.handleCommentChange}
          />
        </div>
        <div>
          <button onClick={this.handleCommentAdd}>send comment</button>
        </div>
      </div>
    )
  }

  handleUserChange = (e) => {
    e.preventDefault()

    if (e.target.value.length > 15)
      return this.setState({
        user: this.state.user
      })

    this.setState({
      user: e.target.value
    })
  }

  handleCommentChange = (e) => {
    e.preventDefault()

    if (e.target.value.length > 250)
      return this.setState({
        commentText: this.state.commentText
      })

    this.setState({
      commentText: e.target.value
    })
  }

  handleCommentAdd = (e) => {
    e.preventDefault()
    const { user, commentText } = this.state
    if (user && commentText) {
      this.setState({
        user: '',
        commentText: ''
      })
      this.props.addComment(user, commentText, this.props.articleId, null)
    }
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
