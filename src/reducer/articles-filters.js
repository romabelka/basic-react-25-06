import { FILTER_ARTICLES } from '../constants'

export default (state= {names: [], dates: {from: null, to: null}}, action) => {
  const { type, payload } = action
  console.log('---', action)
  switch (type) {
    case FILTER_ARTICLES:
      return Object.assign({}, state, payload)

    default:
      return state
  }
}
