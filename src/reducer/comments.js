import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START, FAIL } from '../constants'
import { arrToMap, getReducerState } from './utils'
import { Record } from 'immutable'
const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})
export default (state = getReducerState(CommentRecord), action) => {
  const { type, payload, response, error, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(['entities', randomId], {
        ...payload.comment,
        id: randomId
      })
    case LOAD_COMMENTS + START:
      console.log('loading comments')
      return state.set('loading', true).set('loaded', false)
    case LOAD_COMMENTS + SUCCESS:
      console.log('comments succeed', response, error)
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_COMMENTS + FAIL:
      return state.set('error', error)
    default:
      return state
  }
}
