import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { CommentRecord, EntityRecord } from './records'

export default (comments = new EntityRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return comments.mergeIn(
        ['entities'],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return comments.mergeIn(['entities'], arrToMap(response, CommentRecord))

    default:
      return comments
  }
}
