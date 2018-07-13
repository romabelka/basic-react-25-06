import {ADD_ARTICLE_COMMENT, DELETE_ARTICLE} from '../constants'
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

    case ADD_ARTICLE_COMMENT: {
      return { ...articlesState, [action.payload.articleId]: {
          ...articlesState[action.payload.articleId],
          comments: [...articlesState[action.payload.articleId].comments, action.payload.id]
        } }
    }

    default:
      return articlesState
  }
}
