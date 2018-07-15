import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE: {
      const newState = Object.assign({}, articlesState)
      delete newState[payload.id]

      return newState
    }

    case ADD_COMMENT: {
      const newState = Object.assign({}, articlesState)
      const comments = articlesState[payload.commentsToEntityId].comments || []

      newState[payload.commentsToEntityId].comments = [...comments, payload.id]

      return newState
    }

    default:
      return articlesState
  }
}
