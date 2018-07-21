import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

export default (comments = arrToMap([], CommentRecord), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      // todo - post comment to server
      return comments.set(
        randomId,
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return comments.merge(arrToMap(response, CommentRecord))

    default:
      return comments
  }
}
