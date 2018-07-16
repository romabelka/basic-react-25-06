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
      const updArticles = { ...articlesState }
      delete updArticles[payload.id]

      return updArticles

    case ADD_COMMENT:
      const article = articlesState[payload.articleId]
      return {
        ...articlesState,
        [payload.articleId]: {
          ...article,
          comments: [...article.comments, payload.comment.id]
        }
      }

    default:
      return articlesState
  }
}
