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

    return Object.keys(articles).reduce(function (filtered, key) {
      const article = articles[key]
      const published = Date.parse(article.date)
      const succeed =  (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )

      if (succeed)
        filtered[key] = article

      return filtered;
    }, {});
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'comment selector', id)
    return comments[id]
  })
