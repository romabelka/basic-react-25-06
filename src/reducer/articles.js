import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

const articlesDefault = normalizedArticles.reduce((prev, articles) => {
  return {
    ...prev,
    [articles.id]: articles
  }
}, {})

export default (articlesState = articlesDefault, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      delete articlesState[payload.id]
      return articlesState

    default:
      return articlesState
  }
}
