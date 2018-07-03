//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      expanded: false
    }

    toggleCollapsibility = () => {
      this.setState({expanded: !this.state.expanded})
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleCollapsibility={this.toggleCollapsibility}
        />
      )
    }
  }
