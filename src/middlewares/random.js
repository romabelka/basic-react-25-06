const uuidv4 = require('uuid/v4')

export default (store) => (next) => (action) => {
  const { setRandomId, ...rest } = action
  if (!setRandomId) return next(action)

  next({
    ...rest,
    randomId: uuidv4()
  })
}
