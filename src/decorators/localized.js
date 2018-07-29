import React from 'react'
import { Consumer as LocalizationConsumer } from '../contexts/localization'

export default (OriginalComponent) =>
  class LocalizedComponent extends React.Component {
    render() {
      return (
        <LocalizationConsumer>
          {(local) => (
            <OriginalComponent {...this.props} {...this.state} local={local} />
          )}
        </LocalizationConsumer>
      )
    }
  }
