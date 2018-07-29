import React, { Component } from 'react'
import Menu, { MenuItem } from '.'
import localized from '../../decorators/localized'

class AppMenu extends Component {
  render() {
    const { local } = this.props
    return (
      <Menu>
        <MenuItem to="/articles">{local.menu.articles}</MenuItem>
        <MenuItem to="/comments">{local.menu.comments}</MenuItem>
        <MenuItem to="/filters">{local.menu.filters}</MenuItem>
        <MenuItem to="/counter">{local.menu.counter}</MenuItem>
      </Menu>
    )
  }
}

export default localized(AppMenu)
