import React, { Component } from 'react'
import localized from '../../decorators/localized'

class Loader extends Component {
  render() {
    const { local } = this.props
    return <h3>{local.loader.loading}</h3>
  }
}

Loader.propTypes = {}

export default localized(Loader)
