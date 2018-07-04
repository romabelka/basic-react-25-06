//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class Toggler extends React.Component {
    state = {
      opened: false
    }

    toggle = () =>
      this.setState({
        opened: !this.state.opened
      })

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
