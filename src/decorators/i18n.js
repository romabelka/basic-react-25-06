import React, { Component } from 'react'
import { Consumer } from '../contexts/i18n'

export default (OriginalComponent) =>
  class Translate extends Component {
    render() {
      return (
        <Consumer>
          {(labels) => (
            <OriginalComponent
              {...this.props}
              translate={this.getLabel(labels)}
            />
          )}
        </Consumer>
      )
    }

    getLabel = (labels) => (text) => labels[text] || `No Label for:${text}`
  }
