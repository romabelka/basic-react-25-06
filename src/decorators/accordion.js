//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) =>
      this.setState((prevState) => {
        return {
          openItemId: prevState.openItemId === openItemId ? null : openItemId
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
