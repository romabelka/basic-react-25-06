import { SET_DATE_RANGE, SET_SELECT_OPTIONS } from '../constants'
import articles from '../fixtures'

const selectOptions = articles.map(({ title, id }) => ({
  label: title,
  value: id
}))

const initialState = {
  dateRange: {
    from: null,
    to: null
  },
  selectOptions,
  selectValue: []
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DATE_RANGE:
      return {
        ...state,
        dateRange: payload
      }

    case SET_SELECT_OPTIONS:
      return {
        ...state,
        selectValue: payload
      }

    default:
      return state
  }
}
