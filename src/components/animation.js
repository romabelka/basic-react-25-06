import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'

export class Animation extends Component {
  static propTypes = {
    disableAnimation: PropTypes.bool
  }

  render() {
    const { disableAnimation } = this.props
    const props = { ...this.props }

    delete props.disableAnimation

    if (disableAnimation) {
      return this.props.children
    }

    return <CSSTransition {...props}>{this.props.children}</CSSTransition>
  }
}

export default Animation
