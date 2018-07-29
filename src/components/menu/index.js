import React, { Component } from 'react'
import MenuItem from './menu-item'
import localized from '../../decorators/localized'

class MenuTitle extends Component {
  render() {
    const { local } = this.props
    return <h2>{local.menu.mainMenu}</h2>
  }
}

const LocalizedMenuTitle = localized(MenuTitle)

class MainMenu extends Component {
  render() {
    return (
      <div>
        <LocalizedMenuTitle />
        {this.props.children}
      </div>
    )
  }
}

export default MainMenu
export { MenuItem }
