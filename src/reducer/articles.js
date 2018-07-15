import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
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
    case ADD_COMMENT:
      const x = {
        ...articlesState
      }
      x[payload.articleId].comments
        ? x[payload.articleId].comments.push(payload.id)
        : (x[payload.articleId].comments = [payload.id])
      return x

    default:
      return articlesState
  }
}
