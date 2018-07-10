import { CHANGE_FILTERS } from '../constants'

const emptyFilters = {
  selectedArticles: [],
  from: null,
  to: null
}

export default (filters = emptyFilters, action) => {
  const { type, payload } = action
  console.log(filters)

  switch (type) {
    case CHANGE_FILTERS:
      return Object.assign({}, filters, payload.change)

    default:
      return filters
  }
}
