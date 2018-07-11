import { INCREMENT, DELETE_ARTICLE, SET_DATE, SELECT } from '../constants'

export function increment() {
  return { type: INCREMENT }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function setDate(range) {
  return {
    type: SET_DATE,
    payload: { range }
  }
}

export function select(selected) {
  return {
    type: SELECT,
    payload: { selected }
  }
}
