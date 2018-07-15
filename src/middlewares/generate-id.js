import { ADD_COMMENT } from '../constants'
export default (store) => (next) => (action) => {
  let result = next(action)
  const { type, payload } = action

  if (type === ADD_COMMENT) {
    const id = generateId()
    console.log(`'generated id : ${id}`)
    result = next({
      type,
      payload: {
        user: payload.user,
        commentText: payload.commentText,
        articleId: payload.articleId,
        commentId: id
      }
    })
  }
  return result
}

function generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // eslint-disable-next-line
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
