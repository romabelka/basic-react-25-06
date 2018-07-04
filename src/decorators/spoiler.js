//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: false
    }

    toggleView = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggle={this.toggleView}
        />
      )
    }
  }
