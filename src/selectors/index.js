import { createSelector } from 'reselect'
import { EmptyComments } from '../constants'

export const filtersSelector = (state) => state.filters
export const articlesLoadingSelector = (state) => state.articles.loading
export const articlesLoadedSelector = (state) => state.articles.loaded
export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)
const articleCommentsSelector = (state, articleId) =>
  state.comments.entities.get(articleId)
export const commentSelector = (state, articleId, id) => {
  const article = articleCommentsSelector(state, articleId)
  if (article) {
    return article.comments.get(id)
  }
  return null
}
export const commentsLoadingSelector = (state, articleId) => {
  const article = articleCommentsSelector(state, articleId)
  return article && article.loading
}
export const commentsLoadedSelector = (state, articleId) => {
  const article = articleCommentsSelector(state, articleId)
  return article && article.loaded
}

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
  filtersSelector,
  (articles, filters) => {
    console.log('---', 'articles selector')
    const {
      selected,
      dateRange: { from, to }
    } = filters

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)
