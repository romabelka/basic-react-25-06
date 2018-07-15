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

    case ADD_COMMENT:
      const { commentId, articleId } = payload
      return Object.values(articlesState)
        .map((article) => {
          if (article.id === articleId && commentId) {
            article.comments.push(commentId)
            return JSON.parse(JSON.stringify(article))
          }
          return article
        })
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
