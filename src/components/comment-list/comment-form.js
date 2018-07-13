import React, { Component } from 'react'
import { addComment } from "../../ac";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        Comment: <input ref='input'/>
        <button onClick={this.onAddComment}>
          Send
        </button>
      </div>
    )
  }

  onAddComment = (ev) => {
    ev.preventDefault()
    let { addComment, articleId } = this.props
    const commentText = this.refs.input.value
    addComment({articleId, commentText})
    this.refs.input.value = null
  }
}

export default connect(null,
  { addComment }
)(CommentForm)
