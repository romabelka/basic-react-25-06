import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_ARTICLES_BY_NAME,
  FILTER_ARTICLES_BY_DATE
} from '../constants'

export function increment() {
  return { type: INCREMENT }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterArticlesByName(selectedValues) {
  return {
    type: FILTER_ARTICLES_BY_NAME,
    payload: { selectedValues }
  }
}

export function filterArticlesByDate(dateRange) {
  return {
    type: FILTER_ARTICLES_BY_DATE,
    payload: { dateRange }
  }
}
