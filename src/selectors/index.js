import { createSelector } from 'reselect'

export const filtersSelector = (state) => state.filters
export const articleListSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const idSelector = (_, props) => props.id

export const filtratedArticlesSelector = createSelector(
  articleListSelector,
  filtersSelector,
  (articles, filters) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters
    const filteredArticles = Object.values(articles)
      .filter((article) => (article) => {
        const published = Date.parse(article.date)
        return (
          (!selected.length ||
            selected.find((selected) => selected.value === article.id)) &&
          (!from || !to || (published > from && published < to))
        )
      })
      .reduce(
        (acc, article) => ({
          ...acc,
          [article.id]: article
        }),
        {}
      )

    console.log(filteredArticles)

    return filteredArticles

    // return articles.filter((article) => {
    //   const published = Date.parse(article.date)
    //   return (
    //     (!selected.length ||
    //       selected.find((selected) => selected.value === article.id)) &&
    //     (!from || !to || (published > from && published < to))
    //   )
    // })
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
  })
