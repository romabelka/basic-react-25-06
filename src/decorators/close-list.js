//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isCommentsOpen: false
    }

    toggleOpenComments = (isCommentsOpen) =>
      this.setState({
        isCommentsOpen: !isCommentsOpen
      })

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenComments={this.toggleOpenComments}
        />
      )
    }
  }
