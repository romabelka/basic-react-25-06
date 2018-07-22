import { ADD_COMMENT, LOAD_COMMENTS, FAIL, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerState = Record({
  entities: arrToMap([], CommentRecord)
})

export default (comments = new ReducerState(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return comments.setIn(['entities', randomId], {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + SUCCESS:
      return comments.set('entities', arrToMap(response, CommentRecord))

    default:
      return comments
  }
}
