import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: false
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleComments={this.toggleComments}
        />
      )
    }

    toggleComments = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }
