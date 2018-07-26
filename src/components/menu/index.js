import React, { Component } from 'react'
import MenuItem from './menu-item'

class MainMenu extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2>Main menu:</h2>
        {this.props.children}
      </div>
    )
  }
}

export default MainMenu
export { MenuItem }
