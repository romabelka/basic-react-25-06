import React, { Component } from 'react'

class UserForm extends Component {
  render() {
    return (
      <div>
        Username:{' '}
        <input value={this.props.value} onChange={this.handleChange} />
      </div>
    )
  }

  handleChange = (ev) => {
    ev.preventDefault()
    this.props.onChange(ev.target.value)
  }
}

export default UserForm
