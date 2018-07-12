import { DELETE_ARTICLE, SET_FILTERS } from '../constants'
import articles from '../fixtures'

export default (articlesState = articles, action) => {
  const { type, payload } = action
  console.log('---', action)
  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case SET_FILTERS:
      return articles.filter((article) => {
        let matchDate
        let matchFrom =
          payload.from && new Date(article.date) > new Date(payload.from)
        let matchTo =
          payload.to && new Date(article.date) < new Date(payload.to)
        let matchId =
          payload.selected &&
          payload.selected.some((item) => item.value === article.id)

        matchDate =
          payload.from && payload.to ? matchFrom && matchTo : matchFrom

        return matchDate || matchId
      })

    default:
      return articlesState
  }
}
