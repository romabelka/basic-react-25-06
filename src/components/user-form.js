import React, { Component } from 'react'

class UserForm extends Component {
  state = {
    user: ''
  }
  render() {
    return (
      <form className="navbar-form">
        Username: <input value={this.state.user} onChange={this.handleChange} />
      </form>
    )
  }

  handleChange = (ev) => {
    ev.preventDefault()

    if (ev.target.value.length > 10)
      return this.setState({
        user: ''
      })

    this.setState({
      user: ev.target.value
    })
  }
}

export default UserForm
