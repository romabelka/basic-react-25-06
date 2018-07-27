import React, { Component } from 'react'
import PropTypes from 'prop-types'
import locales from '../../locales'
import { Provider } from './context'

class TranslateProvider extends Component {
  static propTypes = {
    lang: PropTypes.string
  }

  render() {
    return (
      <Provider value={locales[this.props.lang]}>
        {this.props.children}
      </Provider>
    )
  }
}

export default TranslateProvider
