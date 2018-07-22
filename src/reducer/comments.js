import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentsRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerState = Record({
  entities: arrToMap([], CommentsRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (state = new ReducerState(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(['entities', randomId], {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .set('entities', arrToMap(response.records, CommentsRecord))
        .set('loaded', true)
        .set('loading', false)

    default:
      return state
  }
}
