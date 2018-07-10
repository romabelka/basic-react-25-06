import { SELECT } from '../constants'

export default (selected = null, action) => {
  const { type, payload } = action
  switch (type) {
    case SELECT:
      return payload.selected
    default:
      return selected
  }
}
