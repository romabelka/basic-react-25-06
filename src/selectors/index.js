import { createSelector } from 'reselect'

export const filtersSelector = (state) => state.filters
export const articleListSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const idSelector = (_, props) => props.id

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
  filtersSelector,
  (articles, filters) => {
    console.log('---', 'articles selector')
    const {
      selected,
      dateRange: { from, to }
    } = filters
    const articlesId = Object.keys(articles)

    return articlesId.filter((article) => {
      const published = Date.parse(articles[article].date)
      return (
        (!selected.length ||
          selected.find(
            (selected) => selected.value === articles[article].id
          )) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'comment selector', id)
    return comments[id]
  })
export const articleSelector = createSelector(
  articleListSelector,
  idSelector,
  (articles, id) => articles[id]
)
