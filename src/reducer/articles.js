import { DELETE_ARTICLE } from '../constants'
import {normalizedArticles } from '../fixtures'

function toDic(arr) {
  return arr.reduce(
    (acc, article) => ({
      ...acc,
      [article.id]: article
    }),
    {}
  )
}

const defaultArticles = toDic(normalizedArticles)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      delete articlesState[payload.id]
      return articlesState

    default:
      return articlesState
  }
}
