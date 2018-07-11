import {
  DELETE_ARTICLE,
  SELECT_FILTER_ARTICLE,
  DATE_FILTER_ARTICLE
} from '../constants'
import articles from '../fixtures'

export default (
  articlesState = {
    origin: articles, // это нормально, или лучше принимать в компоненте отделельно fixtures?
    filtred: articles
  },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case DELETE_ARTICLE:
      return {
        origin: articlesState.origin.filter(
          (article) => article.id !== payload.id
        ),
        filtred: articlesState.filtred.filter(
          (article) => article.id !== payload.id
        )
      }

    case SELECT_FILTER_ARTICLE:
      return {
        origin: articlesState.origin,
        filtred: articlesState.origin.filter((article) => {
          let x = false
          for (let i = 0; i < payload.length; i++) {
            if (article.id === payload[i].value) x = true
          }
          if (x) return true
          return false
        })
      }

    case DATE_FILTER_ARTICLE:
      if (payload.to !== null && payload.from !== null) {
        return {
          origin: articlesState.origin,
          filtred: articlesState.filtred.filter((article) => {
            return (
              +new Date(article.date) >= +new Date(payload.from) &&
              +new Date(article.date) <= +new Date(payload.to)
            )
          })
        }
      } else {
        return {
          origin: articlesState.origin,
          filtred: articlesState.filtred
        }
      }

    default:
      return articlesState
  }
}
