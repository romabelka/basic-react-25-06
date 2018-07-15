import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired
  }

  state = {
    user: '',
    text: '',
    userValid: false,
    textValid: false
  }

  render() {
    const { text, user } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={text}
          onChange={this.handleChange('text')}
          placeholder={'text'}
        />
        <input
          value={user}
          onChange={this.handleChange('user')}
          placeholder={'user'}
        />
        <input
          type="submit"
          value="Post"
          disabled={!this.state.userValid || !this.state.textValid}
        />
      </form>
    )
  }

  handleChange = (element) => (ev) => {
    const name = element
    const value = ev.target.value
    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value)
      }
    )
  }

  handleSubmit = (ev) => {
    const { addComment, articleId } = this.props
    ev.preventDefault()
    addComment(this.state, articleId)

    this.setState({
      user: '',
      text: '',
      userValid: false,
      textValid: false
    })
  }

  validateField(fieldName, value) {
    let textValid = this.state.textValid
    let userValid = this.state.userValid

    switch (fieldName) {
      case 'text':
        textValid = value.length >= 1
        break
      case 'user':
        userValid = value.length >= 1
        break
      default:
        break
    }

    this.setState({
      textValid: textValid,
      userValid: userValid
    })
  }
}

export default CommentForm
