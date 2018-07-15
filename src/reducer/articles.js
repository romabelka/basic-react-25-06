import { DELETE_ARTICLE } from '../constants'
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
    case DELETE_ARTICLE:
      return Object.values(articlesState)
        .filter((article) => article.id !== payload.id)
        .reduce(
          (acc, article) => ({
            ...acc,
            [article.id]: article
          }),
          {}
        )

    default:
      return articlesState
  }
}
