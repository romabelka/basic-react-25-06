import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articlesState = normalizedArticles, action) => {
  const { type, payload, id: commentId } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case ADD_COMMENT:
      articlesState
        .find((article) => article.id === payload.articleId)
        .comments.push(commentId)
      return articlesState

    default:
      return articlesState
  }
}
