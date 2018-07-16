import { CREATE_ID } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === CREATE_ID) {
    return Date.now().toString()
  }

  return next(action)
}
