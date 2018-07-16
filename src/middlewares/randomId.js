export default (store) => (next) => (action) => {
  if (!action.getCommentId) return next(action)
  next({
    ...action,
    randomId: (Date.now() + Math.random()).toString()
  })
}
