import React, { Component } from 'react'
import { userNameSelector } from '../../selectors'
import { connect } from 'react-redux'
import { addComment, showError } from '../../ac'
import PropTypes from 'prop-types'

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.required,
    userName: PropTypes.string,
    addComment: PropTypes.func,
    showError: PropTypes.func
  }

  state = {
    text: ''
  }

  render() {
    return (
      <div>
        <h4>{this.props.userName}</h4>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          cols="40"
          rows="5"
        />
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
    const { articleId, userName, addComment, showError } = this.props
    const { text } = this.state
    const error = this.validate(userName, text)
    if (error) {
      showError(error)
    } else {
      addComment({
        articleId: articleId,
        comment: {
          user: userName,
          text: text
        }
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
