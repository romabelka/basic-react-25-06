import { SET_DATE_RANGE, SET_SELECT_VALUE, DELETE_ARTICLE } from '../constants'

const initialState = {
  dateRange: {
    from: null,
    to: null
  },
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

    case SET_SELECT_VALUE:
      return {
        ...state,
        selectValue: payload
      }

    case DELETE_ARTICLE:
      return {
        ...state,
        selectValue: state.selectValue.filter(
          ({ value }) => value !== payload.id
        )
      }

    default:
      return state
  }
}
