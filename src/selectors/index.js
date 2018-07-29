import { createSelector } from 'reselect'

export const filtersSelector = (state) => state.filters
export const articlesLoadingSelector = (state) => state.articles.loading
export const articlesLoadedSelector = (state) => state.articles.loaded
export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  (state) => state.articles.list,
  (articlesMap) => articlesMap.valueSeq().toArray()
)
export const commentsSelector = (state) => state.comments.entities
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

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) =>
    comments.get(id)
  )

export const articleSelector = createSelector(
  articlesMapSelector,
  idSelector,
  (articles, id) => articles.get(id)
)

export const totalCommentsSelector = (state) => state.comments.total
export const commentsPagenationSelector = (state) => state.comments.pagination
export const pageSelector = (_, props) => props.page
export const commentsPageIdsSelector = createSelector(
  commentsPagenationSelector,
  pageSelector,
  (pagination, page) => pagination.getIn([page, 'ids'])
)
export const commentsPageLoadingSelector = createSelector(
  commentsPagenationSelector,
  pageSelector,
  (pagination, page) => pagination.getIn([page, 'loading'])
)
