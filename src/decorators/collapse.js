import React from 'react'

export default (OriginalComponent) =>
  class CollapseComponent extends React.Component {
    state = {
      isCollapse: false
    }

    toggleOpenItem = (isCollapse) => this.setState({ isCollapse })

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
