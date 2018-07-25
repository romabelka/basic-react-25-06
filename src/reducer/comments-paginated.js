import { LOAD_COMMENTS, SUCCESS } from '../constants'
import { Record, OrderedMap, OrderedSet } from 'immutable'
import { arrToMap } from './utils'
import { CommentRecord } from './comments'

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  total: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action
  const { total, comments } = response

  const { pageId } = payload
  switch (type) {
    case LOAD_COMMENTS + SUCCESS:
      return state
        .setIn(['entities', pageId], new OrderedSet(comments))
        .set('total', total)
    default:
      return state
  }
}
