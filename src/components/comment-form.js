import React, { Component } from 'react'

const fieldNames = {
  user: 'user',
  comment: 'comment'
}

export default class CommentForm extends Component {
  state = {
    [fieldNames.user]: '',
    [fieldNames.comment]: ''
  }

  render() {
    const { user, comment } = this.state

    return (
      <form onSubmit={this.handleSubmitFrom}>
        <div>
          <input
            name={fieldNames.user}
            placeholder="user"
            value={user}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea
            name={fieldNames.comment}
            value={comment}
            onChange={this.handleChange}
          />
        </div>
        <button>Add</button>
      </form>
    )
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmitFrom = (event) => {
    event.preventDefault()
    const errors = Object.keys(this.state).filter(
      (key) => this.state[key].trim() === ''
    )

    if (errors.length) {
      alert(`Please, fill the fields:\n - ${errors.join('\n - ')}`)
    }
  }
}
