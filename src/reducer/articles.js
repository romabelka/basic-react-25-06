import {
  DELETE_ARTICLE,
  SELECT_ARTICLES,
  FILTER_ARTICLES_BY_DATERANGE
} from '../constants'
import articles from '../fixtures'

function applyFilter(articlesState) {
  var filter = (article) => {
    var date = new Date(article.date)
    var byDate =
      (!articlesState.dateRange.from || date >= articlesState.dateRange.from) &&
      (!articlesState.dateRange.to || date <= articlesState.dateRange.to)
    var bySelected =
      articlesState.selected.length === 0 ||
      articlesState.selected.map((a) => a.id).includes(article.id)
    return byDate && bySelected
  }

  var result = { ...articlesState }
  result.actual = articlesState.available.filter(filter)
  return result
}

export default (
  articlesState = {
    available: articles,
    selected: [],
    actual: articles,
    dateRange: { from: null, to: null }
  },
  action
) => {
  const { type, payload } = action
  console.log('---', action)

  switch (type) {
    case DELETE_ARTICLE: {
      var filter = (article) => article.id !== payload.id
      return applyFilter({
        available: articlesState.available.filter(filter),
        selected: articlesState.selected.filter(filter),
        dateRange: articlesState.dateRange
      })
    }
    case SELECT_ARTICLES: {
      var filter = (article) => payload.includes(article.id)
      return applyFilter({
        available: articlesState.available,
        selected: articlesState.available.filter(filter),
        dateRange: articlesState.dateRange
      })
    }
    case FILTER_ARTICLES_BY_DATERANGE: {
      return applyFilter({
        available: articlesState.available,
        selected: articlesState.selected,
        dateRange: payload
      })
    }
    default:
      return articlesState
  }
}
