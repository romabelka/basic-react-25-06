import { USER_ERROR } from '../constants'

export default ({ userError } = { userError: '' }, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_ERROR:
      return { userError: payload }

    default:
      return { userError: '' }
  }
}
