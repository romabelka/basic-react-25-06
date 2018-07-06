import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
  state = {
    user: ''
  }

  static propTypes = {
    user: PropTypes.string
  }

  render() {
    return (
      <div>
        Username: <input value={this.state.user} onChange={this.handleChange} />
      </div>
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
