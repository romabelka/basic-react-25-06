//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItem: null
    }

    toggleOpenItem = (openItem) =>
      this.setState((prevState) => {
        return {
          openItem: prevState.openItem === openItem ? null : openItem
        }
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
