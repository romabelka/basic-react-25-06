import { INCREMENT, DELETE_ARTICLE, SET_FILTERS } from '../constants'

export function increment() {
  return { type: INCREMENT }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function setFilters(filters) {
  return {
    type: SET_FILTERS,
    payload: filters
  }
}
