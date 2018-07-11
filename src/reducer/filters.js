import { CHOSE_DATE } from '../constants'
import { CHOSE_ARTICLES } from '../constants'
import { DateUtils } from 'react-day-picker'

let filtersInit = {
  selected: [],
  date: {
    from: null,
    to: null
  }
}

export default (filters = filtersInit, action) => {
  const { type, payload } = action
  switch (type) {
    case CHOSE_DATE: {
      return {
        selected: filters.selected,
        date: DateUtils.addDayToRange(payload.day, filters.date)
      }
    }
    case CHOSE_ARTICLES: {
      return {
        selected: payload.selected,
        date: filters.date
      }
    }
    default:
      return filters
  }
}
