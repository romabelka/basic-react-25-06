import { DELETE_ARTICLE, FILTER_ARTICLE } from '../constants'
import articles from '../fixtures'

export default (articlesState = articles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case FILTER_ARTICLE:
      return articles
        .filter((article) => {
          return payload.selected.length
            ? payload.selected
                .map((article) => article.value)
                .includes(article.id)
            : true
        })
        .filter((article) => {
          return (
            (!payload.from || Date.parse(article.date) > payload.from) &&
            (!payload.to || Date.parse(article.date) < payload.to)
          )
        })
    default:
      return articlesState
  }
}
