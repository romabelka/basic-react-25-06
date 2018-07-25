import { SUCCESS, START, LOAD_DATA } from '../constants'
const defaultData = {}

export default (state = defaultData, action) => {
  const { type, payload, page } = action

  switch (type) {
    case LOAD_DATA + START:
      return {
        ...state,
        [page]: {
          records: [],
          total: null,
          loading: true,
          loaded: false
        }
      }

    case LOAD_DATA + SUCCESS:
      return {
        ...state,
        [page]: {
          records: payload.records,
          total: payload.total,
          loading: false,
          loaded: true
        }
      }

    default:
      return state
  }
}
