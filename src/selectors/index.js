import { createSelector } from 'reselect'
import { COMMENTS_PER_PAGE_COUNT } from '../constants'

export const filtersSelector = (state) => state.filters
export const articlesLoadingSelector = (state) => state.articles.loading
export const articlesLoadedSelector = (state) => state.articles.loaded
export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)
export const commentsSelector = (state) => state.comments.entities
export const articleCommentsLoading = (state, articleId) =>
  state.comments.loadingArticles.includes(articleId)
export const articleCommentsLoaded = (state, articleId) =>
  state.comments.loadedArticles.includes(articleId)
export const pageCommentsLoading = (state, pageNumber) =>
  state.comments.loadingPages.includes(pageNumber)
export const pageCommentsLoaded = (state, pageNumber) =>
  state.comments.loadedPages.includes(pageNumber)
export const totalCommentsCount = (state) => state.comments.total
export const commentsPagesCount = (state) => {
  const total = totalCommentsCount(state)
  const pagesCount =
    total % COMMENTS_PER_PAGE_COUNT > 0
      ? (total - (total % COMMENTS_PER_PAGE_COUNT)) / COMMENTS_PER_PAGE_COUNT +
        1
      : total / COMMENTS_PER_PAGE_COUNT
  return pagesCount
}

export const commentsPerPageSelector = (state, page) => {
  const pageComments = state.comments.pageComments.get(page)
  if (pageComments) {
    return state.comments.entities
      .filter((c) => pageComments.comments.includes(c.id))
      .valueSeq()
      .toArray()
  }

  return []
}
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
