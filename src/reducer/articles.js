import { DELETE_ARTICLE, FILTER_ARTICLE_SELECT } from '../constants'
import articles from '../fixtures'

export default (articlesState = articles, action) => {
  const { type, payload } = action
  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)
      break

    case FILTER_ARTICLE_SELECT:
      const x = articles.filter((article, i) => {
        let x = 0
        for (let i = 0; i < payload.length; i++) {
          if (article.id === payload[i].value) x = 1
        }
        if (x) return true
      })
      return x
      break

    default:
      return articlesState
  }
}
