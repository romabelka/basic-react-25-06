import {
  INCREMENT,
  DELETE_ARTICLE,
  SET_DATE_RANGE,
  SET_SELECT_VALUE
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

/**
 * Устанавливает диапазон даты
 * @param {object} range - диапазон даты.
 * @param {string|null} range.from - дата "от".
 * @param {string|null} range.to - дата "до".
 * @returns {object} action
 */
export function setDateRange(range) {
  return {
    type: SET_DATE_RANGE,
    payload: range
  }
}

/**
 * Устанавливает значение селекта
 * @param {array} value - значение.
 * @returns {object} action
 */
export function setSelectValue(value) {
  return {
    type: SET_SELECT_VALUE,
    payload: value
  }
}
