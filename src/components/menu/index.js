import React, { Component } from 'react'
import MenuItem from './menu-item'
import i18n from '../../decorators/i18n'

class MainMenu extends Component {
  static propTypes = {}

  render() {
    const { translate } = this.props
    return (
      <div>
        <h2>{translate('main_menu')}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default i18n(MainMenu)
export { MenuItem }
