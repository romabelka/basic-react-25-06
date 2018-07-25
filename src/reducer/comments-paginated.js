import { LOAD_COMMENTS, SUCCESS } from '../constants'
import { Record, OrderedMap, OrderedSet } from 'immutable'
import { arrToMap, arrToSet } from './utils'
import { CommentRecord } from './comments'

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  total: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case LOAD_COMMENTS + SUCCESS:
      const { total, comments } = response
      const { pageId } = payload

      return state
        .setIn(['entities', pageId], new arrToSet(comments, CommentRecord))
        .set('total', total)
    default:
      return state
  }
}
