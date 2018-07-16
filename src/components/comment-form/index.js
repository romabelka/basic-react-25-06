import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../ac'
import './style.css'

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired
  }

  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitComment}>
        <label htmlFor="userName">User:</label>
        <input
          type="text"
          id="userName"
          className="comment-form__input--user"
          required
          minLength="3"
          maxLength="20"
          onChange={this.handleUserChange}
        />
        <label htmlFor="commentText">Comment</label>
        <textarea
          id="commentText"
          className="comment-form__input--text"
          onChange={this.handleCommentChange}
          required
          minLength="2"
          maxLength="150"
        />
        <input type="submit" value="Send" />
      </form>
    )
  }

  handleUserChange = (ev) => this.setState({ user: ev.target.value })

  handleCommentChange = (ev) => this.setState({ text: ev.target.value })

  handleSubmitComment = (ev) => {
    ev.preventDefault()
    this.props.addComment(this.state)
    ev.target.reset()
    this.setState({
      user: '',
      text: ''
    })
  }
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm)
