import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
// import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'
// import { Record } from 'immutable'

import { ReducerState, CommentRecord } from '../records'

export default (state = new ReducerState(), action) => {
  const { type, payload, randomId, response } = action
  switch (type) {
    case ADD_COMMENT:
      return state.mergeIn(
        ['entities'],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )
    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    default:
      return state
  }
}
