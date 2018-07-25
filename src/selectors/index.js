import { createSelector } from 'reselect'

export const filtersSelector = (state) => state.filters
export const articlesLoadingSelector = (state) => state.articles.loading
export const articlesLoadedSelector = (state) => state.articles.loaded
export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)
export const commentsSelector = (state) => state.comments.entities
export const commentsTotalEntitiesSelector = (state) =>
  state.comments.totalEntities

export const commentsPageMapSelector = (state) => state.comments.pages
export const commentsPageIdSelector = (_, props) => props.page
export const commentsPageSelector = createSelector(
  commentsPageMapSelector,
  commentsPageIdSelector,
  (commentsMap, page) => {
    try {
      return commentsMap
        .getIn([page, 'comments'])
        .valueSeq()
        .toJS()
    } catch (error) {}
  }
)

export const commentsPageLoadedSelector = createSelector(
  commentsPageMapSelector,
  commentsPageIdSelector,
  (commentsMap, page) => {
    try {
      console.log(commentsMap.getIn([page, 'loaded']))
      return commentsMap.getIn([page, 'loaded'])
    } catch (error) {}
  }
)

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
