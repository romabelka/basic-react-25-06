export default (store) => (next) => (action) => {
  if (action.payload.hasOwnProperty('id') && action.payload.id === null) {
    action.payload.id = Math.random().toString(32).substr(2)
  }
  next(action)
}
