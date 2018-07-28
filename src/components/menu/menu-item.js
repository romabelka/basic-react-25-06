import React from 'react'
import { NavLink } from 'react-router-dom'
import i18n from '../../decorators/i18n'

function MenuItem({ children, translate, ...rest }) {
  return (
    <div>
      <NavLink {...rest} activeStyle={{ color: 'red' }}>
        {translate(children)}
      </NavLink>
    </div>
  )
}

MenuItem.propTypes = {}

export default i18n(MenuItem)
