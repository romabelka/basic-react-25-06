import React, { Component } from 'react'
import i18n from './i18n'

class UserForm extends Component {
  render() {
    const { t } = this.props

    return (
      <div>
        {t('Username')}:{' '}
        <input value={this.props.value} onChange={this.handleChange} />
      </div>
    )
  }

  handleChange = (ev) => {
    ev.preventDefault()
    this.props.onChange(ev.target.value)
  }
}

export default i18n(UserForm)
