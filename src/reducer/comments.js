import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrToObject } from '../util'

export default (state = arrToObject(normalizedComments), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        [randomId]: {
          ...payload.comment,
          id: randomId
        }
      }
    default:
      return state
  }
}
