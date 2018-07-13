import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired
  }

  state = {
    user: '',
    text: ''
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
        <input type="submit" value="Post" />
      </form>
    )
  }

  handleChange = (element) => (ev) => {
    this.setState({
      [element]: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    const { addComment, articleId } = this.props
    ev.preventDefault()
    addComment(this.state, articleId)

    this.setState({
      user: '',
      text: ''
    })
  }
}

export default CommentForm
