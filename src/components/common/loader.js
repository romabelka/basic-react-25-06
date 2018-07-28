import React from 'react'
import i18n from '../../decorators/i18n'

function Loader({ translate }) {
  return <h3>{translate('loading')}</h3>
}

Loader.propTypes = {}

export default i18n(Loader)
