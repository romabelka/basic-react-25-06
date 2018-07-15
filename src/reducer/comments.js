import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      const { user, commentText, commentId } = payload
      let comments = JSON.parse(JSON.stringify(commentsState))

      comments[commentId] = {
        id: commentId,
        user,
        text: commentText
      }

      return comments

    default:
      return commentsState
  }
}
