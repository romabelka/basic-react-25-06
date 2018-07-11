import { DELETE_ARTICLE, SELECT_ARTICLES } from '../constants'
import articles from '../fixtures'

function getActual(articles) {
  return articles.selected.length === 0 ? articles.available : articles.selected
}

function apply(articles) {
  return {
    available: articles.available,
    selected: articles.selected,
    actual: getActual(articles)
  }
}

export default (
  articlesState = { available: articles, selected: [] },
  action
) => {
  const { type, payload } = action
  console.log('---', action)
  switch (type) {
    case DELETE_ARTICLE:
      var filter = (article) => article.id !== payload.id
      return apply({
        available: articlesState.available.filter(filter),
        selected: articlesState.selected.filter(filter)
      })
    case SELECT_ARTICLES:
      var filter = (article) => payload.includes(article.id)
      return apply({
        available: articlesState.available,
        selected: articlesState.available.filter(filter)
      })
    default:
      return apply(articlesState)
  }
}
