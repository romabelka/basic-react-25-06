import { FILTER_ARTICLES_BY_DATE } from '../constants'
export default (dateRange = {}, action) => {
  const { type, payload } = action
  console.log('--- DATE_RANGE REDUCER', action)
  switch (type) {
    case FILTER_ARTICLES_BY_DATE:
      return payload.dateRange
    default:
      return dateRange
  }
}
