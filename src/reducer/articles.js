import { DELETE_ARTICLE } from '../constants'
import { FILTER_ARTICLES_BY_NAME } from '../constants'
import articles from '../fixtures'

export default (
  articlesState = { initialArticles: articles, articleList: articles },
  action
) => {
  const { type, payload } = action
  const { initialArticles, articleList } = articlesState
  console.log('---', action)
  switch (type) {
    case DELETE_ARTICLE:
      return {
        initialArticles: articles,
        articleList: articleList.filter((article) => article.id !== payload.id)
      }
    case FILTER_ARTICLES_BY_NAME:
      if (payload.selectedValues && payload.selectedValues.length > 0) {
        console.log(payload.selectedValues.length)
        let filteredArticles = initialArticles.filter((article) => {
          let found = false
          payload.selectedValues.forEach((selectedArticle) => {
            if (selectedArticle.value === article.id) {
              found = true
              return
            }
          })

          return found
        })
        return { initialArticles: articles, articleList: filteredArticles }
      } else {
        return { initialArticles: articles, articleList: articles }
      }
    default:
      return articlesState
  }
}
