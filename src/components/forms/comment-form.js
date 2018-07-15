import React, { Component } from 'react'
import { userNameSelector } from '../../selectors'
import { connect } from 'react-redux'
import { addComment, showError } from '../../ac'

class CommentForm extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <h4>{this.props.userName}</h4>
        <textarea onChange={this.handleChange} cols="40" rows="5" />
        <div>
          <button onClick={this.addComment}>Add</button>
        </div>
      </div>
    )
  }

  handleChange = (ev) => {
    ev.preventDefault()
    this.setState({
      text: ev.target.value
    })
  }

  addComment = () => {
    const { userName, addComment, showError } = this.props
    const { text } = this.state
    const error = this.validate(userName, text)
    if (error) {
      showError(error)
    } else {
      addComment({
        user: userName,
        text: text
      })
      this.setState({
        text: ''
      })
    }
  }

  validate = (userName, text) => {
    if (!userName || userName.length === 0) {
      return 'Please login.'
    }

    if (!text || text.length < 10) {
      return 'Minimum comment text length is 10.'
    }

    return ''
  }
}

export default connect(
  (state) => ({
    userName: userNameSelector(state)
  }),
  { addComment, showError }
)(CommentForm)
