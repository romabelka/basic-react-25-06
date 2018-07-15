import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload, id } = action
  switch (type) {
    case ADD_COMMENT:
      console.log('src/reducer/comments.js', payload, id)
      return {
        ...commentsState,
        [id]: { id: id, user: payload.user, text: payload.text }
      }
  }

  return commentsState
}
