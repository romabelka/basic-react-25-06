import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac'

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isValid: true
    }

    this.name = React.createRef()
    this.comment = React.createRef()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.name} placeholder="Автор" name="name" />
        <br />
        <textarea
          ref={this.comment}
          placeholder="Комментарий..."
          name="comment"
        />
        {!this.state.isValid ? <span>Заполните все поля</span> : null}
        <button>Добавить</button>
      </form>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let comment = {
      user: this.name.current.value,
      text: this.comment.current.value,
      articleId: this.props.articleId
    }

    if (this.name.current.value === '' || this.comment.current.value === '') {
      this.setState({ isValid: false })
      return
    }

    this.setState({ isValid: true })
    this.props.addComment(comment)

    this.name.current.value = ''
    this.comment.current.value = ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CommentForm)
