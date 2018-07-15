import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrToObject } from '../util'
export default (articles = arrToObject(normalizedArticles), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      const articlesClone = { ...articles }
      delete articlesClone[payload.id]
      return articlesClone
    case ADD_COMMENT:
      const article = articles[payload.articleId]
      return {
        ...articles,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }
    default:
      return articles
  }
}
