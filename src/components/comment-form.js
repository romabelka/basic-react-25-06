import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createId, addComment } from '../ac'

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          name="user"
          value={this.state.user}
          onChange={this.handleChange}
          type="text"
        />

        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          type="text"
        />

        <input type="submit" value="Send" />
      </form>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { user, text } = this.state

    if (user.length < 3 || text.length < 3) return

    const id = this.props.createId()
    this.props.addComment({ ...this.state, id }, this.props.articleId)

    this.setState({
      user: '',
      text: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

export default connect(
  null,
  { createId, addComment }
)(CommentForm)
