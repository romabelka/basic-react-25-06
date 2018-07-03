//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: false
    }

    toggleList = (isOpen) => this.setState({ isOpen })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleList={this.toggleList}
        />
      )
    }
  }
