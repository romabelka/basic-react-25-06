import React, { Component } from 'react'
import RangeDaypicker from './range-daypicker'

class UserForm extends Component {
  state = {
    user: ''
  }
  render() {
    return (
      <div>
        Username: <input value={this.state.user} onChange={this.handleChange} />
        <RangeDaypicker />
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
