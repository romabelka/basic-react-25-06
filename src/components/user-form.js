import React, { Component } from 'react'
import localized from '../decorators/localized'

class UserForm extends Component {
  render() {
    const { local } = this.props
    return (
      <div>
        {local.user.form.name}{' '}
        <input value={this.props.value} onChange={this.handleChange} />
      </div>
    )
  }

  handleChange = (ev) => {
    ev.preventDefault()
    this.props.onChange(ev.target.value)
  }
}

export default localized(UserForm)
