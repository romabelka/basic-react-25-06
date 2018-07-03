import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isElemOpen: false
    }

    toggle = (isElemOpen) => this.setState({ isElemOpen })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggle={this.toggle}
        />
      )
    }
  }
