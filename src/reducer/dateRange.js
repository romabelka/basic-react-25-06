import { UPDATE_ARTICLE_DATE_RANGE } from '../constants'

export default (dateRange = { from: null, to: null }, action) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_ARTICLE_DATE_RANGE:
      var { from = dateRange.from, to = dateRange.to } = payload

      return { from, to }
    default:
      return dateRange
  }
}
