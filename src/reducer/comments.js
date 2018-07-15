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
      console.log(commentsState)
      const { user, commentText, articleId, commentId } = payload
      let comments = JSON.parse(JSON.stringify(commentsState))
      console.log(commentId, comments)
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
