import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Pagination(props) {
  const { totalEntities, limit } = props
  const pagesCount = Math.ceil(totalEntities / limit)
  const pages = []

  for (let i = 0; i < pagesCount; i++) {
    const pageNumber = i + 1
    const linkTo = `/comments/${pageNumber}`

    pages.push(
      <NavLink to={linkTo} activeStyle={{ color: 'green' }} key={linkTo}>
        {pageNumber}
      </NavLink>
    )
  }

  return <ul>{pages}</ul>
}
