import { ADD_COMMENT } from '../constants'
const uuid = require('uuid/v4')

const actionWithCommentId = (action) => {
  const { payload } = action
  console.log('-- action', action)
  const newId = uuid()
  let newAction = {
    ...action,
    payload: {
      ...payload,
      comment: {
        ...payload.comment,
        id: newId
      }
    }
  }
  console.log('-- new action', newAction)

  return newAction
}

export default (store) => (next) => (action) => {
  const { type } = action
  if (type === ADD_COMMENT) {
    const state = store.getState()
    console.log('-- add comment middleware', state)
    const newAction = actionWithCommentId(action)
    next(newAction)
  } else {
    next(action)
  }
}
