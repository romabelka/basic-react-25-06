import { ADD_COMMENT } from './../constants'

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_COMMENT:
      action.payload.id =
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      next(action)
      break
    default:
      next(action)
  }
}
