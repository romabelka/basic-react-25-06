import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  const { type } = action
  switch (type) {
    case ADD_COMMENT: {
      action.payload.id =
        '#' + Math.floor(Math.random() * 1000000000) + 'zxcqwtfxf'
      next(action)
      break
    }
    default: {
      next(action)
    }
  }
}
