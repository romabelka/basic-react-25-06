import {
  INCREMENT,
  DELETE_ARTICLE,
  CHOSE_DATE,
  CHOSE_ARTICLES
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

export function changeDate(day) {
  return {
    type: CHOSE_DATE,
    payload: { day }
  }
}

export function changeSelectedArticles(selected) {
  return {
    type: CHOSE_ARTICLES,
    payload: { selected }
  }
}
