import { ADD_COMMENT } from '../constants'

export default () => (next) => (action) => {
  if (action.type !== ADD_COMMENT) {
    next(action)
    return
  }

  next({
    ...action,
    payload: {
      ...action.payload,
      id: Math.random()
        .toString(36)
        .substr(2, 9)
    }
  })
}
