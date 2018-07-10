import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE } from '../constants'

export function increment() {
  return { type: INCREMENT }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterArticle(selected, from, to) {
  return {
    type: FILTER_ARTICLE,
    payload: { selected, from, to }
  }
}
