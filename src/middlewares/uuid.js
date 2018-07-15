import { ADD_COMMENT } from '../constants'
const uuidv4 = require('uuid/v4')

export default (store) => (next) => (action) => {
  console.log('---', 'before uuid', store.getState())
  console.log('---', 'dispatching uuid', action)
  console.log('---', 'generate uuid', uuidv4())
  switch (action.type) {
    case ADD_COMMENT:
      next({
        ...action,
        id: uuidv4()
      })
      break
    default:
      next(action)
  }

  console.log('---', 'after uuid', store.getState())
}
