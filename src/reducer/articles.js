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
      var articles = { ...articlesState }
      delete articles[payload.id]
      return articles

    default:
      return articlesState
  }
}
