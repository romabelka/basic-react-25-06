import React, { Component } from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      isCollapsed: false
    }

    toggleCollapse = () =>
      this.setState({
        isCollapsed: !this.state.isCollapsed
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleCollapse={this.toggleCollapse}
        />
      )
    }
  }
