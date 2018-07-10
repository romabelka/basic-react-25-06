import { SET_DATE } from '../constants'

export default (dateRangeState = { from: null, to: null }, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_DATE:
      return payload.range
    default:
      return dateRangeState
  }
}
