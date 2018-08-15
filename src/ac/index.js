import * as Constants from '../constants'

export function increment() {
  return { type: Constants.INCREMENT }
}

export function deleteArticle(id) {
  return {
    type: Constants.DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeDate(date) {
  return {
    type: Constants.CHANGE_DATES,
    payload: { date }
  }
}

export function changeSelect(selected) {
  return {
    type: Constants.CHANGE_SELECT,
    payload: { selected }
  }
}
