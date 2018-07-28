import React from 'react'
import i18n from '../../decorators/i18n'

function LanguageSelector({ changeLang, translate }) {
  return (
    <ul>
      <li>
        <a href="" onClick={changeLang('en')}>
          {translate('en')}
        </a>
      </li>
      <li>
        <a href="" onClick={changeLang('ru')}>
          {translate('ru')}
        </a>
      </li>
    </ul>
  )
}

export default i18n(LanguageSelector)
