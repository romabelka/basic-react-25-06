import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    state = {
      isOpen: null
    }

    toggleOpen = () =>
      this.setState({
        isOpen: !this.state.isOpen
      })

    render() {
      const body = this.state.isOpen ? (
        <OriginalComponent {...this.props} />
      ) : null
      return (
        <div>
          <button onClick={this.toggleOpen}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
          {body}
        </div>
      )
    }
  }
