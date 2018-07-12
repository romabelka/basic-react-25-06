import { SET_FILTERS } from '../constants'

export default (filtersState = {}, filters) => {
  const { type, payload } = filters

  switch (type) {
    case SET_FILTERS:
      return Object.assign({}, payload)

    default:
      return filtersState
  }
}
