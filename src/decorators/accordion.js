//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent, target) =>
  class DecoratedComponent extends React.Component {
    constructor(...args) {
      super(...args)
      this.state = {}
      this.state[`open${target}Id`] = null
    }

    toggleOpenItem = (openItemId) => {
      const state = {}
      state[`open${target}Id`] =
        this.state[`open${target}Id`] !== openItemId ? openItemId : null
      this.setState(state)
    }

    render() {
      let props = { ...this.props }
      props[`toggleOpen${target}`] = this.toggleOpenItem

      return <OriginalComponent {...props} {...this.state} />
    }
  }
