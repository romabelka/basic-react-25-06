import {
  INCREMENT,
  DELETE_ARTICLE,
  SET_DATE_RANGE,
  SET_SELECT_OPTIONS
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
 * Устанавливает опции селекта
 * @param {array} options - опции.
 * @returns {object} action
 */
export function setSelectOptions(options) {
  return {
    type: SET_SELECT_OPTIONS,
    payload: options
  }
}
