//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class collapsibleList extends React.Component {
    state = {
      openList: false
    }

    toggleList = () => {
      this.setState({ openList: !this.state.openList })
    }

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
