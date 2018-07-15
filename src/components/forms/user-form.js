import React, { Component } from 'react'
import { userNameSelector } from '../../selectors'
import { login } from '../../ac'
import { connect } from 'react-redux'

class UserForm extends Component {
  state = {
    user: ''
  }

  render() {
    return <div>Username: {this.getBody()}</div>
  }

  getBody() {
    if (this.props.userName && this.props.userName.length > 0) {
      return <span>{this.props.userName}</span>
    } else {
      return (
        <div>
          <input value={this.state.user} onChange={this.handleChange} />
          <button onClick={this.userLoginClick}>Login</button>
        </div>
      )
    }
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

  userLoginClick = () => {
    this.props.login(this.state.user)
  }
}

export default connect(
  (state) => ({
    userName: userNameSelector(state)
  }),
  { login }
)(UserForm)
