export default () => (next) => (action) => {
  next({
    ...action,
    id: Math.random()
      .toString(36)
      .substr(2, 9)
  })
}
