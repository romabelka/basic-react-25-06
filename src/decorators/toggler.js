import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: false
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {
      const { isOpen } = this.state
      return (
        <div>
          <OriginalComponent
            {...this.props}
            {...this.state}
            toggle={this.toggle}
            isOpen={isOpen}
          />
        </div>
      )
    }
  }
