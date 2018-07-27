import React, { Component } from 'react'
import MenuItem from './menu-item'
import i18n from '../i18n'

class MainMenu extends Component {
  static propTypes = {}

  render() {
    const { t } = this.props

    return (
      <div>
        <h2>{t('Main menu')}:</h2>
        {this.props.children}
      </div>
    )
  }
}

export default i18n(MainMenu)
export { MenuItem }
