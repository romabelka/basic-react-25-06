import {
  INCREMENT,
  DELETE_ARTICLE,
  SELECT_ARTICLES,
  FILTER_ARTICLES_BY_DATERANGE,
  UPDATE_ARTICLE_DATE_RANGE
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

export function selectDate(dateRange) {
  return {
    type: UPDATE_ARTICLE_DATE_RANGE,
    payload: dateRange
  }
}

export function selectArticles(selected) {
  return {
    type: SELECT_ARTICLES,
    payload: selected
  }
}

export function filterArticlesByDateRange(dateRange) {
  return {
    type: FILTER_ARTICLES_BY_DATERANGE,
    payload: dateRange
  }
}
