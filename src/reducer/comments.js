import {} from '../constants'
import { normalizedComments } from '../fixtures'
import {ADD_ARTICLE_COMMENT} from "../constants";

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type } = action

  switch (type) {
    case ADD_ARTICLE_COMMENT: {
      const comment = { id: action.payload.id, user: 'current', text: action.payload.commentText }
      return {...commentsState, [comment.id]: comment }
    }

    default:
        return commentsState
  }

  return commentsState
}
