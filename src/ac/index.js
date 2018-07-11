import {
  INCREMENT,
  DELETE_ARTICLE,
  SELECT_FILTER_ARTICLE,
  DATE_FILTER_ARTICLE
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

export function selectFilterArticle(selected) {
  return {
    type: SELECT_FILTER_ARTICLE,
    payload: selected
  }
}

export function dateFilterArticle(range) {
  return {
    type: DATE_FILTER_ARTICLE,
    payload: range
  }
}
