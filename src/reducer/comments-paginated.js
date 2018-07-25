import { LOAD_COMMENTS, SUCCESS } from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToSet } from './utils'
// import {CommentRecord} from './comments'

export const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  total: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, response } = action

  switch (type) {
    case LOAD_COMMENTS + SUCCESS:
      const { total, records } = response
      const { pageId } = payload
      return state
        .setIn(['entities', pageId], arrToSet(records, CommentRecord))
        .set('total', total)
    default:
      return state
  }
}
